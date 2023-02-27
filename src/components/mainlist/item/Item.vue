<template>
  <div class="item">
    <div>
      <div class="title">{{ $props.title }}</div>
      <div class="dec">{{ $props.dec }}</div>
    </div>
    <div class="btn">
      <input type="button" value="立即查看" @click="handleNow($props.path)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  dec: string;
  path: string;
}>();

const handleNow = (path: string) => {};
</script>
<style lang="less" scoped>
@import url("./Item.less");
</style>
