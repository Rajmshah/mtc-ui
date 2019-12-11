<template>
  <div>
    <headerSection></headerSection>
    <section class="about-us my-5">
      <!-- <div class="banners-img" ng-if="banner.banner">
        <img
          ng-src="{{ banner.banner | serverimage }}"
          alt="{{ banner.name }} Banner"
          class="img-responsive"
        />
      </div>-->
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="text-center text-uppercase oswald-bold main-head font-32 mb-5">
              <span class="border-bottom border-dark px-2">About Us</span>
            </div>
          </div>
        </div>
        <div class="row" v-if="about.content1">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="mb-5 content1 titillium-web-regular" v-html="about.content1"></div>
          </div>
        </div>
        <div class="row" v-if="showTeam">
          <div class="col-lg-3 col-md-3 col-sm-3" v-for="team in about.team" :key="team._id">
            <div class="text-dark no-underline" v-if="team.status">
              <div class="ad-holder mb-2" v-if="!team.image">
                <img src="../assets/480x480.jpg" alt="Ad 2" class="img-responsive ad-shape" />
              </div>

              <div class="ad-holder mb-2" v-if="team.image">
                <img
                  :src="team.image | serverimage"
                  :alt="team.name"
                  class="img-responsive ad-shape"
                />
              </div>
              <div class="ad-title titillium-web-bold font-18 mb-4 text-center">{{team.name}}</div>
            </div>
          </div>
        </div>
        <div class="row" v-if="about.content2">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="mb-5 content2 titillium-web-regular" v-html="about.content2"></div>
          </div>
        </div>
        <div class="row" v-if="about == {}">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="mb-5 text-center oswald-semiBold text-uppercase">Updating Soon</div>
          </div>
        </div>
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
      about: {},
      showTeam: false,
      datafound: false
    };
  },
  created() {
    this.searchAbout();
  },
  methods: {
    searchAbout() {
      const formData = {};
      service.searchAbout(formData, data => {
        if (data) {
          this.about = data.data[0];
          if (this.about.team.length > 0) {
            this.temp = _.filter(this.about.team, function(o) {
              if (o.status == true) {
                return o;
              }
            });
            if (this.temp.length <= 0) {
              this.showTeam = false;
            } else {
              this.showTeam = true;
            }
          } else {
            this.showTeam = false;
          }
        } else {
          this.showTeam = false;
          this.about = {};
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-head {
  span {
    border-bottom-width: 3px !important;
  }
}

.ad-holder {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.ad-shape {
  border: 1px solid #000;
  border-radius: 50%;
}

.team-brief {
  top: 0%;
  right: 0%;
  padding-left: 230px;
}
</style>