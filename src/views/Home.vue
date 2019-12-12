<template>
  <div class="home">
    <headerSection></headerSection>
    <section class="homepage">
      <div class="main-content">
        <div class="banners-img position-relative" v-if="homepage.banner.length > 0">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide w-100" v-for="banner in homepage.banner" :key="banner._id">
                <div class v-if="banner.status">
                  <a v-if="!banner.linkType" class="text-dark no-underline">
                    <div class="registerplayer-banner" v-if="banner.image">
                      <img
                        :src="banner.image | serverimage"
                        alt="banner.title"
                        class="img-responsive"
                      />
                    </div>
                    <div class="registerplayer-banner" v-if="!banner.image">
                      <img
                        src="../assets/Home_Page_1.jpg"
                        alt="Academy Banner"
                        class="img-responsive"
                      />
                    </div>
                  </a>
                  <a
                    :href="banner.link"
                    target="_self"
                    v-if="banner.linkType == 'Internal'"
                    class="text-dark no-underline"
                  >
                    <div class="registerplayer-banner" v-if="banner.image">
                      <img
                        :src="banner.image | serverimage"
                        alt="banner.title"
                        class="img-responsive"
                      />
                    </div>
                    <div class="registerplayer-banner" v-if="!banner.image">
                      <img
                        src="../assets/Home_Page_1.jpg"
                        alt="Academy Banner"
                        class="img-responsive"
                      />
                    </div>
                  </a>
                  <a
                    :href="banner.link"
                    target="_blank"
                    v-if="banner.linkType == 'External'"
                    class="text-dark no-underline"
                  >
                    <div class="registerplayer-banner" v-if="banner.image">
                      <img
                        :src="banner.image | serverimage"
                        alt="banner.title"
                        class="img-responsive"
                      />
                    </div>
                    <div class="registerplayer-banner" v-if="!banner.image">
                      <img
                        src="../assets/Home_Page_1.jpg"
                        alt="Academy Banner"
                        class="img-responsive"
                      />
                    </div>
                  </a>
                  <!-- <div class="position-absolute gradient">
                  <div class="gradient-bg"></div>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ad-block py-5" v-if="homepage.adBlock.length > 0">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-4 col-md-4 col-sm-4"
              v-for="block in homepage.adBlock"
              :key="block._id"
            >
              <div class v-if="block.status">
                <a v-if="!block.linkType" class="text-dark no-underline">
                  <div class="ad-holder pb-2" v-if="block.image">
                    <img :src="block.image | serverimage" :alt="block.title" class="img-responsive" />
                  </div>
                  <div class="ad-holder pb-2" v-if="!block.image">
                    <img src="../assets/1184x690.jpg" alt="Ad 2" class="img-responsive" />
                  </div>
                  <div class="ad-title titillium-web-bold font-18 pb-2">{{block.title}}</div>
                </a>
                <a
                  :href="block.link"
                  target="_self"
                  v-if="block.linkType == 'Internal'"
                  class="text-dark no-underline"
                >
                  <div class="ad-holder pb-2" v-if="block.image">
                    <img :src="block.image | serverimage" :alt="block.title" class="img-responsive" />
                  </div>
                  <div class="ad-holder pb-2" v-if="!block.image">
                    <img src="../assets/1184x690.jpg" alt="Ad 2" class="img-responsive" />
                  </div>
                  <div class="ad-title titillium-web-bold font-18 pb-2">{{block.title}}</div>
                </a>
                <a
                  :href="block.link"
                  target="_blank"
                  v-if="block.linkType == 'External'"
                  class="text-dark no-underline"
                >
                  <div class="ad-holder pb-2" v-if="block.image">
                    <img :src="block.image | serverimage" :alt="block.title" class="img-responsive" />
                  </div>
                  <div class="ad-holder pb-2" v-if="!block.image">
                    <img src="../assets/1184x690.jpg" alt="Ad 2" class="img-responsive" />
                  </div>
                  <div class="ad-title titillium-web-bold font-18 pb-2">{{block.title}}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="academy-home" v-if="homepage.content1 || homepage.content2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto pb-5">
              <div class="subhead oswald-bold font-30 mb-5 text-uppercase text-center">
                <span class="px-2 border-bottom border-dark">About Us</span>
              </div>
              <div class="text-justify mb-4" v-html="homepage.content1"></div>
              <div class="know-more text-center">
                <!-- <router-link
                  class="no-underline pointer text-uppercase titillium-web-semiBold"
                  to="/about-us"
                >Know More</router-link>-->
                <router-link class="btn border-dark" to="/about-us">Know More</router-link>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto pb-5">
              <div class="subhead oswald-bold font-30 mb-5 text-uppercase text-center">
                <span class="px-2 border-bottom border-dark">Past Championship</span>
              </div>
              <div class="text-justify" v-html="homepage.content2"></div>
              <div class="know-more text-center mt-4">
                <!-- <router-link
                  class="no-underline pointer text-uppercase titillium-web-semiBold"
                  to="/past-championship"
                >Know More</router-link>-->
                <router-link class="btn border-dark" to="/past-championship">Know More</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Team Scrolling-->
      <!-- <section v-if="team.length>0">
        <div class="pb-5">
          <div class="subhead oswald-bold font-30 mb-5 text-uppercase text-center">
            <span class="px-2 border-bottom border-dark">Teams</span>
          </div>
          <div class="container" v-if="team.length>0">
            <div class="teams-logo">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="teamList in team" :key="teamList._id">
                    <div class="registerplayer-team pointer">
                      <div class v-if="!teamList.logo">
                        <img
                          src="@/assets/holder.jpg"
                          :alt="teamList.name"
                          class="img-responsive m-auto"
                        />
                      </div>
                      <div class v-if="teamList.logo">
                        <img
                          :src="teamList.logo|serverimage"
                          :alt="teamList.name"
                          class="img-responsive m-auto"
                        />
                      </div>
                      <div class>
                        <h4 class="text-center text-uppercase color-black">{{teamList.name}}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination d-sm-none"></div>
              </div>
              <div class="swiper-button-next d-none d-sm-block"></div>
              <div class="swiper-button-prev d-none d-sm-block"></div>
            </div>
          </div>
        </div>
      </section>-->

      <div
        class="gallery-showcase text-black pb-5"
        v-if="smallImage1 && smallImage2 && mediumImage && largeImage"
      >
        <div class="container">
          <div class="row">
            <div class="mx-auto">
              <div class="text-center mb-5">
                <div class="subhead oswald-bold font-30 text-uppercase">
                  <span class="px-2 border-bottom border-light">Gallery</span>
                </div>
                <!-- <div class="font-12">Photos and News from the football community</div> -->
              </div>
              <div class="d-flex">
                <div class="w-100">
                  <div class="d-flex">
                    <div class>
                      <img
                        :src="smallImage1|serverimage"
                        alt="smallImage1"
                        class="img-responsive doneLoading"
                      />
                    </div>
                    <div class>
                      <img
                        :src="smallImage2|serverimage"
                        alt="smallImage2"
                        class="img-responsive doneLoading"
                      />
                    </div>
                  </div>
                  <div class="w-100">
                    <img
                      :src="mediumImage|serverimage"
                      alt="mediumImage"
                      class="img-responsive doneLoading"
                    />
                  </div>
                </div>
                <div class="w-100">
                  <img
                    :src="largeImage|serverimage"
                    alt="Gallery Pic1"
                    class="img-responsive doneLoading"
                  />
                </div>
              </div>
              <!-- <div class="text-center pt-3">
                <a class="text-light btn-link btn-dark" ui-sref="gallery">View More</a>
              </div>-->
            </div>
          </div>
        </div>
      </div>

      <section v-if="sponsor.length>0">
        <div class="pb-5">
          <div class="subhead oswald-bold font-30 mb-5 text-uppercase text-center">
            <span class="px-2 border-bottom border-dark">Sponsors</span>
          </div>
          <div class="container" v-if="sponsor.length>0">
            <!-- v-if="teams.length>0" -->
            <div class="sponsors-logo">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="sponsorList in sponsor" :key="sponsorList._id">
                    <div class="registerplayer-team pointer">
                      <div class v-if="!sponsorList.logo">
                        <img
                          src="@/assets/holder.jpg"
                          :alt="sponsorList.name"
                          class="img-responsive m-auto"
                        />
                      </div>
                      <div class v-if="sponsorList.logo">
                        <img
                          :src="sponsorList.logo|serverimage"
                          :alt="sponsorList.name"
                          class="img-responsive m-auto"
                        />
                      </div>
                      <div class>
                        <h4 class="text-center text-uppercase color-black">{{sponsorList.name}}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination d-sm-none"></div>
              </div>
              <div class="swiper-button-next d-none d-sm-block"></div>
              <div class="swiper-button-prev d-none d-sm-block"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <footerSection></footerSection>
  </div>
</template>

<script>
// @ is an alias to /src
import footerSection from "@/views/Footer.vue";
import headerSection from "@/views/Header.vue";
import service from "@/service/apiservice.js";
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  name: "home",
  components: {
    headerSection,
    footerSection
  },
  data() {
    return {
      homepage: {
        adBlock: [],
        gallery: [],
        banner: [],
        content1: "",
        content2: ""
      },
      smallImage1: "",
      smallImage2: "",
      mediumImage: "",
      largeImage: "",
      team: [],
      sponsor: []
    };
  },
  created() {
    this.getHomepage();
    this.getAllSponsor();
    this.getAllTeam();
    this.swiperInt();
  },

  methods: {
    swiperInt() {
      setTimeout(function() {
        var mySwiper = new Swiper(".banners-img .swiper-container", {
          // Optional parameters
          // direction: "vertical",
          // loop: true,
          autoplay: true
          // // If we need pagination
          // pagination: {
          //   el: ".swiper-pagination"
          // },

          // // And if we need scrollbar
          // scrollbar: {
          //   el: ".swiper-scrollbar"
          // }
        });
        // var teamSlide = new Swiper(".teams-logo .swiper-container", {
        //   slidesPerView: 3,
        //   navigation: {
        //     nextEl: ".teams-logo  .swiper-button-next",
        //     prevEl: ".teams-logo  .swiper-button-prev"
        //   },
        //   pagination: {
        //     el: ".teams-logo .swiper-pagination",
        //     clickable: true
        //   },
        //   slidesPerGroup: 3,
        //   // loop: true,
        //   // loopFillGroupWithBlank: true,
        //   // preloadImages: true,
        //   // reverseDirection: false
        //   speed: 7000,
        //   breakpoints: {
        //     320: {
        //       slidesPerView: 1,
        //       slidesPerGroup: 1,
        //       speed: 3000
        //     },
        //     640: {
        //       slidesPerView: 1,
        //       slidesPerGroup: 1,
        //       speed: 3000
        //     },
        //     768: {
        //       slidesPerView: 2,
        //       slidesPerGroup: 2
        //     },
        //     992: {
        //       slidesPerView: 3,
        //       slidesPerGroup: 3
        //     }
        //   }
        // });
        var sponsorSlide = new Swiper(".sponsors-logo .swiper-container", {
          // slidesPerView: 3,
          // preloadImages: true,
          speed: 7000,
          // autoplay: 3000,
          // spaceBetween: 10,
          // nextButton: ".sponsors-logo .swiper-button-next",
          // prevButton: ".sponsors-logo .swiper-button-prev",
          // reverseDirection: false,
          // paginationClickable: true
          slidesPerView: 3,
          navigation: {
            nextEl: ".sponsors-logo  .swiper-button-next",
            prevEl: ".sponsors-logo  .swiper-button-prev"
          },
          pagination: {
            el: ".sponsors-logo .swiper-pagination",
            clickable: true
          },
          slidesPerGroup: 3,
          // loop: true,
          // loopFillGroupWithBlank: true,
          breakpoints: {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              speed: 3000
            },
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              speed: 3000
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            992: {
              slidesPerView: 3,
              slidesPerGroup: 3
            }
          }
          // loop: true,
        });
      }, 1000);
    },
    getHomepage() {
      const formData = {};
      service.searchHomepage(formData, data => {
        if (data) {
          this.homepage = data.data[0];
          if (data.data[0].gallery.length > 0) {
            var gallery = data.data[0].gallery;
            _.each(gallery, images => {
              if (images.status) {
                switch (images.imageType) {
                  case "Image 285 x 300":
                    if (_.isEmpty(this.smallImage1)) {
                      if (images.image) {
                        this.smallImage1 = images.image;
                      }
                    } else {
                      if (images.image) {
                        this.smallImage2 = images.image;
                      }
                    }
                    break;
                  case "Image 570 x 300":
                    if (images.image) {
                      this.mediumImage = images.image;
                    }
                    break;
                  case "Image 570 x 600":
                    if (images.image) {
                      this.largeImage = images.image;
                    }
                    break;

                  default:
                    break;
                }
              }
            });
          }
        } else {
          this.homepage = {};
        }
      });
    },
    getAllTeam() {
      service.getAllTeam({}, data => {
        if (data.status == 200) {
          this.team = data.data;
        } else {
          this.team = [];
        }
      });
    },
    getAllSponsor() {
      service.getAllSponsor({}, data => {
        if (data.status == 200) {
          this.sponsor = data.data;
        } else {
          this.sponsor = [];
        }
      });
    }
  }
};
</script>

<style lang="scss">
.subhead {
  span {
    border-bottom-width: 2px !important;
  }
}

.swiper-container {
  width: 100%;
  height: auto;
}

.ls-1 {
  letter-spacing: 1px;
}

.ls-2 {
  letter-spacing: 2px;
}

.ad-holder:hover,
.photo-holder:hover {
  img {
    transform: scale(1.02);
  }
}

// .know-more a {
//   color: #212529;
//   font-size: 1rem;
//   line-height: 1.5;
// }

.teams-logo,
.sponsors-logo {
  position: relative;
  .swiper-button-next,
  .swiper-button-prev {
    width: 30px;
    height: 30px;
    margin-top: 0;
    background-size: contain;
    transform: translateY(-50%);
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: -40px; // background-image: url('../img/icon/prev-black.png');
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: -40px; // background-image: url('../img/icon/next-black.png');
  }
  .swiper-slide {
    background: transparent;
    &:hover {
      transform: scale(1.02);
    }
  }
  .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0px;
    font-size: 0;
  }
}

.gradient {
  bottom: 0;
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
  opacity: 1;
  width: 100%;
  height: 160px;
  text-align: center;
  -webkit-box-shadow: inset 0px -90px 50px 0px rgba(22, 22, 22, 1);
  -moz-box-shadow: inset 0px -90px 50px 0px rgba(22, 22, 22, 1);
  box-shadow: inset 0px -90px 50px 0px rgba(22, 22, 22, 1);
}

// .ad-block {
//   bottom: 0;
//   position: fixed;
//   width: 100%;
// }
@media only screen and (max-width: 992px) {
  .teams-logo .swiper-button-prev,
  .teams-logo .swiper-container-rtl .swiper-button-next,
  .sponsors-logo .swiper-button-prev,
  .sponsors-logo .swiper-container-rtl .swiper-button-next {
    left: -15px !important;
  }
  .teams-logo .swiper-button-next,
  .teams-logo .swiper-container-rtl .swiper-button-prev,
  .sponsors-logo .swiper-button-next,
  .sponsors-logo .swiper-container-rtl .swiper-button-prev {
    right: -15px !important;
  }
}

@media only screen and (max-width: 768px) {
  .gradient {
    -webkit-box-shadow: inset 0px -60px 50px 0px rgba(22, 22, 22, 1);
    -moz-box-shadow: inset 0px -60px 50px 0px rgba(22, 22, 22, 1);
    box-shadow: inset 0px -60px 50px 0px rgba(22, 22, 22, 1);
  }
}
</style>
