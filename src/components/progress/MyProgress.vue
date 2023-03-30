<template>
  <div id="loader">
    <progress id="pro" :value="0" :max="props.maxValue"></progress>
    <output for="pro"></output>
  </div>
</template>
<style lang="less" scoped>
@import url("./MyProgress.less");
</style>
<script lang="ts" setup>
import { onMounted } from "vue";

const props = withDefaults(
  defineProps<{
    /**
     * @description this is progress maxvalue
     */
    maxValue?: number;
    /**
     * @description return a number for progress value
     */
    callback: Function;
  }>(),
  {
    maxValue: 100,
  }
);

onMounted(() => {
  const progressEle: HTMLElement | null = document.getElementById("pro");
  const outEle = document.querySelector("[for='pro']");
  //@ts-ignore
  const progressMax = progressEle?.max;
  //@ts-ignore
  outEle.value = props.value;

  function loading(t = 0) {
    if (t <= progressMax) {
      //@ts-ignore
      outEle.value = progressEle.value = t;
      //@ts-ignore
      requestAnimationFrame(loading.bind(this, props.callback(t)));
    }
  }
  loading();
});
</script>
