<template>
  <div>
    <div class="waper">
      <div class="title">
        <div>热卖好物</div>
        <div class="mark">个性推荐</div>
      </div>
      <div class="item-waper">
        <Item
          v-for="item in list"
          :number="item.number"
          :name="item.name"
          :price="item.price"
          :like="item.like"
          :seller-num="item.sellerNum"
          :src="item.src"
        ></Item>
      </div>
    </div>
    <div class="pagenation">
      <Pagenation
        :totalpage="totalpage"
        :currentpage="currentpage"
        :maxlength="10"
      ></Pagenation>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ShopListStore from "@/store/ShopListStore";
import Item from "./Item/Item.vue";
import Pagenation from "./pagenation/Pagenation.vue";
import { storeToRefs } from "pinia";
const { totalpage, currentpage, list } = storeToRefs(ShopListStore());
</script>
<style lang="less" scoped>
@import url("./shopcontent.less");
</style>
