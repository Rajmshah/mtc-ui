import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import TeamDetail from "./views/TeamDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/team-detail/:token",
      name: "Team Detail",
      component: TeamDetail
    },
    {
      path: "/validationPage",
      name: "validationPage",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ValidationPage.vue")
    }
  ]
});
