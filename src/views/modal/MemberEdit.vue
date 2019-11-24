<template>
  <div>
    <b-modal
      :id="'edit' + edit._id"
      ref="memberEdit"
      hide-footer
      centered
      no-stacking
      title="Edit TEAM MEMBER"
    >
      <form name="playerForm" @submit="submitPlayerForm">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="First Name:"
          label-for="Firstname"
        >
          <b-form-input id="Firstname" v-model="playerDetail.firstName" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Middle Name:"
          label-for="middleName"
        >
          <b-form-input id="middleName" v-model="playerDetail.middleName"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Last Name:"
          label-for="lastName"
        >
          <b-form-input id="lastName" v-model="playerDetail.surname" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Contact No:"
          label-for="contact"
        >
          <b-form-input
            type="tel"
            maxlength="10"
            id="contact"
            v-model="playerDetail.mobile"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Email ID:"
          label-for="email"
        >
          <b-form-input type="email" id="email" v-model="playerDetail.email"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Age:"
          label-for="age"
        >
          <b-form-input id="age" type="tel" maxlength="2" v-model="playerDetail.age" required></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Key Role:"
          label-for="key-role"
        >
          <b-form-select id="key-role" :options="keyRole" v-model="playerDetail.keyRole" required></b-form-select>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Batting Type:"
          label-for="battingType"
        >
          <b-form-select
            id="battingType"
            :options="battingType"
            v-model="playerDetail.battingType"
            required
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Bowling Type:"
          label-for="bowlingType"
        >
          <b-form-select
            id="bowlingType"
            :options="bowlingType"
            v-model="playerDetail.bowlingType"
            required
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Wicket Keeper:"
          label-for="wicketkeeper"
        >
          <b-form-select
            id="wicketkeeper"
            :options="wicketKeeper"
            v-model="playerDetail.isWicketkeeper"
            required
          ></b-form-select>
        </b-form-group>
        <b-form-group id="exampleInputGroup1" label-for="exampleInput1" required>
          <b-button class="mt-3" raised @click="onClickFile" variant="primary">Upload Player Pic</b-button>
          <input
            type="file"
            style="display:none"
            ref="fileInput"
            accept="image/*"
            @change="onFilePicked"
          />
          <div>
            <span>
              <font
                color="red"
                class="note small"
              >Please Upload Square Shape Images and Size less than 1MB</font>
            </span>
          </div>
        </b-form-group>
        <b-form-group v-if="playerDetail.photograph">
          <img :src="playerDetail.photograph | uploadpath" width="150" height="auto" />
        </b-form-group>
        <div v-if="errorCheck">{{ errMessage }}</div>
        <b-button class="mt-3" type="submit" variant="success">Submit</b-button>
      </form>
      <!-- <b-button hidden variant="outline-primary" @click="$bvModal.hide('modal-1')">Cancel</b-button> -->
    </b-modal>
  </div>
</template>

<script>
import service from "@/service/apiservice";
// import filter from "@/filters/filter.js";

export default {
  name: "MemberEdit",
  props: ["edit"],
  data() {
    return {
      status: "",
      modal: "",
      playerDetail: {},
      errorCheck: false,
      errMessage: "",
      mainImage: null,
      keyRole: [
        { value: "Batsman", text: "Batsman" },
        { value: "Bowler", text: "Bowler" },
        { value: "All rounder", text: "All rounder" }
      ],
      battingType: [
        { value: "Right Hand", text: "Right Hand" },
        { value: "Left Hand", text: "Left Hand" }
      ],
      bowlingType: [
        { value: "Right Arm Medium Pace", text: "Right Arm Medium Pace" },
        { value: "Left Arm Medium Pace", text: "Left Arm Medium Pace" },
        { value: "Left Arm Spinner", text: "Left Arm Spinner" },
        { value: "Off Spinner", text: "Off Spinner" },
        { value: "Leg Spinner", text: "Leg Spinner" },
        { value: "None", text: "None" }
      ],
      wicketKeeper: [
        { value: true, text: "Yes" },
        { value: false, text: "No" }
      ]
    };
  },
  created() {
    this.page = this.$route.params.page;
    this.playerDetail = this.edit;
  },
  methods: {
    submitPlayerForm(e) {
      e.preventDefault();
      if (this.playerDetail.mobile) {
        var mobile = parseInt(this.playerDetail.mobile);
        if (mobile.toString().length < 10) {
          this.errorCheck = true;
          this.errMessage = "Contact should be of 10 digits and valid.";
        } else {
          this.playerDetail.mobile = mobile;
        }
      }
      if (this.playerDetail.age) {
        var age = parseInt(this.playerDetail.age);
        if (age.toString().length == 0 || age.toString().length > 2) {
          this.errorCheck = true;
          this.errMessage = "Age should be of 2 digits.";
        } else {
          this.playerDetail.age = age;
        }
      }
      if (
        this.playerDetail.age &&
        this.playerDetail.battingType &&
        this.playerDetail.bowlingType &&
        this.playerDetail.firstName &&
        this.playerDetail.isWicketkeeper &&
        this.playerDetail.keyRole &&
        this.playerDetail.mobile &&
        this.playerDetail.surname
      ) {
        var player = this._.cloneDeep(this.playerDetail);
        delete player._id;
        service.updatePlayer(this.playerDetail._id, player, result => {
          if (result.data.nModified == 1) {
            this.errorCheck = false;
            this.$toasted.success("Member details updated successfully");
            this.$router.go(0);
          } else {
            this.errorCheck = true;
            this.errMessage = "Retry updating the member.";
          }
        });
      } else {
        this.errorCheck = true;
        this.errMessage =
          "Except Email and Middle Name all the fields are compulsory";
      }
    },
    onClickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
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
              this.playerDetail.photograph = data.data.data[0];
            }
          });
        }
      } else {
        this.$toasted.error("Select Image");
      }
    }
  }
};
</script>
<style lang="scss">
// @import "~@/scss/import";
.modal-body {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  text-align: center;
  label {
    text-align: left;
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
.show > .btn-success.dropdown-toggle:focus {
  box-shadow: unset;
}
</style>
