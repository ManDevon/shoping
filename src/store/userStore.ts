import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { Api } from "../request/api.config";
import router from "../router/router";
import * as _ from "lodash";
const UserStore = defineStore("userStore", {
  state: () => ({
    username: ref(""),
    password: ref(""),
    userInfor: reactive({}),
  }),
  getters: {},
  actions: {
    login() {
      Api.login(this.username, this.password).then((res: any) => {
        sessionStorage.setItem("user", JSON.stringify(res));
        this.userInfor = res;
        router.push("/index");
      });
    },
    checkLogin() {
      const session = sessionStorage.getItem("user");
      if (session) {
        try {
          const JSONSession: Object = JSON.parse(session);
          const keys = _.keys(JSONSession);
          if (keys.indexOf("token")) {
            return true;
          }
        } catch (error) {
          router.push("/login");
        }
      } else {
        router.push("/login");
      }
    },
  },
});

export default UserStore;
