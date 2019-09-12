import Vue from "vue";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import App from "./App.vue";

Sentry.init({
  debug: true,
  dsn: "<your-dsn>",
  integrations: [
    new VueIntegration({
      Vue,
      logErrors: true
    })
  ]
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
