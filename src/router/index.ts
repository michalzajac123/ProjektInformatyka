import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { Vue } from "vue-class-component";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cpp",
    name: "cpp",
    component: () => import("../views/CppView.vue"),
  },
  {
    path: "/js",
    name: "js",
    component: () => import("../views/JsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
