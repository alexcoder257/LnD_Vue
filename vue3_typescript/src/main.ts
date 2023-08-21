import "./assets/main.css";

import App from "./App.vue";
import router from "./router/index";
import { createApp } from "vue";
import { createPinia } from "pinia";
import vClickOutside from "click-outside-vue3";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(vClickOutside);
app.mount("#app");
