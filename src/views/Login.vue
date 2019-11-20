<template>
  <div class="login mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
          <div class="card p-5">
            <div class="logo">
              <img src="@/assets/mtc-logo.png" width="100" height="auto" alt="mtc-logo" />
            </div>
            <div class="my-5">
              <form>
                <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="Username:"
                  label-for="input-horizontal"
                >
                  <b-form-input id="input-horizontal"></b-form-input>
                </b-form-group>
                <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="Password:"
                  label-for="input-horizontal"
                >
                  <b-form-input id="input-horizontal"></b-form-input>
                </b-form-group>
                <b-button class="mt-3" type="submit" variant="success">Sign In</b-button>
              </form>
            </div>
            <div class>
              In case you have forgotten the password or you have trouble logging please contact:
              <a
                href="tel:09619711447"
              >9619711447</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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