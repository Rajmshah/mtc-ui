<template>
  <div class="home">
    <headerSection></headerSection>
    <img alt="Vue logo" src="../assets/logo.png" />
    <footerSection></footerSection>
  </div>
</template>

<script>
// @ is an alias to /src
import footerSection from "@/views/Footer.vue";
import headerSection from "@/views/Header.vue";
export default {
  name: "home",
  components: {
    headerSection,
    footerSection
  }
};
</script>
