<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
         <router-link to="/validationPage">Validation Page</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script></script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
