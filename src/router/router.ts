import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import login from "../pages/login/Login.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "login2",
    meta: {
      isAuth: true,
      isPkgRoute: false,
    },
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    meta: {
      isAuth: true,
      isPkgRoute: false,
    },
    component: login,
  },
  {
    path: "/web",
    name: "webcomponents",
    meta: {
      isAuth: false,
      isPkgRoute: false,
    },
    component: () => import("@/pages/web/Index.vue"),
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
        redirect: "/source/packedge-list",
        meta: {
          isAuth: false,
          isPkgRoute: false,
        },
        children: [
          {
            path: "/source/packedge-list",
            name: "sourcelist",
            meta: {
              isAuth: false,
              isPkgRoute: false,
            },
            component: () => import("@/components/shopinglist/ShopContent.vue"),
          },
        ],
      },
      {
        path: "/spackedge",
        name: "sourcepackedge",
        meta: {
          isAuth: false,
          isPkgRoute: true,
        },
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
