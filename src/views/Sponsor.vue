<template>
  <div>
    <headerSection></headerSection>
    <div class="celebrity-holder">
      <img src="../assets/sponsor.png" alt="Sponsor Page" class="img-responsive" />
    </div>
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