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
        <div class="row" ng-if="about.content2">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="content2 titillium-web-regular">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam aliquid dolore nulla perspiciatis perferendis. Mollitia eaque neque rerum tempora explicabo, facilis odio provident in eveniet at consequatur quae non.</p>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis mollitia perferendis odio reiciendis fugit itaque, modi numquam deleniti error aliquam fugiat, reprehenderit harum. Similique atque inventore esse iure quidem in.</p>

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae possimus in, nemo corporis placeat tempore pariatur cum dignissimos aliquid doloremque nesciunt, ea assumenda consequuntur vero illo adipisci? Nisi, quisquam omnis?</p>
            </div>
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