<template>
  <div>
    <headerSection></headerSection>
    <section>
      <div class="login my-5 text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-8 col-sm-10 col-xs-12 m-auto">
              <div class="card p-3">
                <div class>
                  <p
                    class="mb-1 titillium-web-semiBold text-uppercase"
                  >Team registrations has been closed.</p>
                  <p class="mb-0">
                    In case of any queries please call:
                    <a href="tel:9833208066">9833208066</a>
                  </p>
                </div>
              </div>
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

<style lang="scss" scoped>
.login {
  height: 100vh-55.4;
  .card {
    border-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 1);
  }
}
</style>