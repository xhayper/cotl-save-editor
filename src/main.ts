import BootstrapVue3, { BToastPlugin } from "bootstrap-vue-3";
import { createPinia } from "pinia";
import { createApp } from "vue";

import router from "./router";
import App from "./App.vue";

import "./assets/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(BootstrapVue3);
app.use(BToastPlugin);
app.use(router);

app.mount("#app");
