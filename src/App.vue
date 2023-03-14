<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useRouter, RouterView } from "vue-router";
import Login from "./pages/login/Login.vue";
import Content from "./pages/content/Content.vue";
import { pagePath } from "./router/single.config";
import { markRaw, reactive, ref } from "vue";

// const components = reactive({
//   content: markRaw(Content),
//   login: markRaw(Login),
// });

// const component = ref(components.content);
const route = useRouter();
// if (pagePath.indexOf(route.currentRoute.value.path) !== -1) {
//   component.value = components.login;
// }

/***
 * js加载不出来
 *
 * window.addEventlistener('error', (e)=>{
 *  const tag = e.target;
 *    if(tag.tagName==="SCRIPT" && !(e instanceof ErrorEvent)){
 *    console.log('script error');
 *
 *    创建script进行重新加载
 *    执行页面阻塞任务， 防止引用脚本先行执行
 *    document.write('<script src='1/1.js'>\<\/script>')
 *    }
 * }, true)
 *
 * 因为要事件冒泡所以加上true
 */
</script>

<style scoped></style>
