<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
         <router-link to="/validationPage">Validation Page</router-link>
    </div>-->
    <router-view />
  </div>
</template>
<script></script>

<style lang="scss">
#app {
  font-family: "Titillium Web Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.mx-input {
  background-color: transparent !important;
  border: 1px solid black !important;
}

.v-select {
  position: relative;
  font-family: inherit;
  width: 50%;
  border: 1px solid black;
  border-radius: 5px;
}
.multiselect__tags {
  border: 1px solid black !important;
  border-radius: 5px;
  background-color: transparent !important;
}
.multiselect__input {
  background-color: transparent !important;
}
.multiselect__placeholder {
  color: black !important;
}
@font-face {
  font-family: "Opensans Semibold";
  src: url("~@/fonts/Open_Sans/OpenSans-SemiBold.ttf");
}

@font-face {
  font-family: "Opensans Regular";
  src: url("~@/fonts/Open_Sans/OpenSans-Regular.ttf");
}

@font-face {
  font-family: "Opensans Light";
  src: url("~@/fonts/Open_Sans/OpenSans-Light.ttf");
}

@font-face {
  font-family: "OpenSans-Bold";
  src: url("~@/fonts/Open_Sans/OpenSans-Bold.ttf");
}

@font-face {
  font-family: "Oswald SemiBold";
  src: url("~@/fonts/Oswald/static/Oswald-SemiBold.ttf");
}

@font-face {
  font-family: "Oswald Regular";
  src: url("~@/fonts/Oswald/static/Oswald-Regular.ttf");
}

@font-face {
  font-family: "Oswald Light";
  src: url("~@/fonts/Oswald/static/Oswald-Light.ttf");
}

@font-face {
  font-family: "Oswald ExtraLight";
  src: url("~@/fonts/Oswald/static/Oswald-ExtraLight.ttf");
}

@font-face {
  font-family: "Oswald Bold";
  src: url("~@/fonts/Oswald/static/Oswald-Bold.ttf");
}

@font-face {
  font-family: "TitilliumWeb-Light";
  src: url("~@/fonts/Titillium_Web/TitilliumWeb-Light.ttf");
  font-weight: 600;
}

@font-face {
  font-family: "Titillium Web SemiBold";
  src: url("~@/fonts/Titillium_Web/TitilliumWeb-SemiBold.ttf");
  font-weight: 600;
}

@font-face {
  font-family: "Titillium Web Bold";
  src: url("~@/fonts/Titillium_Web/TitilliumWeb-Bold.ttf");
  font-weight: 600;
}

@font-face {
  font-family: "Titillium Web Regular";
  src: url("~@/fonts/Titillium_Web/TitilliumWeb-Regular.ttf");
  font-weight: 600;
}

@font-face {
  font-family: "Titillium Web Light";
  src: url("~@/fonts/Titillium_Web/TitilliumWeb-Light.ttf");
  font-weight: 600;
}

.titillium-web-light {
  font-family: "Titillium Web Light";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.titillium-web-regular {
  font-family: "Titillium Web Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.titillium-web-semiBold {
  font-family: "Titillium Web SemiBold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.titillium-web-bold {
  font-family: "Titillium Web Bold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.opensans-semibold {
  font-family: "Opensans Semibold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.opensans-bold {
  font-family: "OpenSans-Bold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.opensans-regular {
  font-family: "Opensans Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.opensans-light {
  font-family: "Opensans Light";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.oswald-semiBold {
  font-family: "Oswald SemiBold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.oswald-bold {
  font-family: "Oswald Bold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.oswald-regular {
  font-family: "Oswald Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.oswald-light {
  font-family: "Oswald Light";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.oswald-extraLight {
  font-family: "Oswald ExtraLight";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Titillium Web Regular";
}
</style>
