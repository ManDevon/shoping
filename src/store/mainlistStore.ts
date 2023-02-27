import { defineStore } from "pinia";
import { Api } from "@/request/api.config";
import { reactive } from "vue";

export declare type listType = {
  id: number;
  title: string;
  dec: string;
  path: string;
}[];

const MainStore = defineStore("mainStore", {
  state: () => ({
    list: reactive<listType>([]),
  }),
  getters: {},
  actions: {
    getList() {
      Api.getMainList().then((res: any) => {
        this.list = res.list;
      });
    },
  },
});
export default MainStore;
