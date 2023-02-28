<template>
  <Banner></Banner>
  <div class="waper">
    <MainList></MainList>
  </div>
  <div class="shoping-list"></div>
</template>

<script lang="ts" setup>
import Banner from "@/components/banner/Banner.vue";
import MainList from "@/components/mainlist/MainList.vue";
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
