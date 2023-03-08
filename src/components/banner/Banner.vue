<template>
  <div class="banner">
    <div class="waper">
      <div class="local" v-if="props.from === 'index'">
        <div><span>地区筛选:</span></div>
        <ul>
          <li v-for="item in localList">{{ item.name }}</li>
        </ul>
      </div>
      <div class="s-waper">
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
  </div>
</template>
<script lang="ts" setup>
import { Config } from "./banner.config";
import { reactive, ref } from "vue";
const props = defineProps<{
  from: string;
}>();
const localList = reactive(Config.local);

const searchVal = ref("");
</script>
<style lang="less" scoped>
@import url("./banner.less");
</style>
