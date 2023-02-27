import { defineStore } from "pinia";
import { ref } from "vue";

const Store = defineStore("Main", {
  state: () => ({
    user: ref(""),
  }),
  getters: {},
  actions: {
    act() {
      this.user;
    },
  },
});

export default Store;
