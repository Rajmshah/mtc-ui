<template>
  <div class="season-9">
    <headerSection></headerSection>
    <b-embed
      type="iframe"
      v-bind:src="
        `https://cricheroes.in/tournament/1/88440/MTC-Marudhar-Cup-2020---Season-9`
      "
      allowfullscreen
    ></b-embed>
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
@media only screen and (max-width: 768px) {
  .embed-responsive {
    height: 540px;
  }
}
</style>
