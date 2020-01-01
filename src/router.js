import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Season9 from "./views/Season9.vue";
import About from "./views/About.vue";
import Gallery from "./views/Gallery.vue";
import Login from "./views/Login-end.vue";
import OldLogin from "./views/Login.vue";
import ContactUs from "./views/ContactUs.vue";
import Sponsor from "./views/Sponsor.vue";
import Championship from "./views/PastChampionship.vue";
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
      path: "/season-9",
      name: "Season9",
      component: Season9
    },
    {
      path: "/about-us",
      name: "About",
      component: About
    },
    {
      path: "/sponsor",
      name: "Sponsor",
      component: Sponsor
    },
    {
      path: "/past-championship",
      name: "Championship",
      component: Championship
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery
    },
    {
      path: "/contact-us",
      name: "ContactUs",
      component: ContactUs
    },
    {
      path: "/login",
      name: "Login-End",
      component: Login
    },
    {
      path: "/post-registration",
      name: "Login",
      component: OldLogin
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
