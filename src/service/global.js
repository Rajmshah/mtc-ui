import Vue from "vue";
export default {
  getMessage(module, code, response) {
    const moduleMsg = Vue._.find(this.messages, ["name", module]);
    return {
      msg: moduleMsg.messages[code],
      code: response.status,
      data: response.data
    };
  },
  messages: [
    {
      name: "login",
      messages: {
        200: "Congratulations! login successful.",
        500: "Internal server error",
        403: "Invalid Username or Password.",
        default: "Some error occurred."
      }
    },
    {
      name: "verifyqr",
      messages: {
        200: "Entry successful.",
        412: "No such member exists.",
        default: "Some error occured."
      }
    },
    {
      name: "memberEntry",
      messages: {
        200: "User fount.",
        403: "Member does not exists.",
        401: " Unauthorized access.",
        default: "Some error occured."
      }
    },
    {
      name: "verifyMemberAtEntry",
      messages: {
        200: "Verification and Entry created.",
        403: "Entry already done.",
        default: "Some error occured."
      }
    },
    {
      name: "verifyMemberAtPit",
      messages: {
        200: "Verification and Entry created.",
        403: "Entry already done.",
        default: "Some error occured."
      }
    },
    {
      name: "getEntry",
      messages: {
        200: "Entry data",
        204: "No entries for today.",
        default: "Some error occured."
      }
    },
    {
      name: "entryDashboard",
      messages: {
        200: "",
        204: "No data fount",
        default: "Some error occured."
      }
    },
    {
      name: "showgame",
      messages: {
        200: "all data.",
        204: "Content not found. The page you have requested cannot be displayed right now. It may be temporarily unavailable. Please try again.",
        default: "Some error occured."
      }
    },
    {
      name: "addpoint",
      messages: {
        200: "save succesful.",
        204: "No member found.",
        default: "Some error occured."
      }
    }
  ]
};
