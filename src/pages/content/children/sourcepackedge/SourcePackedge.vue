<template>
  <Banner from="SCPKG"></Banner>
  <div style="padding-top: 30px; background-color: #f5f5f5">
    <Navigation></Navigation>
  </div>
  <div>
    <CanvasComp></CanvasComp>
  </div>
</template>
<style lang="less" scoped>
@import url("./SourcePackedge.less");
</style>
<script lang="ts" setup>
import Navigation from "@/components/mainlist/navigation/Navigation.vue";
import Banner from "@/components/banner/Banner.vue";
import CanvasComp from "@/components/canvas/CanvasComp.vue";
</script>
