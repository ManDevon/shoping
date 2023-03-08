<template>
  <div class="list-waper">
    <ul>
      <li class="navli"><img src="@/assets/icons/v1/left.svg" /></li>
    </ul>
    <ul id="loop"></ul>
    <ul>
      <li class="navli" @click="page.prev()">
        <img src="@/assets/icons/v1/left.svg" />
      </li>
      <li class="navli">{{ props.totalpage }}</li>
      <li class="navli" @click="page.next()">
        <img src="@/assets/icons/v1/right.svg" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUpdated } from "vue";
import { Pagenation } from "./pagenation";
const props = defineProps<{
  totalpage: number;
  currentpage: number;
  maxlength: number;
}>();
let page = new Pagenation({
  totalpage: 200,
  currentPage: props.currentpage,
  maxLength: props.maxlength,
  elementId: "",
});
onUpdated(() => {
  console.log("pagenation.vue", props.currentpage, "---", props.totalpage);
});
onMounted(() => {
  page = new Pagenation({
    totalpage: 200,
    currentPage: props.currentpage,
    maxLength: props.maxlength,
    elementId: "loop",
  });
});
</script>
<style lang="less" scoped>
@import url("./Pagenation.less");
</style>
