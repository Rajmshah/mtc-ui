<template>
  <div>
    <b-modal
      :id="'view' + display._id"
      ref="memberView"
      hide-footer
      centered
      no-stacking
      title="VIEW TEAM MEMBER"
    >
      <form name="playerForm">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="First Name:"
          label-for="Firstname"
        >
          <b-form-input id="Firstname" readonly v-model="playerDetail.firstName"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Middle Name:"
          label-for="middleName"
        >
          <b-form-input id="middleName" readonly v-model="playerDetail.middleName"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Last Name:"
          label-for="lastName"
        >
          <b-form-input id="lastName" readonly v-model="playerDetail.surname"></b-form-input>
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
            readonly
            v-model="playerDetail.mobile"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Email ID:"
          label-for="email"
        >
          <b-form-input type="email" id="email" readonly v-model="playerDetail.email"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Age:"
          label-for="age"
        >
          <b-form-input id="age" type="tel" maxlength="2" readonly v-model="playerDetail.age"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="3"
          label="Key Role:"
          label-for="key-role"
        >
          <b-form-select id="key-role" :options="keyRole" disabled v-model="playerDetail.keyRole"></b-form-select>
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
            disabled
            v-model="playerDetail.battingType"
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
            disabled
            v-model="playerDetail.bowlingType"
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
            disabled
            v-model="playerDetail.isWicketkeeper"
          ></b-form-select>
        </b-form-group>
        <b-form-group v-if="playerDetail.photograph">
          <img :src="playerDetail.photograph | uploadpath" width="150" height="auto" />
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "MemberView",
  props: ["display"],
  data() {
    return {
      status: "",
      modal: "",
      playerDetail: {},
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
    this.playerDetail = this.display;
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
</style>
