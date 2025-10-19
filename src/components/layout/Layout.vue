<script setup lang="ts">
import ThemeSwitch from "@/components/layout/ThemeSwitch.vue";
import {inject} from "vue";
import { themes } from "@/theme";
import type { Theme } from "@/theme";
import Footer from "@/components/layout/Footer.vue";
import Menu from "@/components/layout/Menu.vue";

const theme = inject<Theme>('theme', themes.blue);
</script>

<template>
  <a-config-provider
      :theme="{
        components: {
          Layout: {
            colorBgBody: theme.colorBgBody,
            colorBgHeader: theme.colorPrimary,
            colorText: 'white',
          },
        },
      }"
  >
    <a-layout id="layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <router-link to="/" class="logo">CTRSploit Landscape</router-link>
        <div class="header-right">
          <Menu/>
          <ThemeSwitch/>
        </div>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
      <Footer/>
    </a-layout>
  </a-config-provider>
</template>

<style scoped>
.logo {
  height: 31px;
  float: left;
  font-size: 19px;
  font-weight: 600;
  color: black;
  font-family: Poppins, Poppins-fallback, Helvetica,
  Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Noto Color Emoji,
  Segoe UI Symbol, Android Emoji, EmojiSymbols, -apple-system,
  BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans,
  sans-serif
}

a:hover {
  color: white;
}

/* Make content area flexible so footer doesn't push page past 100vh */
.content {
  color: #e1e1e1;
  padding-top: 70px;
  flex: 1; /* allow content to grow/shrink */
}

#layout {
  min-height: 100vh;
  display: flex; /* make layout a flex container */
  flex-direction: column;
}

/* Ensure the header stays on top while not affecting the document flow for sizing */
a-layout-header {
  flex-shrink: 0;
}

.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>