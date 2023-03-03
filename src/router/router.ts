import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import login from "../pages/login/Login.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "login2",
    meta: {
      isSingle: true,
      isAuth: true,
    },
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    meta: {
      isSingle: true,
    },
    component: login,
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("@/pages/content/Content.vue"),
    redirect: "/source",
    children: [
      {
        path: "/source",
        name: "source",
        component: () => import("@/pages/content/children/index/index.vue"),
        children: [
          {
            path: "/source/packedge-list",
            name: "PkgWm",
            component: () => import("@/components/shopinglist/ShopContent.vue"),
          },
          // {
          //   path: "/source/travel-pkg",
          //   name: "PkgWm",
          //   component: () => import("@/components/shopinglist/ShopContent.vue"),
          // },
        ],
      },
      {
        path: "/spackedge",
        name: "SourcePackedge",
        component: () =>
          import("@/pages/content/children/sourcepackedge/SourcePackedge.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // const Store = UserStore();
  // Store.checkLogin();
  next();
});

export default router;
