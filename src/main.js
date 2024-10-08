import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-plus";
import "element-plus/dist/index.css";
import "animate.css";

/* Animate On Scroll Library on github : https://github.com/michalsnik/aos */
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const app = createApp(App);

// ElementUI引入图标库的方式
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// naive-ui
import naive from "naive-ui";

app.use(naive);
app.use(router);
app.use(ElementUI);

app.mount("#app");
