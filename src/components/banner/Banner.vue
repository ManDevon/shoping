<template>
  <div class="banner">
    <div class="waper">
      <div id="search-icon"></div>
      <input
        id="search"
        type="text"
        name="search"
        class="search"
        v-model="searchVal"
        placeholder="搜索商品"
      />
      <div class="btn-waper">
        <div class="camera"></div>
        <input class="btn-search" type="button" value="搜索" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const searchVal = ref("");
</script>
<style lang="less" scoped>
@import url("./banner.less");
</style>
