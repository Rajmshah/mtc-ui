<template>
  <div>
    <headerSection></headerSection>
    <section ng-if="banner">
      <section class="reportcard-page celebrity-page" ng-if="wholePage">
        <div class>
          <div class="celebrity-holder">
            <img ng-src="{{ banner.banner | uploadpath }}" alt class="img-responsive" />
          </div>
        </div>
      </section>

      <section class="sponsor-page" ng-if="!wholePage">
        <section ng-if="banner.banner">
          <div class="banners-img">
            <img
              ng-src="{{ banner.banner | uploadpath }}"
              alt="Sponsor Banner"
              class="img-responsive"
            />
          </div>
        </section>

        <section ng-if="sponsorList">
          <div
            class="bg-team sold-player livestats stats-placing sponsor-placing"
            ng-style="sponsorList.length<=4?{'height':'100vh'}:{'height': '100%'}"
          >
            <div class="container">
              <!--<div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="team-head">
                <h1 class="text-center text-uppercase opensans-semibold">SPONSORS</h1>
              </div>
            </div>
              </div>-->
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4" ng-repeat="sponsor in sponsorList">
                  <a class="player-card pointer" ng-href="{{ sponsor.link }}" target="_blank">
                    <div class="sponsor-card">
                      <div class="player-image" ng-if="sponsor.logo">
                        <img
                          ng-src="{{ sponsor.logo | uploadpath }}"
                          alt="{{ sponsor.name }}"
                          class="img-responsive"
                        />
                      </div>
                      <div class="player-image" ng-if="!sponsor.logo">
                        <img src="img/holder.png" alt="{{ sponsor.name }}" class="img-responsive" />
                      </div>
                      <div class="player-info">
                        <h4 class="text-capitalize text-center color-white">{{ sponsor.name }}</h4>
                      </div>
                      <!--<div class="player-info">
                  <h4 class="text-capitalize text-center color-white">- {{sponsor.ownerName}}</h4>
                      </div>-->
                      <div class ng-if="sponsor.sponsorType && sponsor.ownerName">
                        <table class="table table-bordered">
                          <tbody>
                            <tr ng-if="sponsor.sponsorType">
                              <td>
                                <h4 class="text-capitalize text-center color-white">Type</h4>
                              </td>
                              <td>
                                <h4
                                  class="text-capitalize text-center color-white"
                                >{{ sponsor.sponsorType }}</h4>
                              </td>
                            </tr>
                            <tr ng-if="sponsor.ownerName">
                              <td>
                                <h4 class="text-capitalize text-center color-white">Owner</h4>
                              </td>
                              <td>
                                <h4
                                  class="text-capitalize text-center color-white"
                                >{{ sponsor.ownerName }}</h4>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
    <section ng-if="!banner">
      <div class="text-center opensans-semibold text-uppercase coming-soon">
        <p>Coming</p>
        <p>Soon</p>
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
      sponsorList: [
        {
          active: true,
          logo: "@/assets/mtc-logo.png",
          name: "Man of the series",
          ownerName: "Rajnikant",
          sponsorType: "Comic",
          order: 3
        },
        {
          active: false,
          logo: "@/assets/mtc-logo.png",
          name: "Man of the series",
          ownerName: "Rajnikant",
          sponsorType: "Comic",
          order: 2
        },
        {
          active: true,
          logo: "@/assets/mtc-logo.png",
          name: "Man of the series",
          ownerName: "Salman Khan",
          sponsorType: "Comic",
          order: 1
        }
      ],
      wholePage: false,
      banner: {}
    };
  },
  created() {
    // this.getBannerByPageName();
  },
  methods: {
    getlist() {
      var constraints = {};
      var url = "Sponsor/getlist";
      NavigationService.getlist(url, function(data) {
        this.sponsorList = data.data;
      });
    },

    getBannerByPageName() {
      var constraints = {};
      constraints.pageName = "Sponsor";
      var url = "Banner/getBannerByPageName";
      NavigationService.getBannerByPageName(url, constraints, function(data) {
        this.banner = data.data[0];
        this.wholePage = data.data[0].isWhole;
        if (this.wholePage == false) {
          this.getlist();
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/_main.scss";

.view-size {
  font-size: 1.25rem;
}

.sponsor-page {
  .sponsor-card {
    margin-bottom: 25px;
  }
}

.sponsor-page {
  img {
    opacity: 1;
  }
}

.sponsor-placing {
  a {
    &:hover {
      text-decoration: none;
      .sponsor-card {
        transform: scale(1.02);
      }
    }
  }
}

.sponsor-head {
  h1 {
    color: $white;
    padding: 0 0 50px;
    margin: 0;
  }
}
</style>