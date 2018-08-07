import Vue from "vue";
import App from "./App.vue";

import Raven from "raven-js";
import RavenVue from "raven-js/plugins/vue";

Raven.config("https://7b925295c74e4fc68597d1860c5e0db0@sentry.io/1258026")
  .addPlugin(RavenVue, Vue)
  .install();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
