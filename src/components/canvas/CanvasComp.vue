<template>
  <div class="cvs-waper">
    <div class="cvs-nav">
      <div class="item" v-for="item in navlist">
        <div class="title">{{ item.title }}</div>
        <div class="child-wap">
          <div v-for="child in item.list" class="style-item">
            <a>{{ child }}</a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <ul ref="mylist">
        <li v-for="(item, index) in list" :key="index" :ref="setRefs">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="less">
@import url("./canvas.less");
</style>
<script setup lang="ts">
import _ from "lodash";
import { onMounted, reactive, ref } from "vue";

import { config } from "./config";
const obj = {
  name: "小红",
  sex: "男",
  age: 23,
};
const navlist = config.navlist;
const list = reactive(["钢铁侠", "蜘蛛侠", "美国队长", "蝙蝠侠"]);
const mylist = ref(null);
const refsList = <any>ref([]);
// onMounted(() => {
//   console.log("列表的高度是：" + mylist.value.clientHeight);
//   console.dir(refsList.value);
// });

const setRefs = (el: any) => {
  refsList.value.push(el);
};
// let __fun__: Function | null = null;
// _.keys(obj).map((key, index) => {
//   //@ts-ignore
//   let value: any = obj[key];
//   const funs = new Set<Function>();
//   Object.defineProperty(obj, key, {
//     get: () => {
//       if (__fun__) {
//         funs.add(__fun__);
//       }
//       return value;
//     },
//     set: (val) => {
//       funs.forEach((fun: Function) => {
//         fun();
//       });
//       value = val;
//     },
//   });
// });

// const runFuns = (fun: Function) => {
//   __fun__ = fun;
//   __fun__();
//   __fun__ = null;
// };
// const update = (test: string) => {
//   obj.age = 15;
// };
// runFuns(update);
</script>

<!-- <template>
  <div ref="myRef">获取单个DOM元素</div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const myRef = ref(null);

    onMounted(() => {
      console.dir(myRef.value);
    });

    return {
      myRef,
    };
  },
};
</script> -->
