<template>
  <div>
    <headerSection></headerSection>
    <section class="contact-us pt-5">
      <!-- <div class="banners-img" ng-if="banner.banner">
    <img
      ng-src="{{ banner.banner | uploadpath }}"
      alt="{{ banner.name }} Banner"
      class="img-responsive"
    />
      </div>-->
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="text-center text-uppercase oswald-bold main-head font-32 mb-5">
              <span class="border-bottom border-dark px-2">Contact us</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="text-center font-24 mt-3 mb-5">
              <em>Get in touch with us!</em>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-10 mx-auto mb-5">
            <!-- ng-class="{'mb-3':contact.officeAddress,'mb-5':!contact.officeAddress}" -->
            <div class="row no-gutters">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="text-center">
                  <div class>
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                  </div>
                  <div class="text-uppercase oswald-bold">Email</div>
                  <div class>
                    <div class v-for="email in contact.email" :key="email">{{ email }}</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="text-center border-left border-right border-dark px-3 mobile-border">
                  <div class>
                    <font-awesome-icon :icon="['fas', 'mobile']" />
                  </div>
                  <div class="text-uppercase oswald-bold">Mobile</div>
                  <div class>
                    <div class v-for="mobile in contact.mobile" :key="mobile.name">
                      <strong class="titillium-web-semiBold">{{ mobile.name }}</strong>
                      : {{mobile.phone}}
                    </div>
                  </div>
                  <!-- <div class style=" word-break: break-all;">{{ contact.address }}</div> -->
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="text-center">
                  <div class>
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                  </div>
                  <div class="text-uppercase oswald-bold">Facebook Link</div>
                  <div class>
                    <div class v-for="link in contact.social" :key="link">
                      <a :href="link" target="_blank">Click Here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-10 mx-auto mb-5">
            <div class="text-center">
              <span class="text-uppercase oswald-bold">Office Address:</span>
              <span class="px-3">{{ contact.officeAddress }}</span>
            </div>
          </div>
        </div>
        <div class="row" hidden>
          <div class="col-lg-10 col-md-10 col-sm-12 col-12 mx-auto mb-5">
            <form name="enquiryForm" role="form" ng-submit="saveEnquiryForm(formData)">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id
                      ng-model="formData.name"
                      placeholder="Name"
                      only-alpha
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="tel"
                      class="form-control"
                      name="mobile"
                      maxlength="10"
                      minlength="8"
                      id
                      only-digits
                      ng-model="formData.mobile"
                      placeholder="Mobile"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id
                      ng-model="formData.email"
                      placeholder="Email ID"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class>
                    <textarea
                      class="form-control no-resize"
                      name="query"
                      id
                      maxlength="300"
                      rows="8"
                      ng-model="formData.query"
                      ng-draggable="false"
                      placeholder="Only upto 300 words"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="submit text-center mt-3">
                    <div
                      class="pb-3"
                      ng-if="showValidationError"
                    >Fill up all the fields with valid values.</div>
                    <div class="pb-3" ng-if="showError">Something went wrong. Resubmit the form.</div>
                    <button class="btn btn-dark" type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="google-map" v-if="map">
        <iframe
          :src="map"
          width="100%"
          height="400px"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <footerSection></footerSection>
  </div>
</template>

<script>
import headerSection from "@/views/Header.vue";
import footerSection from "@/views/Footer.vue";
export default {
  components: {
    headerSection,
    footerSection
  },
  data() {
    return {
      contact: {
        mobile: [
          { name: "Anil Jain", phone: 9619711447 },
          { name: "Manish Jain", phone: 9820174039 },
          { name: "Pankaj Jain", phone: 9324232929 }
        ],
        address:
          "5, Dev Ashish, Upashray Lane, Ghatkopar-East, Mumbai - 400077",
        officeAddress:
          "5, Dev Ashish, Upashray Lane, Ghatkopar-East, Mumbai - 400077",
        email: ["raj@wohlig.com"],
        social: ["http://facebook.com"]
      },
      map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.461309665937!2d75.71155415024158!3d26.888850983055047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b121b024b29%3A0xad9271b72d178aeb!2sMarudhar%20cricket%20club!5e0!3m2!1sen!2sin!4v1575681111745!5m2!1sen!2sin"
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_main.scss";
.map-container-6 {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map-container-6 iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
@media only screen and (max-width: 768px) {
  .text-center.border-left.border-right.border-dark.px-3.mobile-border {
    padding: 1rem 0;
    margin: 1rem 0;
    border-top: 1px solid #343a40 !important;
    border-bottom: 1px solid #343a40 !important;
    border-left: 0 !important;
    border-right: 0 !important;
  }
}
</style>