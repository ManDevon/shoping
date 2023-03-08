<template>
  <div class="nav-waper">
    <ul>
      <li
        v-for="(item, index) in config"
        @click="eventHandler(item)"
        :class="item.default ? 'action' : ''"
      >
        <div>{{ item.title }}</div>
        <img
          v-if="config.length === index + 1"
          src="@/assets/icons/v1/arrow_down.svg"
        />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import _ from "lodash";
import { reactive, ref } from "vue";
import { navconfig } from "./navigation.config";
import ShopListStore from "@/store/ShopListStore";
const config = reactive(navconfig);
const showMore = ref(false);
const shopStore = ShopListStore();
let defCurrentItem = reactive(
  config[
    _.findIndex(config, (item) => {
      if (item.default) {
        localStorage.setItem("type", item.type);
      }
      return item.default === true;
    })
  ]
);
const defaultNav_more = {
  id: config[config.length - 1].id + 1,
  title: "更多",
  path: "",
  type: "more",
  default: false,
};
if (config[config.length - 1].title !== defaultNav_more.title) {
  config.push(defaultNav_more);
}
const eventHandler = (options: typeof defaultNav_more) => {
  if (options.id === config[config.length - 1].id) {
    //show more
    if (showMore.value) {
      showMore.value = false;
    } else {
      showMore.value = true;
    }
  }
  config.map((item) => {
    if (options.id !== config[config.length - 1].id) {
      if (item.id === options.id) {
        item.default = true;
        localStorage.setItem("type", item.type);
      } else {
        item.default = false;
      }
    }
    if (defCurrentItem.id !== options.id) {
      defCurrentItem = options;
      shopStore.getSellerList(defCurrentItem.type);
    }
  });
};
const init = () => {
  shopStore.getSellerList(defCurrentItem.type);
};
init();
</script>
<style lang="less" scoped>
@import url("./navigation.less");
</style>
