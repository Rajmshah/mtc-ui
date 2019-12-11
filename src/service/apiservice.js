import axios from "axios";
import Vue from "vue";
import globalJs from "@/service/global.js";
// Local

// const adminUrl = "http://api.mtcmarudharcup.com/";
const adminUrl = "http://localhost:3000/";

export default {
  // uploadUrl: "http://localhost:1330/api/upload/",
  // readFileUrl: "http://localhost:1330/api/upload/readFile",
  uploadUrl: "http://fileupload.mtcmarudharcup.com/api/upload/",
  readFileUrl: "http://fileupload.mtcmarudharcup.com/api/upload/readFile",
  login: (data, callback) =>
    axios
      .post(`${adminUrl}User/login`, data)
      .then(responseData => {
        callback(globalJs.getMessage("login", 200, responseData));
      })
      .catch(err => {
        if (Vue._.isEqual(err.response.status, 403)) {
          callback(globalJs.getMessage("login", 403, err.response));
        }
      }),
  getOneByToken: (token, callback) =>
    axios
      .get(`${adminUrl}User/getOneByToken/${token}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // save Team
  saveTeam: (data, callback) =>
    axios
      .post(`${adminUrl}Team/saveTeam`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  // update Team
  updateTeam: (id, data, callback) =>
    axios
      .put(`${adminUrl}Team/updateTeam/${id}`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  getOneByUser: (user, callback) =>
    axios
      .get(`${adminUrl}Team/getOneByUser/${user}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  // get one Team
  getOneTeam: (id, callback) =>
    axios
      .get(`${adminUrl}Team/getOne/${id}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  searchPlayer: (data, callback) =>
    axios
      .get(`${adminUrl}Player/`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  getPlayerCount: (data, callback) =>
    axios
      .get(`${adminUrl}Setting/`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  // save Player
  savePlayer: (data, callback) =>
    axios
      .post(`${adminUrl}Player/savePlayer`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  // delete Player
  deletePlayer: (id, callback) =>
    axios
      .delete(`${adminUrl}Player/deletePlayer/${id}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  // get one Player
  getOnePlayer: (id, callback) =>
    axios
      .get(`${adminUrl}Player/getOne/${id}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  // update Player
  updatePlayer: (id, data, callback) =>
    axios
      .put(`${adminUrl}Player/updatePlayer/${id}`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  //Search About
  searchAbout: (data, callback) =>
    axios
      .get(`${adminUrl}About/`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  //Sponsor List
  getList: (data, callback) =>
    axios
      .get(`${adminUrl}Sponsor/getList`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  //Contact List
  searchContact: (data, callback) =>
    axios
      .get(`${adminUrl}Contact/`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  //Enquiry FOrm
  saveEnquiryForm: (data, callback) =>
    axios
      .post(`${adminUrl}EnquiryForm/saveEnquiryForm`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  //Home Page
  searchHomepage: (data, callback) =>
    axios
      .get(`${adminUrl}Homepage/`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  //Get Team List
  getAllTeam: (data, callback) =>
    axios
      .get(`${adminUrl}Team/getAll`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  //Get Sponsor All
  getAllSponsor: (data, callback) =>
    axios
      .get(`${adminUrl}Sponsor/getAll`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),
  //Image Upload
  upload: function(formData, callback) {
    axios
      .post(this.uploadUrl, formData)
      .then(data => {
        callback(data);
      })
      .catch(err => {
        callback(err);
      });
  }
};
