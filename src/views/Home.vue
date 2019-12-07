<template>
  <div class="home">
    <headerSection></headerSection>
    <section class="homepage">
      <div class="main-content">
        <div class="banners-img position-relative" ng-if="banners.length>0">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide w-100">
                <div class="registerplayer-banner">
                  <img src="../assets/Home_Page_1.jpg" alt="Academy Banner" class="img-responsive" />
                </div>
                <!-- <div class="position-absolute gradient">
                  <div class="gradient-bg"></div>
                </div>-->
              </div>
              <div class="swiper-slide w-100">
                <div class="registerplayer-banner">
                  <img src="../assets/Home_Page_1.jpg" alt="Academy Banner" class="img-responsive" />
                </div>
                <!-- <div class="position-absolute gradient">
                  <div class="gradient-bg"></div>
                </div>-->
              </div>
              <div class="swiper-slide w-100">
                <div class="registerplayer-banner">
                  <img src="../assets/Home_Page_1.jpg" alt="Academy Banner" class="img-responsive" />
                </div>
                <!-- <div class="position-absolute gradient">
                  <div class="gradient-bg"></div>
                </div>-->
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="bg-color text-white">
          <div
            class="text-center text-uppercase oswald-bold font-30 ls-2 py-2"
          >ROYAL INDIA FOOTBALL CLUB | START UNKNOWN, WIN KNOWINGLY !</div>
        </div>-->
      </div>
      <div class="ad-block py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <a href="/about-us" class="text-dark no-underline">
                <div class="ad-holder pb-2">
                  <img src="../assets/1184x690.jpg" alt="Ad 2" class="img-responsive" />
                </div>
                <div
                  class="ad-title titillium-web-bold font-18 pb-2"
                >Royal indian football club | About Us</div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <a href="#" class="text-dark no-underline">
                <div class="ad-holder pb-2">
                  <img src="../assets/1184x690.jpg" alt="Ad 3" class="img-responsive" />
                </div>
                <div
                  class="ad-title titillium-web-bold font-18 pb-2"
                >ROYAL INDIA FOOTBALL CLUB | START UNKNOWN, WIN KNOWINGLY !</div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <a href="#" class="text-dark no-underline">
                <div class="ad-holder pb-2">
                  <img src="../assets/1184x690.jpg" alt="Ad 3" class="img-responsive" />
                </div>
                <div
                  class="ad-title titillium-web-bold font-18 pb-2"
                >ROYAL INDIA FOOTBALL CLUB | START UNKNOWN, WIN KNOWINGLY !</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="master-class-home pb-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-12 mx-auto">
              <div class="subhead oswald-bold font-24 mb-5 text-uppercase text-center">
                <span class="px-2 border-bottom border-dark">About Us</span>
              </div>
              <div class="text-justify mb-3">
                <p>
                  Master class is an interactive experience for budding footballers
                  of the nation, We at RIFC offer master class sessions with the
                  icons of the footballing industry where the RIFC athletes get to
                  learn about the on-field and off-field aspects of the beautiful
                  game in an interactive session wherein the athletes develop into
                  better professionals.
                </p>
              </div>
              <div class="know-more text-center">
                <router-link class="btn border-dark" to="/about-us">Know More</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="academy-home pb-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-12 mx-auto">
              <div class="subhead oswald-bold font-24 mb-5 text-uppercase text-center">
                <span class="px-2 border-bottom border-dark">Past Championship</span>
              </div>
              <div class="text-justify">
                <p>
                  We at RIFC have the complete training module for the best of an
                  athlete, We at RIFC believe there is no good reason to train but
                  nowhere to showcase abilities. The Squad will be competing in the
                  AIFF Youth League (U13 and U15), MDFA (U10, U12, and U14) which
                  will introduce them to the Indian footballing culture.
                </p>
              </div>
              <div class="know-more text-center mt-5">
                <router-link class="btn border-dark" to="/past-championship">Know More</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Team Scrolling-->
      <!-- <section v-if="teams.length>0"> -->
      <div class="bg-team pb-5">
        <div class="team-head">
          <h1 class="text-center text-uppercase opensans-semibold mb-3">Teams</h1>
        </div>
        <div class="container">
          <!-- v-if="teams.length>0" -->
          <div class="teams-logo">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 1"</h4>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 2"</h4>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 3"</h4>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 4"</h4>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 5"</h4>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 6"</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
      <!-- </section> -->

      <!-- <section v-if="teams.length>0"> -->
      <div class="bg-team pb-5">
        <div class="team-head">
          <h1 class="text-center text-uppercase opensans-semibold mb-3">Sponsors</h1>
        </div>
        <div class="container">
          <!-- v-if="teams.length>0" -->
          <div class="sponsors-logo">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 1"</h4>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 2"</h4>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 3"</h4>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 4"</h4>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 5"</h4>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="registerplayer-team pointer">
                    <div class>
                      <img src="@/assets/holder.jpg" alt="Team Logo" class="img-responsive m-auto" />
                    </div>
                    <div class>
                      <h4 class="text-center text-uppercase color-black">"Team 6"</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
      <!-- </section> -->
      <hr class="m-0 border-dark" hidden />

      <!-- <div class="gallery-showcase bg-color text-white pb-5" hidden>
        <div class="container">
          <div class="row">
            <div class="mx-auto">
              <div class="text-center mb-5">
                <div class="subhead oswald-bold font-24 text-uppercase">
                  <span class="px-2 border-bottom border-light">Gallery</span>
                </div>
                <div class="font-12">
              Photos and News from the football community
                </div>
              </div>
              <div class="d-flex">
                <div class="w-100">
                  <div class="d-flex">
                    <div class>
                      <img
                        src="{{ smallImage1 }}"
                        alt="smallImage1"
                        class="img-responsive doneLoading"
                      />
                    </div>
                    <div class>
                      <img
                        src="{{ smallImage2 }}"
                        alt="smallImage2"
                        class="img-responsive doneLoading"
                      />
                    </div>
                  </div>
                  <div class="w-100">
                    <img
                      src="{{ mediumImage }}"
                      alt="mediumImage"
                      class="img-responsive doneLoading"
                    />
                  </div>
                </div>
                <div class="w-100">
                  <img src="{{ largeImage }}" alt="Gallery Pic1" class="img-responsive doneLoading" />
                </div>
              </div>
              <div class="text-center pt-3">
                <a class="text-light btn-link btn-dark" ui-sref="gallery">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="enquiries pb-5" hidden>
        <div class="container">
          <div class="row">
            <div class="col-12 mx-auto">
              <div class="subhead oswald-bold font-24 mb-5 text-uppercase text-center">
                <span class="px-2 border-bottom border-dark">Enquiry</span>
              </div>
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
                      <button class="btn btn-light" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>-->
    </section>

    <footerSection></footerSection>
  </div>
</template>

<script>
// @ is an alias to /src
import footerSection from "@/views/Footer.vue";
import headerSection from "@/views/Header.vue";
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  name: "home",
  components: {
    headerSection,
    footerSection
  },
  mounted() {
    var mySwiper = new Swiper(".banners-img .swiper-container", {
      // Optional parameters
      // direction: "vertical",
      loop: true,
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
    var teamSlide = new Swiper(".teams-logo .swiper-container", {
      slidesPerView: 3,
      navigation: {
        nextEl: ".teams-logo  .swiper-button-next",
        prevEl: ".teams-logo  .swiper-button-prev"
      },
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      // preloadImages: true,
      // reverseDirection: false
      speed: 7000
    });
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
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true
      // loop: true,
    });
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
@media only screen and (max-width: 768px) {
  .gradient {
    -webkit-box-shadow: inset 0px -60px 50px 0px rgba(22, 22, 22, 1);
    -moz-box-shadow: inset 0px -60px 50px 0px rgba(22, 22, 22, 1);
    box-shadow: inset 0px -60px 50px 0px rgba(22, 22, 22, 1);
  }
}
</style>
