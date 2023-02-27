import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
createApp(App).use(router).use(createPinia()).use(ElementPlus).mount("#app");
