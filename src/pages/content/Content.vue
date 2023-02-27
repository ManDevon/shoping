<template>
  <div class="main">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content">
      <RouterView />
    </div>
    <div class="footer"></div>
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from "vue-router";
import Header from "@/components/header/header.vue";
</script>
<style lang="less" scoped>
@import url("./content.less");
</style>
