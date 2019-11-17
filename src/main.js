import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// BootstrapVue
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// vue-vuelidate
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// vue-toster
import Toaster from "v-toaster";
Vue.use(Toaster);
import "v-toaster/dist/v-toaster.css";

// vue select
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
Vue.component("v-select", vSelect);

// vue multiSelect
import Multiselect from "vue-multiselect";
Vue.component("vue-multiselect", Multiselect);
import "vue-multiselect/dist/vue-multiselect.min.css";

// vue-the-mask
import VueTheMask from "vue-the-mask";
Vue.use(VueTheMask);

// vue-tel-input
import VueTelInput from "vue-tel-input";
Vue.use(VueTelInput);

// vue momemt
Vue.use(require("vue-moment"));
// import VueMoment from 'vue-moment'

// Vue.use(VueMoment, {
//     moment,
// })

//FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar, faCalendar } from "@fortawesome/free-regular-svg-icons"; //far
import {
  faChevronRight,
  faChevronLeft,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons"; //fas

library.add(faCoffee);
library.add(faStar, faCalendar); //far
library.add(faChevronRight, faChevronLeft, faTrashAlt); //fas

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
