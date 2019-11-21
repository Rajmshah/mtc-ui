<template>
  <div class="team-detail my-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
          <div class="card p-5">
            <div class="text-right">
              <router-link to="/login">
                <b-button variant="danger">Logout</b-button>
              </router-link>
            </div>
            <div class="text-center">
              <span class="head-title">Team Details</span>
            </div>
            <div class="my-5 mx-auto" v-if="addTeam">
              <b-form inline @submit="addTeamForm" name="addTeamDetail">
                <label class="mr-sm-2 mb-2" for="inline-form-input-team-name">Team Name:</label>
                <b-input
                  id="inline-form-input-team-name"
                  class="mb-2 mr-4"
                  v-model="form.name"
                  placeholder="Team Name"
                ></b-input>

                <label class="mr-sm-2 mb-2" for="inline-form-input-village">Village:</label>
                <b-input
                  id="inline-form-input-village"
                  class="mb-2 mr-4"
                  v-model="form.village"
                  placeholder="Village"
                ></b-input>

                <b-button
                  class="mr-4 mb-2"
                  raised
                  @click="onClickFile"
                  variant="primary"
                >Upload Team Logo</b-button>
                <input
                  type="file"
                  style="display:none"
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked"
                />
                <div v-if="teamLogo" class="mr-4">
                  <img :src="teamLogo | uploadpath" width="100" height="auto" alt />
                </div>
                <b-button class="mb-2" type="submit" variant="success">Submit</b-button>
              </b-form>
              <div v-if="checkError">{{ message }}</div>
            </div>
            <div class="my-5 mx-auto" v-if="showTeam">
              <b-form inline>
                <label class="mr-sm-2 mb-2" for="inline-form-custom-select-pref">Team Name:</label>
                <b-input
                  id="inline-form-input-name"
                  class="mb-2 mr-4"
                  v-model="teamDetail.name"
                  placeholder="Team Name"
                ></b-input>

                <label class="mr-sm-2 mb-2" for="inline-form-custom-select-pref">Village:</label>
                <b-input
                  id="inline-form-input-name"
                  class="mb-2 mr-4"
                  v-model="teamDetail.village"
                  placeholder="Village"
                ></b-input>

                <!-- <label
                  class="mr-sm-2 mb-2"
                  for="inline-form-custom-select-pref"
                  v-if="teamDetail.logo"
                  >Team Logo:</label
                >-->
                <b-button
                  class="mr-sm-2 mb-2"
                  raised
                  @click="onClickFile"
                  variant="primary"
                >Upload Team Logo</b-button>
                <input
                  type="file"
                  style="display:none"
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked"
                />
                <img
                  class="img-fluid mr-4"
                  :src="teamDetail.logo | uploadpath"
                  width="100"
                  height="auto"
                  alt
                  v-if="teamDetail.logo"
                />

                <b-button class="mr-4 mb-2" @click="updateTeam" variant="success">Edit</b-button>
                <b-button class="mb-2" @click="goToPage" variant="warning">Cancel</b-button>
              </b-form>
              <div v-if="checkError">{{ message }}</div>
            </div>
            <div
              class="text-center mb-5"
              v-if="showAddPlayers && totalPlayers != playerDetails.length"
            >
              <b-button v-b-modal.modal-1 variant="primary">Add Team Member</b-button>
              <memberRegistration :teamId="teamDetail._id"></memberRegistration>
            </div>
            <div class="table-responsive" v-if="showPlayers">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <Delete
                    class="text-center"
                    v-bind:data="{ id: id }"
                    v-on:event_child="deleteAndRefresh"
                  ></Delete>
                  <tr v-for="(player, $index) in playerDetails" :key="player._id">
                    <td>{{ $index + 1 }}</td>
                    <td>{{ player.fullName }}</td>
                    <td>{{ player.age }}</td>
                    <td>{{ player.keyRole }}</td>
                    <td>
                      <b-button class="mr-2" v-b-modal="'view' + player._id" variant="info">View</b-button>
                      <b-button class="mr-2" v-b-modal="'edit' + player._id" variant="primary">Edit</b-button>
                      <b-button
                        variant="danger"
                        v-b-modal="player._id"
                        @click="passData(player._id)"
                      >Delete</b-button>
                      <div class>
                        <memberView :display="player"></memberView>
                        <memberEdit :edit="player"></memberEdit>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "@/service/apiservice";
import Delete from "@/views/modal/delete.vue";
import memberView from "@/views/modal/MemberView.vue";
import memberEdit from "@/views/modal/MemberEdit.vue";
import memberRegistration from "@/views/modal/MemberRegistration.vue";
export default {
  data() {
    return {
      user: "",
      team: "",
      id: "",
      view: "",
      index: "",
      form: {},
      playerform: {},
      teamDetail: {},
      playerDetails: [],
      teamLogo: null,
      totalPlayers: 0,
      addTeam: true,
      showTeam: false,
      showAddPlayers: false,
      showPlayers: false,
      checkError: false
    };
  },
  components: { memberRegistration, memberView, memberEdit, Delete },
  created() {
    this.getPlayerCount();
    this.checkUser();
  },
  methods: {
    getPlayerCount() {
      service.getPlayerCount({}, setting => {
        if (setting.data) {
          this.totalPlayers = setting.data[0].playerCount;
        }
      });
    },
    checkUser() {
      if (this.$route.params.token) {
        service.getOneByToken(this.$route.params.token, data => {
          if (data.data) {
            this.form.user = data.data._id;
            this.checkTeam(data.data._id);
          } else {
            this.$router.push({ name: "Login" });
          }
        });
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    checkTeam(userId) {
      service.getOneByUser(userId, data => {
        if (data.data) {
          this.form = data.data;
          this.teamDetail = data.data;
          this.addTeam = false;
          this.showTeam = true;
          this.showAddPlayers = true;
          this.checkPlayer();
        } else {
          this.addTeam = true;
          this.showTeam = false;
          this.showAddPlayers = false;
        }
      });
    },
    checkPlayer() {
      service.searchPlayer({ team: this.teamDetail._id }, data => {
        if (data.data) {
          this.playerDetails = data.data;
          this.addTeam = false;
          this.showTeam = true;
          this.showAddPlayers = true;
          this.showPlayers = true;
        } else {
          this.addTeam = false;
          this.showTeam = true;
          this.showAddPlayers = true;
          this.showPlayers = false;
        }
      });
    },
    addTeamForm(e) {
      e.preventDefault();
      if (this.form.name) {
        service.saveTeam(this.form, data => {
          if (data.data) {
            this.playerform.team = data.data._id;
            this.showTeam = true;
            this.addTeam = false;
            this.showAddPlayers = true;
            this.checkError = false;
            this.$toasted.success("Saved Team Details Successfully");
            this.getOneTeam(data.data._id);
          } else {
            this.checkError = true;
            this.showTeam = false;
            this.addTeam = true;
            this.showAddPlayers = false;
            this.message = "Retry to create team.";
          }
        });
      } else {
        this.checkError = true;
        this.message = "Team name is required.";
      }
    },
    getOneTeam(teamId) {
      service.getOneTeam(teamId, data => {
        if (data.data) {
          this.teamDetail = data.data;
        }
      });
    },
    updateTeam() {
      var team = this._.cloneDeep(this.teamDetail);
      delete team._id;
      if (team.name) {
        service.updateTeam(this.teamDetail._id, team, updatedTeam => {
          if (updatedTeam.data.nModified == 1) {
            this.checkError = false;
            this.$toasted.show("Updated Team Details Successfully");
          } else {
            this.checkError = true;
            this.message = "Retry the editing of team details.";
          }
        });
      } else {
        this.checkError = true;
        this.message = "Team name is required.";
      }
    },
    deleteAndRefresh(obj) {
      service.deletePlayer(obj._id, data => {
        this.checkPlayer();
      });
    },

    passData(id) {
      this.id = id;
    },
    onClickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please Add Valid File!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      const formData = new FormData();
      formData.append("file", this.image);
      service.upload(formData, data => {
        if (data.data.data) {
          this.teamLogo = data.data.data[0];
          this.form.logo = this.teamLogo;
        }
      });
    },
    goToPage() {
      this.checkTeam(this.form.user);
    }
  }
};
</script>

<style lang="scss">
.team-detail {
  .card {
    border-radius: 5rem;
  }
  .head-title {
    font-size: 2rem;
    font-weight: bold;
  }
  .form-inline .form-control {
    width: 175px;
  }
}
</style>
