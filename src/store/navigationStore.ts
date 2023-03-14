import { Api } from "@/request/api.config";
import { defineStore } from "pinia";
import { navconfig } from "../components/mainlist/navigation/navigation.config";
import { Config } from "../components/banner/banner.config";
import { pageConfig } from "@/router/page.config";
const store = defineStore("PagenationStore", {
  state: () => {
    return {
      list: [],
    };
  },
  getters: {},
  actions: {
    getList: (pageName: string) => {
      //@ts-ignore
      const config = pageConfig[pageName];
      if (pageName) {
      }
    },
  },
});
export default store;
