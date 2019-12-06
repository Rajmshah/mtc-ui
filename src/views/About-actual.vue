<template>
  <div>
    <headerSection></headerSection>
    <section class="about-us my-5">
      <!-- <div class="banners-img" ng-if="banner.banner">
        <img
          ng-src="{{ banner.banner | uploadpath }}"
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
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="mb-5 content1 titillium-web-regular">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam aliquid dolore nulla perspiciatis perferendis. Mollitia eaque neque rerum tempora explicabo, facilis odio provident in eveniet at consequatur quae non.</p>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis mollitia perferendis odio reiciendis fugit itaque, modi numquam deleniti error aliquam fugiat, reprehenderit harum. Similique atque inventore esse iure quidem in.</p>

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae possimus in, nemo corporis placeat tempore pariatur cum dignissimos aliquid doloremque nesciunt, ea assumenda consequuntur vero illo adipisci? Nisi, quisquam omnis?</p>
            </div>
            <!-- ng-bind-html="about.content1 | rawHtml" -->
          </div>
        </div>
        <div class="row" hidden ng-if="showTeam">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="team bg-color-light py-4 mb-5">
              <div class>
                <div class="subhead oswald-bold font-24 mb-3 text-uppercase text-center">
                  <span class="px-2 border-bottom border-dark">Rifc Team</span>
                </div>
              </div>
              <!-- 
          <div class="position-relative p-4">
            <div class="team-image-holder pr-3">
              <img
                src="img/img-holder/480x480.jpg"
                alt="rifc-team"
                class="img-responsive"
              />
            </div>
            <div class="position-absolute team-brief py-4 pr-4">
              <div
                class="border-bottom border-dark text-capitalize font-18  mb-3"
              >
                <span class="pr-5 titillium-web-semiBold">Vignesh Vignesh</span>
                <span class="small">Founder</span>
              </div>
              <div class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident a unde ab natus fuga deleniti nemo praesentium hic
                eaque aut pariatur mollitia iste ex dignissimos omnis at,
                aperiam delectus iure!
              </div>
            </div>
          </div>
          <div class="position-relative p-4">
            <div class="team-image-holder pr-3">
              <img
                src="img/img-holder/480x480.jpg"
                alt="rifc-team"
                class="img-responsive"
              />
            </div>
            <div class="position-absolute team-brief py-4 pr-4">
              <div
                class="border-bottom border-dark text-capitalize font-18  mb-3"
              >
                <span class="pr-5 titillium-web-semiBold">Vignesh Vignesh</span>
                <span class="small">Founder</span>
              </div>
              <div class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident a unde ab natus fuga deleniti nemo praesentium hic
                eaque aut pariatur mollitia iste ex dignissimos omnis at,
                aperiam delectus iure!
              </div>
            </div>
              </div>-->
              <div
                class="position-relative p-4"
                ng-repeat="team in teams track by $index"
                ng-if="team.status == 'Enable'"
              >
                <div class="team-image-holder pr-3" ng-if="team.image">
                  <img
                    ng-src="{{ team.image | uploadpath }}"
                    alt="rifc-team"
                    class="img-responsive"
                  />
                </div>
                <div class="team-image-holder pr-3" ng-if="!team.image">
                  <img src="img/img-holder/480x480.jpg" alt="rifc-team" class="img-responsive" />
                </div>
                <div class="position-absolute team-brief py-4 pr-4">
                  <div class="border-bottom border-dark text-capitalize font-18 mb-3">
                    <span class="pr-5 titillium-web-semiBold">{{ team.name }}</span>
                    <span class="small">{{ team.designation }}</span>
                  </div>
                  <div class>{{ team.description }}</div>
                </div>
              </div>
              <!-- <div class="mb-4">
            <div class="d-sm-flex flex-row">
              <div class="px-3">
                <div class="img-holder mx-auto">
                  <img
                    src="img/img-holder/480x480.jpg"
                    alt="rifc-team"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="px-3">
                <div
                  class="border-bottom border-dark text-capitalize font-18  mb-3"
                >
                  <span class="pr-5">Vignesh Vignesh</span>
                  <span>Founder</span>
                </div>
                <div class="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident a unde ab natus fuga deleniti nemo praesentium hic
                  eaque aut pariatur mollitia iste ex dignissimos omnis at,
                  aperiam delectus iure!
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="d-flex">
              <div class="px-3">
                <div class="img-holder mx-auto">
                  <img
                    src="img/img-holder/480x480.jpg"
                    alt="rifc-team"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="px-3">
                <div
                  class="border-bottom border-dark text-capitalize font-18  mb-3"
                >
                  <span class="pr-5">Vignesh Vignesh</span>
                  <span>Founder</span>
                </div>
                <div class="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident a unde ab natus fuga deleniti nemo praesentium hic
                  eaque aut pariatur mollitia iste ex dignissimos omnis at,
                  aperiam delectus iure!
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="d-flex">
              <div class="px-3">
                <div class="img-holder mx-auto">
                  <img
                    src="img/img-holder/480x480.jpg"
                    alt="rifc-team"
                    class="img-responsive"
                  />
                </div>
              </div>
              <div class="px-3">
                <div
                  class="border-bottom border-dark text-capitalize font-18  mb-3"
                >
                  <span class="pr-5">Vignesh Vignesh</span>
                  <span>Founder</span>
                </div>
                <div class="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident a unde ab natus fuga deleniti nemo praesentium hic
                  eaque aut pariatur mollitia iste ex dignissimos omnis at,
                  aperiam delectus iure!
                </div>
              </div>
            </div>
              </div>-->
            </div>
          </div>
        </div>
        <div class="row" ng-if="about.content2">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="content2 titillium-web-regular" ng-bind-html="about.content2 | rawHtml"></div>
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
export default {
  components: {
    headerSection,
    footerSection
  }
};
</script>

<style lang="scss">
.main-head {
  span {
    border-bottom-width: 3px !important;
  }
}

.team-image-holder {
  width: 200px;
}

.team-brief {
  top: 0%;
  right: 0%;
  padding-left: 230px;
}
</style>