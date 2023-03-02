import { defineStore } from "pinia";
import { reactive } from "vue";
import { Api } from "@/request/api.config";
import { Goods } from "@/interface/Goods.imp";
const ShopListStore = defineStore("ShopListStore", {
  state: () => ({
    list: reactive<Goods[]>([]),
  }),
  getters: {},
  actions: {
    getSellerList(type: string) {
      Api.getSellerList().then((res: any) => {
        this.list = res;
      });
    },
  },
});

export default ShopListStore;
