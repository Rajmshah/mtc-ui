<template>
  <div class="team-detail mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
          <div class="card p-5">
            <div class="text-center">
              <span class="head-title">Team Details</span>
            </div>
            <div class="my-5 mx-auto">
              <b-form inline>
                <label class="mr-sm-2 mb-2" for="inline-form-custom-select-pref">Team Name:</label>
                <b-input id="inline-form-input-name" class="mb-2 mr-4" placeholder="Team Name"></b-input>

                <label class="mr-sm-2 mb-2" for="inline-form-custom-select-pref">Village:</label>
                <b-input id="inline-form-input-name" class="mb-2 mr-4" placeholder="Village"></b-input>

                <b-button variant="primary" class="mr-4 mb-2">Upload Team Logo</b-button>

                <b-button class="mb-2" type="submit" variant="success">Submit</b-button>
              </b-form>
            </div>
            <div class="my-5 mx-auto">
              <b-form inline>
                <label class="mr-sm-2 mb-2" for="inline-form-custom-select-pref">Team Name:</label>
                <b-input
                  id="inline-form-input-name"
                  read-only
                  class="mb-2 mr-4"
                  placeholder="Team Name"
                ></b-input>

                <label class="mr-sm-2 mb-2" for="inline-form-custom-select-pref">Village:</label>
                <b-input
                  id="inline-form-input-name"
                  read-only
                  class="mb-2 mr-4"
                  placeholder="Village"
                ></b-input>

                <label class="mr-sm-2 mb-2" for="inline-form-custom-select-pref">Team Logo:</label>
                <img
                  class="img-fluid mr-4"
                  src="@/assets/mtc-logo.png"
                  width="100"
                  height="auto"
                  alt
                />

                <b-button class="mb-2" variant="success">Edit</b-button>
              </b-form>
            </div>
            <div class="text-center mb-5">
              <b-button variant="primary" class>Add Team Member</b-button>
            </div>
            <div class>
              <table class="table table-bordered table-responsive">
                <thead>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Role</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <td>1</td>
                  <td>Raj Shah</td>
                  <td>27</td>
                  <td>Batsman</td>
                  <td>
                    <b-button class="mr-2" variant="info">View</b-button>
                    <b-button class="mr-2" variant="primary">Edit</b-button>
                    <b-button variant="danger">Delete</b-button>
                  </td>
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
export default {};
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