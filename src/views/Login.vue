<template>
  <div class="login mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
          <div class="card p-5">
            <div class="logo">
              <img
                src="@/assets/mtc-logo.png"
                width="100"
                height="auto"
                alt="mtc-logo"
              />
            </div>
            <div class="my-5">
              <form name="loginForm" @submit="submitForm">
                <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="Username:"
                  label-for="username"
                >
                  <b-form-input
                    v-model="form.username"
                    id="username"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="Password:"
                  label-for="password"
                >
                  <b-form-input
                    type="password"
                    v-model="form.password"
                    id="password"
                    required
                  ></b-form-input>
                </b-form-group>
                <div v-if="checkError">{{ message }}</div>
                <b-button class="mt-3" type="submit" variant="success"
                  >Sign In</b-button
                >
              </form>
            </div>
            <div class>
              In case you have forgotten the password or you have trouble
              logging please contact:
              <a href="tel:09619711447">9619711447</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "@/service/apiservice";
import _ from "vue-lodash";
export default {
  data() {
    return {
      form: {},
      checkError: false
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      if (this.form.username && this.form.password) {
        service.login(this.form, data => {
          if (_.isEqual(data.code, 200)) {
            var len = data.data.accessToken.length - 1;
            var accessToken = data.data.accessToken[len].token;
            this.$router.push({
              name: "Team Detail",
              params: {
                token: accessToken
              }
            });
          } else if (_.isEqual(data.code, 403)) {
            this.checkError = true;
            this.message = data.msg;
          }
        });
      } else {
        this.checkError = true;
        this.message = "All fields are mandatory.";
      }
    }
  }
};
</script>

<style lang="scss">
.login {
  .card {
    border-radius: 5rem;
  }
  input {
    border: 0;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
  }
}
</style>
