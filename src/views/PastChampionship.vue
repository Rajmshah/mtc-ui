<template>
  <div>
    <headerSection></headerSection>
    <div class="celebrity-holder">
      <img src="../assets/past-3.png" alt="Past Championship Page" class="img-responsive" />
    </div>
    <!-- <section>
      <div class="text-center opensans-semibold text-uppercase coming-soon">
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
export default {
  components: {
    headerSection,
    footerSection
  }
};
</script>

<style lang="scss">
</style>