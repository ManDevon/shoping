<template>
  <div class="login">
    <div class="infor">
      <form action="javascript:void(0)">
        <div class="item username">
          <div class="label"><label for="username">账号</label></div>
          <div>
            <input
              id="username"
              placeholder="请输入账号"
              type="text"
              name="username"
              @input="inputHandler"
              v-model="store.username"
            />
          </div>
        </div>
        <div class="item password">
          <div class="label">
            <label for="password">密码</label>
          </div>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              @input="inputHandler"
              v-model="store.password"
              autocomplete=""
            />
          </div>
        </div>
        <div class="item error" v-if="store.error.code">
          <span>{{ `${store.error.msg}(${store.error.code})` }}</span>
        </div>
        <div class="btn-group">
          <button @click="login">登陆</button>
          <button @click="register">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import UserStore from "../../store/userStore";
const router = useRouter();
const store = UserStore();
const login = () => {
  store.login();
};
const inputHandler = () => {
  store.initError();
};
const register = () => {};
</script>
<style lang="less" scoped>
@import url("./Login.less");
</style>
