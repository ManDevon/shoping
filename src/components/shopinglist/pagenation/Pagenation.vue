<template>
  <div class="list-waper">
    <ul>
      <li class="navli" @click="page.prev()">
        <img src="@/assets/icons/v1/left.svg" />
      </li>
    </ul>
    <ul id="loop" ref="loop"></ul>
    <ul>
      <li class="navli" @click="page.prev()">
        <img src="@/assets/icons/v1/left.svg" />
      </li>
      <li class="navli" id="totalpage">{{ props.totalpage }}</li>
      <li class="navli" @click="page.next()">
        <img src="@/assets/icons/v1/right.svg" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { Pagenation } from "./pagenation";
const props = defineProps<{
  totalpage: number;
  currentpage: number;
  maxlength: number;
}>();
let page = Pagenation.INIT();
onMounted(() => {
  page.setInitData({
    totalpage: 200,
    maxLength: 10,
    currentPage: 1,
    elementId: "loop",
  });
});
</script>
<style lang="less" scoped>
@import url("./Pagenation.less");
</style>
