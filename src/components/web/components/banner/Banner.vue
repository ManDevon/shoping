<template>
  <div :class="`waper-${props.styleMode}`">
    <canvas width="100%" height="100%" id="main"></canvas>
  </div>
  <div>
    <Myprogress :max-value="100" :callback="handlvalue"></Myprogress>
  </div>
</template>
<style lang="less">
@import url("./Banner.less");
</style>
<script setup lang="ts">
import { fabric } from "fabric";
import { onMounted } from "vue";
import Myprogress from "@/components/progress/MyProgress.vue";
const handlvalue = (progressValue: number) => {
  const res = progressValue + 1;
  return res;
};
onMounted(() => {
  const canvas = new fabric.Canvas("main");
  var rect = new fabric.Rect({
    left: 100, //距离画布左侧的距离，单位是像素
    top: 100, //距离画布上边的距离
    fill: "red", //填充的颜色
    width: 30, //方形的宽度
    height: 30, //方形的高度
  });
  canvas.add(rect);
});
const props = defineProps<{
  styleMode: "m" | "w";
  bannerImg?: string[];
}>();
</script>
