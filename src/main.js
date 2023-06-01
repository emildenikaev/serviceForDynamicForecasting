import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueApexCharts from "vue3-apexcharts";

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(VueApexCharts)
  .mount("#app");
