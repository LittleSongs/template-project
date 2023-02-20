import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   redirect: "/dashboard",
    // },
    {
      path: "/",
      name: "Home",
      component: HomeView,
      // children: [
      //   {
      //     path: "/dashboard",
      //     name: "dashboard",
      //     meta: {
      //       title: "系统首页",
      //     },
      //   },
      // ],
    },
  ],
});

export default router;
