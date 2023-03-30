import { defineAsyncComponent } from "vue";

export const Banner = defineAsyncComponent(
  () => import("@/components/web/components/banner/banner.vue")
);
