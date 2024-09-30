import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import NotFound from "../views/httpStatusPage/404.vue";

const routes = [
  {
    path: "/",
    name: "indexView",
    component: IndexView,
  },
  {
    path: "/bridge",
    name: "bridge",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/BridgeView.vue"),
  },
  {
    path: "/:pathMatch(.*)*", // 捕获所有路径
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
