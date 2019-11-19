import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/validationPage",
      name: "validationPage",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ValidationPage.vue")
    }
  ]
});
