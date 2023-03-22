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
import { navconfig, navType } from "./navigation.config";
import { Config } from "../../banner/banner.config";
import { useRoute } from "vue-router";
const route = useRoute();
const getConfig = () => {
  const meta = route.meta;
  if (meta.isPkgRoute) {
    return Config.local;
  }
  const defaultNav_more = {
    id: navconfig[navconfig.length - 1].id + 1,
    title: "更多",
    path: "",
    type: "more",
    default: false,
  };
  if (navconfig[navconfig.length - 1].title !== defaultNav_more.title) {
    navconfig.push(defaultNav_more);
  }
  return navconfig;
};
const config = reactive(getConfig());

const showMore = ref(false);
const getDefault = (config: navType[]): navType => {
  return config[
    _.findIndex(config, (item) => {
      if (item.default) {
        localStorage.setItem("type", item.type);
      }
      return item.default === true;
    })
  ];
};
let defCurrentItem = reactive(getDefault(config));

const eventHandler = (options: navType) => {
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
    }
  });
};
</script>
<style lang="less" scoped>
@import url("./navigation.less");
</style>
