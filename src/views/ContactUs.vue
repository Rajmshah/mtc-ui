<template>
  <div>
    <headerSection></headerSection>
    <section class="contact-us pt-5">
      <!-- <div class="banners-img" ng-if="banner.banner">
    <img
      ng-src="{{ banner.banner | serverimage }}"
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
                      <a :href="link" target="_blank" class="social-link no-underline">Click Here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="contact.address || contact.officeAddress">
          <div class="col-10 mx-auto">
            <div class="d-flex mb-5 address">
              <div class="flex-fill text-center mb-4" v-if="contact.address">
                <span class="text-uppercase oswald-bold">Address:</span>
                <span class="px-3">{{ contact.address }}</span>
              </div>
              <div class="flex-fill text-center mb-4" v-if="contact.officeAddress">
                <span class="text-uppercase oswald-bold">Office Address:</span>
                <span class="px-3">{{ contact.officeAddress }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 col-md-10 col-sm-12 col-12 mx-auto mb-5">
            <b-form name="enquiryForm" role="form" @submit="saveEnquiryForm">
              <div class="row">
                <div class="col-md-6">
                  <b-form-group>
                    <b-form-input
                      type="text"
                      class="form-control"
                      name="name"
                      id
                      v-model="formData.name"
                      placeholder="Name"
                    />
                    <!-- only-alpha -->
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      type="tel"
                      class="form-control"
                      name="mobile"
                      maxlength="10"
                      minlength="8"
                      id
                      v-model.number="formData.mobile"
                      placeholder="Mobile"
                    />
                    <!-- only-digits -->
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      type="email"
                      class="form-control"
                      name="email"
                      id
                      v-model="formData.email"
                      placeholder="Email ID"
                    />
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group>
                    <b-form-textarea
                      class="form-control no-resize"
                      name="query"
                      id
                      maxlength="300"
                      rows="8"
                      v-model="formData.query"
                      placeholder="Only upto 300 words"
                    />
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="submit text-center mt-3">
                    <div
                      class="pb-3"
                      v-if="showValidationError"
                    >Fill up all the fields with valid values.</div>
                    <div class="pb-3" v-if="showError">Something went wrong. Resubmit the form.</div>
                    <b-button variant="outline-dark" type="submit">Submit</b-button>
                  </div>
                </div>
              </div>
            </b-form>
          </div>
        </div>
      </div>
      <div class="google-map" v-if="contact.mapLink">
        <iframe
          :src="contact.mapLink"
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
import service from "@/service/apiservice.js";
export default {
  components: {
    headerSection,
    footerSection
  },
  data() {
    return {
      formData: {},
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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.461309665937!2d75.71155415024158!3d26.888850983055047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b121b024b29%3A0xad9271b72d178aeb!2sMarudhar%20cricket%20club!5e0!3m2!1sen!2sin!4v1575681111745!5m2!1sen!2sin",
      showValidationError: false,
      showError: false
    };
  },
  created() {
    this.getContact();
  },
  methods: {
    getContact() {
      const formData = {};
      service.searchContact(formData, data => {
        if (data) {
          this.contact = data.data[0];
        } else {
          this.contact = {};
        }
      });
    },
    saveEnquiryForm(e) {
      e.preventDefault();
      console.log(this.formData);
      if (
        this.formData.name &&
        this.formData.email &&
        this.formData.mobile &&
        this.formData.query
      ) {
        service.saveEnquiryForm(this.formData, data => {
          if (data.data) {
            this.showError = false;
            this.showValidationError = false;
            this.formData = {};
            this.$toasted.success("Enquiry sent Successfully.");
          } else {
            this.showError = true;
            this.showValidationError = false;
            this.$toasted.error("Retry sending Enquiry.");
          }
        });
      } else {
        this.showValidationError = true;
      }
    }
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
a.social-link {
  color: #212529;
  font-size: 1rem;
  line-height: 1.5;
}
@media only screen and (max-width: 768px) {
  .d-flex.mb-5.address {
    display: block !important;
  }
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