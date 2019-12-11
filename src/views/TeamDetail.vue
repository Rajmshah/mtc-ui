<template>
  <div class>
    <headerSection></headerSection>
    <div class="team-detail my-5 text-center">
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
              <div class="my-5 mx-auto mobile-space" v-if="addTeam">
                <b-form inline class="save-team" @submit="addTeamForm" name="addTeamDetail">
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
                    <img :src="teamLogo | serverimage" width="100" height="auto" alt />
                  </div>
                  <b-button class="mb-2" type="submit" variant="success">Submit</b-button>
                </b-form>
                <div v-if="checkError">{{ message }}</div>
              </div>
              <div class="my-5 mx-auto" v-if="showTeam">
                <b-form inline class="edit-team">
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
                  <div class="mobile-spacing">
                    <b-button
                      class="mr-2 mb-2"
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
                      :src="teamDetail.logo | serverimage"
                      width="100"
                      height="auto"
                      alt
                    />
                    <b-button
                      class="mr-4 mb-2 mobile-save"
                      @click="updateTeam"
                      variant="success"
                    >Save</b-button>
                    <b-button class="mb-2 mobile-cancel" @click="goToPage" variant="warning">Cancel</b-button>
                  </div>
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
              <div class="table-responsive text-nowrap" v-if="showPlayers">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Role</th>
                      <th colspan="3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <div class>
                      <deleteView
                        class="text-center"
                        v-bind:data="{ id: id }"
                        v-on:event_child="deleteAndRefresh"
                      ></deleteView>
                    </div>
                    <tr v-for="(player, $index) in playerDetails" :key="player._id">
                      <td>{{ $index + 1 }}</td>
                      <td>{{ player.fullName }}</td>
                      <td>{{ player.age }}</td>
                      <td>{{ player.keyRole }}</td>
                      <td>
                        <b-button v-b-modal="'view' + player._id" variant="info">View</b-button>
                        <div class>
                          <memberView :display="player"></memberView>
                        </div>
                      </td>
                      <td>
                        <b-button v-b-modal="'edit' + player._id" variant="primary">Edit</b-button>
                        <div class>
                          <memberEdit :edit="player"></memberEdit>
                        </div>
                      </td>
                      <td>
                        <b-button variant="danger" v-b-modal="'delete' + player._id">Delete</b-button>
                        <deleteView
                          class="text-center"
                          :data="{id:player._id}"
                          v-on:event_child="deleteAndRefresh"
                        ></deleteView>
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
    <footerSection></footerSection>
  </div>
</template>

<script>
import service from "@/service/apiservice";
import deleteView from "@/views/modal/delete.vue";
import memberView from "@/views/modal/MemberView.vue";
import memberEdit from "@/views/modal/MemberEdit.vue";
import memberRegistration from "@/views/modal/MemberRegistration.vue";
import footerSection from "@/views/Footer.vue";
import headerSection from "@/views/Header.vue";
export default {
  components: {
    memberRegistration,
    memberView,
    memberEdit,
    deleteView,
    headerSection,
    footerSection
  },
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
          if (data.data.village) {
            this.teamDetail.village = data.data.village;
          }
          if (data.data.name) {
            this.teamDetail.name = data.data.name;
          }
          if (data.data.logo) {
            this.teamDetail.logo = data.data.logo;
          }
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
          if (data.data.village) {
            this.teamDetail.village = data.data.village;
          }
          if (data.data.name) {
            this.teamDetail.name = data.data.name;
          }
          if (data.data.logo) {
            this.teamDetail.logo = data.data.logo;
          }
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
            this.$router.go(0);
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
      var files = event.target.files;
      if (files && files.length > 0 && files[0].name) {
        var filename = files[0].name;
        console.log("files", files);
        if (filename.lastIndexOf(".") <= 0) {
          this.$toasted.error("Please Add Valid File!");
        } else if (files[0].size > 1024 * 1024) {
          this.$toasted.error("Image size is greater than 1 MB");
        } else {
          var fileReader = new FileReader();
          fileReader.addEventListener("load", () => {
            this.imageUrl = fileReader.result;
          });
          fileReader.readAsDataURL(files[0]);
          this.image = files[0];
          var formData = new FormData();
          formData.append("file", this.image);
          service.upload(formData, data => {
            if (data.data.data) {
              this.$toasted.success("Image Uploaded Successfully");
              this.teamLogo = data.data.data[0];
              this.form.logo = this.teamLogo;
              this.teamDetail.logo = this.teamLogo;
            }
          });
        }
      } else {
        this.$toasted.error("Select Image");
      }
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
    border: 1px solid rgba(0, 0, 0, 1);
  }
  .head-title {
    font-size: 2rem;
    font-weight: bold;
  }
  .save-team .form-inline .form-control {
    width: 175px;
  }
  .form-inline .form-control {
    width: 160px;
  }
  .table-fixed {
    width: 100%;
    background-color: #f3f3f3;
    tbody {
      height: 200px;
      overflow-y: auto;
      width: 100%;
    }
    thead,
    tbody,
    tr,
    td,
    th {
      display: block;
    }
    tbody {
      td {
        float: left;
      }
    }
    thead {
      tr {
        th {
          float: left;
          background-color: #f39c12;
          border-color: #e67e22;
        }
      }
    }
  }
  .btn-primary:focus,
  .btn-primary.focus,
  .btn-primary:not(:disabled):not(.disabled):active:focus,
  .btn-primary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-primary.dropdown-toggle:focus,
  .btn-success:focus,
  .btn-success.focus,
  .btn-success:not(:disabled):not(.disabled):active:focus,
  .btn-success:not(:disabled):not(.disabled).active:focus,
  .show > .btn-success.dropdown-toggle:focus,
  .btn-info:focus,
  .btn-info.focus,
  .btn-info:not(:disabled):not(.disabled):active:focus,
  .btn-info:not(:disabled):not(.disabled).active:focus,
  .show > .btn-info.dropdown-toggle:focus,
  .btn-warning:focus,
  .btn-warning.focus,
  .btn-warning:not(:disabled):not(.disabled):active:focus,
  .btn-warning:not(:disabled):not(.disabled).active:focus,
  .show > .btn-warning.dropdown-toggle:focus,
  .btn-danger:focus,
  .btn-danger.focus,
  .btn-danger:not(:disabled):not(.disabled):active:focus,
  .btn-danger:not(:disabled):not(.disabled).active:focus,
  .show > .btn-danger.dropdown-toggle:focus {
    box-shadow: unset;
  }
}
@media only screen and (max-width: 992px) {
  .team-detail .form-inline .form-control {
    width: 190px;
  }
}
@media only screen and (max-width: 767px) {
  .team-detail .head-title {
    font-size: 1.5rem;
  }
  .team-detail .save-team .form-inline .form-control,
  .team-detail .form-inline .form-control {
    width: 100%;
  }
  .form-inline .form-control {
    margin-bottom: 1.25rem !important;
  }
  .my-5.mobile-space {
    margin-top: 1.75rem !important;
    margin-bottom: 0 !important;
  }
  .mobile-spacing {
    padding: 0 2rem;
  }
  .mobile-save,
  .mobile-cancel {
    margin-top: 1rem;
  }
  .edit-team {
    .form-control {
      margin-right: 0 !important;
    }
  }
}
@media only screen and (max-width: 492px) {
  .mobile-spacing {
    padding: 0;
  }
  .mobile-save,
  .mobile-cancel {
    margin-top: 1rem;
  }
  .img-fluid.mr-4 {
    margin-right: 0 !important;
  }
}
@media only screen and (max-width: 411px) {
  .mobile-spacing {
    img {
      width: 100%;
      margin: 1rem 0;
    }
  }
}
</style>
