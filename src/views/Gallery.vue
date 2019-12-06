<template>
  <div>
    <headerSection></headerSection>
    <section>
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
  }
};
</script>

<style lang="scss">
</style>