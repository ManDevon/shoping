import { defineStore } from "pinia";
import { reactive } from "vue";
import { Api } from "@/request/api.config";
import { Goods } from "@/interface/Goods.imp";
const ShopListStore = defineStore("ShopListStore", {
  state: () => ({
    list: reactive<Goods[]>([]),
    pageaction: reactive({}),
  }),
  getters: {},
  actions: {
    getSellerList(type: string) {
      Api.getSellerList(type).then((res: any) => {
        this.list = res.list;
        this.pageaction = res.pageation;
      });
    },
  },
});

export default ShopListStore;
