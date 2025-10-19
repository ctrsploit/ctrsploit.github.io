<script setup lang="ts">
import { themes } from "@/theme";
import type { Theme } from "@/theme";
import {inject, onMounted, ref} from "vue";
import type { Ref } from "vue";

const mode = ref(false)

const theme = inject<Ref<Theme>>('theme', ref(themes.blue));
const toggleTheme = function () {
  let themeLink = document.getElementById('theme-style') as HTMLLinkElement;
  if (!themeLink) {
    themeLink = document.createElement('link');
    themeLink.id = 'theme-style';
    themeLink.rel = 'stylesheet';
    document.head.appendChild(themeLink);
  }
  themeLink.href = mode.value ? `/assets/style/blue.css` : `/assets/style/pink.css`;
  theme.value = mode.value ? themes.blue : themes.pink;
}

onMounted(() => {
  toggleTheme();
})
</script>

<template>
  <a-switch @change="toggleTheme" v-model:checked="mode"
            checked-children="pink" un-checked-children="blue"/>
</template>

<style scoped>

</style>