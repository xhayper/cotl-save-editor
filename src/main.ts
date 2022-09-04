import BootstrapVue3 from "bootstrap-vue-3";
import { createPinia } from "pinia";
import { createApp } from "vue";

import router from "./router";
import App from "./App.vue";

import "./assets/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(BootstrapVue3);
app.use(router);

app.mount("#app");
