import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../src/routes";
import { createPinia } from "pinia";

import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(router);
app.use(createPinia());

app.mount("#app");
