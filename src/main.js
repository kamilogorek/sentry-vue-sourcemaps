import Vue from "vue";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import App from "./App.vue";

Sentry.init({
  dsn: "<dsn>",
  release: "<release>",
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
