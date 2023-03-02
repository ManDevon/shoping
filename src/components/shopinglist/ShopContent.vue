<template>
  <div class="waper">
    <div class="title">
      <div>热卖好物</div>
      <div class="mark">个性推荐</div>
    </div>
    <Item
      v-for="item in store.list"
      :number="item.number"
      :name="item.name"
      :price="item.price"
      :like="item.like"
      :seller-num="item.sellerNum"
      :src="item.src"
    ></Item>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import ShopListStore from "@/store/ShopListStore";
import Item from "./Item/Item.vue";
const router = useRouter();
console.log(router.currentRoute.value);
const store = ShopListStore();

store.getSellerList("rm");
</script>
<style lang="less" scoped>
@import url("./shopcontent.less");
</style>
