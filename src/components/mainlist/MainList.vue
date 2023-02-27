<template>
  <div class="waper">
    <Item
      v-for="item in store.list"
      :title="item.title"
      :dec="item.dec"
      :path="item.path"
    ></Item>
  </div>
  <div>
    <Navigation></Navigation>
  </div>
</template>
<script lang="ts" setup>
import Item from "./item/Item.vue";
import Navigation from "./navigation/Navigation.vue";
import MainStore from "@/store/mainlistStore";
const store = MainStore();
store.getList();
</script>
<style lang="less" scoped>
@import url("./MainList.less");
</style>
