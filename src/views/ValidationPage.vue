<template>
  <div>
    <div class="main-background">
      <!--  -->
      <AllForms></AllForms>
      <!--  -->
    </div>
  </div>
</template>
<script>
import AllForms from "@/components/AllForms.vue";
export default {
  components: {
    AllForms
  }
};
</script>
<style lang="scss">
@import "src/assets/scss/main.scss";
.main-background {
  // background-image: linear-gradient($pink, $blue), url("~@/assets/computer.jpg");
  height: 100vh;
  position: fixed;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: scroll;
}
</style>
