<template>
  <div>
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

<style lang="scss"></style>
