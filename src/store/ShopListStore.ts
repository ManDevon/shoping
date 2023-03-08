import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { Api } from "@/request/api.config";
export interface Goods {
  src: string;
  name: string;
  title?: string;
  dec?: string;
  price: number;
  number: number;
  like: number;
  sellerNum: string;
  webAddress?: string;
}
const ShopListStore = defineStore("ShopListStore", {
  state: () => ({
    list: reactive<Goods[]>([]),
    totalpage: ref(0),
    currentpage: ref(1),
  }),
  getters: {},
  actions: {
    async getSellerList(type: string = "pw", pageIndex: number = 1) {
      await Api.getSellerList(type, pageIndex).then((res: any) => {
        this.list = res.list;
        this.totalpage = res.pageation.totalpage;
        this.currentpage = res.pageation.currentpage;
        console.log("request", "getSellerList");
      });
    },
  },
});

export default ShopListStore;
