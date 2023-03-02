<template>
  <div class="item">
    <div class="seller-infor">
      <div class="img-waper"></div>
      <div class="title">
        safdasdfsafdasdfsafdasdfsafdasdfsafdasdfsafdasdfsafdasdfsafdasdfsafdasdfsafdasdf
      </div>
      <div class="mark">个性推荐</div>
      <div class="price">
        <div>
          <span>￥</span>
          <span>99.8</span>
        </div>
        <div>收藏</div>
      </div>
    </div>
    <div class="web">鑫颖网供</div>
  </div>
</template>
<script lang="ts" setup>
import { Goods } from "@/interface/Goods.imp";
export declare type ShopListType = {
  src: string;
  shopTitle?: string;
  price: number;
  mark?: string;
  sourceWebAddress?: string;
  sourceWebName?: string;
  local?: string;
  number: number;
  sellerNum: string;
};
defineProps<ShopListType>();
</script>
<style lang="less" scoped>
@import url("./item.less");
</style>
