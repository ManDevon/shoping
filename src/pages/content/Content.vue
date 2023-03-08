<template>
  <div class="main">
    <div class="header">
      <Header @change="HEADER_ChangeNav"></Header>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from "vue-router";
import Header from "@/components/header/header.vue";
import { ItemType } from "@/components/header/header.config";
const HEADER_ChangeNav = (item: ItemType) => {
  console.log("change");
};
</script>
<style lang="less" scoped>
@import url("./content.less");
</style>
