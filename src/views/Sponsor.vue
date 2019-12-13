<template>
  <div>
    <headerSection></headerSection>
    <section class="my-5">
      <!-- <section class="reportcard-page celebrity-page" v-if="wholePage">
        <div class>
          <div class="celebrity-holder">
            <img :src="banner.banner | serverimage" alt class="img-responsive" />
          </div>
        </div>
      </section>-->

      <section class="sponsor-page" v-if="!wholePage">
        <!-- <section v-if="banner.banner">
          <div class="banners-img">
            <img :src="banner.banner | serverimage" alt="Sponsor Banner" class="img-responsive" />
          </div>
        </section>-->
        <section v-if="sponsorList != {}">
          <!--  -->
          <div class="bg-team sold-player livestats stats-placing sponsor-placing">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="text-center text-uppercase oswald-bold main-head font-32 mb-5">
                    <span class="border-bottom border-dark px-2">Sponsors</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-10 mx-auto">
                  <div class="row mb-5" v-if="sponsorList.sponsorBigList.length > 0">
                    <div
                      class="col-lg-6 col-md-6 col-sm-6"
                      v-for="sponsor in sponsorList.sponsorBigList"
                      :key="sponsor.order"
                    >
                      <a class="player-card pointer" :href="sponsor.link" target="_blank">
                        <div class="sponsor-big-card mx-auto">
                          <div class="player-image" v-if="sponsor.logo">
                            <img
                              :src="sponsor.logo | serverimage"
                              :alt="sponsor.name"
                              class="img-responsive"
                            />
                          </div>
                          <div class="player-image" v-if="!sponsor.logo">
                            <img src="img/holder.png" :alt="sponsor.name" class="img-responsive" />
                          </div>
                          <div class="player-info">
                            <div
                              class="text-capitalize titillium-web-semiBold text-center color-white"
                            >{{ sponsor.name }}</div>
                          </div>
                          <div class v-if="sponsor.sponsorType && sponsor.ownerName">
                            <table class="table table-bordered">
                              <tbody>
                                <tr v-if="sponsor.sponsorType">
                                  <td>
                                    <h4 class="text-capitalize text-center color-white">Type</h4>
                                  </td>
                                  <td>
                                    <h4
                                      class="text-capitalize text-center color-white"
                                    >{{ sponsor.sponsorType }}</h4>
                                  </td>
                                </tr>
                                <tr v-if="sponsor.ownerName">
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
                  <div class="row mb-5" v-if="sponsorList.sponsorMediumList.length > 0">
                    <div
                      class="col-lg-4 col-md-6 col-sm-6"
                      v-for="sponsor in sponsorList.sponsorMediumList"
                      :key="sponsor.order"
                    >
                      <a class="player-card pointer" :href="sponsor.link" target="_blank">
                        <div class="sponsor-medium-card mx-auto">
                          <div class="player-image" v-if="sponsor.logo">
                            <img
                              :src="sponsor.logo | serverimage"
                              :alt="sponsor.name"
                              class="img-responsive"
                            />
                          </div>
                          <div class="player-image" v-if="!sponsor.logo">
                            <img src="img/holder.png" :alt="sponsor.name" class="img-responsive" />
                          </div>
                          <div class="player-info">
                            <div
                              class="text-capitalize titillium-web-semiBold text-center color-white"
                            >{{ sponsor.name }}</div>
                          </div>
                          <div class v-if="sponsor.sponsorType && sponsor.ownerName">
                            <table class="table table-bordered">
                              <tbody>
                                <tr v-if="sponsor.sponsorType">
                                  <td>
                                    <h4 class="text-capitalize text-center color-white">Type</h4>
                                  </td>
                                  <td>
                                    <h4
                                      class="text-capitalize text-center color-white"
                                    >{{ sponsor.sponsorType }}</h4>
                                  </td>
                                </tr>
                                <tr v-if="sponsor.ownerName">
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
                  <div class="row mb-5" v-if="sponsorList.sponsorSmallList.length > 0">
                    <div
                      class="col-lg-3 col-md-4 col-sm-6"
                      v-for="sponsor in sponsorList.sponsorSmallList"
                      :key="sponsor.order"
                    >
                      <a class="player-card pointer" :href="sponsor.link" target="_blank">
                        <div class="sponsor-card">
                          <div class="player-image" v-if="sponsor.logo">
                            <img
                              :src="sponsor.logo | serverimage"
                              :alt="sponsor.name"
                              class="img-responsive"
                            />
                          </div>
                          <div class="player-image" v-if="!sponsor.logo">
                            <img src="img/holder.png" :alt="sponsor.name" class="img-responsive" />
                          </div>
                          <div class="player-info">
                            <div
                              class="text-capitalize titillium-web-semiBold text-center color-white"
                            >{{ sponsor.name }}</div>
                          </div>
                          <div class v-if="sponsor.sponsorType && sponsor.ownerName">
                            <table class="table table-bordered">
                              <tbody>
                                <tr v-if="sponsor.sponsorType">
                                  <td>
                                    <h4 class="text-capitalize text-center color-white">Type</h4>
                                  </td>
                                  <td>
                                    <h4
                                      class="text-capitalize text-center color-white"
                                    >{{ sponsor.sponsorType }}</h4>
                                  </td>
                                </tr>
                                <tr v-if="sponsor.ownerName">
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
                  <div
                    class="row"
                    v-if="sponsorList.sponsorBigList.length == 0 && sponsorList.sponsorMediumList.length == 0 && sponsorList.sponsorSmallList.length == 0"
                  >
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="mb-5 text-center oswald-semiBold text-uppercase">Updating Soon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
    <!-- <section v-if="!banner">
      <div class="text-center opensans-semibold text-uppercase comiv-soon">
        <p>Coming</p>
        <p>Soon</p>
      </div>
    </section>-->
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
      // sponsorBigList: [
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Rajnikant",
      //     sponsorType: "Comic",
      //     order: 3
      //   },
      //   {
      //     active: false,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Rajnikant 1",
      //     sponsorType: "Comic",
      //     order: 2
      //   },
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Salman Khan",
      //     sponsorType: "Comic",
      //     order: 1
      //   },
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Salman Khan 4",
      //     sponsorType: "Comic",
      //     order: 4
      //   },
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Salman Khan 5",
      //     sponsorType: "Comic",
      //     order: 5
      //   }
      // ],
      // sponsorMediumList: [
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Rajnikant",
      //     sponsorType: "Comic",
      //     order: 3
      //   },
      //   {
      //     active: false,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Rajnikant 1",
      //     sponsorType: "Comic",
      //     order: 2
      //   },
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Salman Khan",
      //     sponsorType: "Comic",
      //     order: 1
      //   },
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Salman Khan 4",
      //     sponsorType: "Comic",
      //     order: 4
      //   },
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Salman Khan 5",
      //     sponsorType: "Comic",
      //     order: 5
      //   }
      // ],
      // sponsorSmallList: [
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Rajnikant",
      //     sponsorType: "Comic",
      //     order: 3
      //   },
      //   {
      //     active: false,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Rajnikant 1",
      //     sponsorType: "Comic",
      //     order: 2
      //   },
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Salman Khan",
      //     sponsorType: "Comic",
      //     order: 1
      //   },
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Salman Khan 4",
      //     sponsorType: "Comic",
      //     order: 4
      //   },
      //   {
      //     active: true,
      //     logo: "../assets/mtc-logo.png",
      //     name: "Man of the series",
      //     ownerName: "Salman Khan 5",
      //     sponsorType: "Comic",
      //     order: 5
      //   }
      // ],
      wholePage: false,
      banner: {},
      sponsorList: {}
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      service.getList({}, data => {
        if (data.status == 200) {
          this.sponsorList = data.data;
        } else {
          this.sponsorList = {};
        }
      });
    }

    // getBannerByPageName() {
    //   var constraints = {};
    //   constraints.pageName = "Sponsor";
    //   var url = "Banner/getBannerByPageName";
    //   NavigationService.getBannerByPageName(url, constraints, function(data) {
    //     this.banner = data.data[0];
    //     this.wholePage = data.data[0].isWhole;
    //     if (this.wholePage == false) {
    //       this.getlist();
    //     }
    //   });
    // }
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/_main.scss";

.sold-player {
  table {
    font-family: "Opensans Semibold";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .table-bordered th,
  .table-bordered td {
    background: #f3f3f3;
    color: #121212;
    text-transform: uppercase;
    border: 1px solid #d7dce1;
    padding: 10px 14px;
  }
  .table-bordered thead th,
  .table-bordered thead td {
    border-bottom-width: 2px;
    background: #e71f31;
    color: #fff;
    text-transform: uppercase;
    border: 1px solid #ce1a2b;
    font-size: 1rem;
  }
}

.player-image {
  border: 2px solid #dbbd54;
  border-radius: 100%;
  overflow: hidden;
  width: 175px;
  margin: 0 auto;
  -webkit-box-shadow: 0 0px 10px 2px #dbbd54;
  box-shadow: 0 0px 10px 2px #dbbd54;
  img {
    border: 2px solid #dbbd54;
    border-radius: 100%;
    overflow: hidden;
  }
}

.player-card {
  margin-bottom: 30px;
}

.player-info {
  background: #e71f31;
  border-radius: 50px;
  padding: 20px;
  margin-top: -15px;
  h4 {
    margin: 0;
    font-size: 1.25rem;
  }
}

.livestats {
  .table-bordered th,
  .table-bordered td {
    background: #3e823c;
    // color: $white;
    text-transform: uppercase;
    border: 1px solid #d7dce1;
    padding: 10px;
  }
  .table-bordered th:first-child,
  .table-bordered td:first-child {
    background: #199fe1;
  }
  .player-list {
    .table-bordered th {
      background: #e71f31;
      color: $white;
      border: 1px solid #ce1a2b;
    }
    .table-bordered td {
      background: #f3f3f3;
      border: 1px solid #d7dce1;
    }
    .table-bordered th:first-child {
      background: #e71f31;
      border: 1px solid #ce1a2b;
    }
    .table-bordered td:first-child {
      background: #f3f3f3;
      border: 1px solid #d7dce1;
    }
  }
  .player-info {
    background: #3e823c;
    padding: 9px;
    margin: 10px 0;
    border: 0;
    border-radius: 0;
    h4 {
      font-size: 1.2rem;
    }
  }
  .table {
    h4 {
      font-size: 1rem;
      margin: 0;
    }
  }
  .player-image {
    border: 2px solid #dbbd54;
    border-radius: 0;
    overflow: visible;
    width: 100%;
    margin: 0 auto;
    img {
      border: 0;
      border-radius: 0;
      overflow: visible;
    }
  }
}

.stats-placing {
  .player-info h4 {
    font-size: 0.9rem;
  }
  .table h4 {
    font-size: 0.9rem;
  }
}

.main-head {
  span {
    border-bottom-width: 3px !important;
  }
}

.view-size {
  font-size: 1.25rem;
}

.sponsor-page {
  .sponsor-big-card {
    width: 75%;
  }
  .sponsor-medium-card {
    width: 75%;
  }
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
    color: $black;
    padding: 0 0 50px;
    margin: 0;
  }
}
</style>