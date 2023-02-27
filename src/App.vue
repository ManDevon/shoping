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
</script>

<style scoped></style>
