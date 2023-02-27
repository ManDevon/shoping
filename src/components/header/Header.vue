<template>
  <div class="waper">
    <div class="header-waper">
      <div class="login-infor">
        <ul>
          <li v-for="item in HeaderConfig.loginInfor">{{ item.title }}</li>
        </ul>
      </div>
      <div class="header-list">
        <ul>
          <li v-for="item in hlist">{{ item.title }}</li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <div class="nav-content">
        <div class="logo">
          <div>
            <span class="logo-font">供包网</span>
          </div>
          <div class="logo-dec">
            <div>找货源</div>
            <div>就上供包网</div>
          </div>
        </div>
        <div class="nav-list">
          <ul>
            <li v-for="item in HeaderConfig.nav">{{ item.title }}</li>
          </ul>
        </div>
      </div>
      <div class="user">
        <img src="a.jpg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { HeaderConfig } from "./header.config";
const hlist = HeaderConfig.list;
</script>
<style lang="less" scoped>
@import url("./header.less");
</style>
