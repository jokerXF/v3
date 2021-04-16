/* eslint-disable */
import { createApp, useCssModule } from "vue";
import App from "./App.vue";
import router from "./router/router"
import Antd from "ant-design-vue";
import Element from 'element-ui';
import "ant-design-vue/dist/antd.css";
console.log(router)

const app = createApp(App);

app.use(router).use(Antd).mount("#app");

