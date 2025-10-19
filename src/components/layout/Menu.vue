<script setup lang="ts">
import {inject} from "vue";
import { themes } from "@/theme";
import type { Theme } from "@/theme";
import {useRouter} from "vue-router";

const theme = inject<Theme>('theme', themes.blue);
const router = useRouter()
const go = (item: any) => {
  router.push('/' + String(item?.key));
}
const menu = [
  {
    label: 'Vulnerability',
    key: 'vul',
  },
  {
    label: 'CheckSec',
    key: 'checksec',
  },
  {
    label: 'Env',
    key: 'env',
  },
  {
    label: 'Roadmap',
    key: 'roadmap',
  }
];
</script>

<template>
  <a-config-provider
      :theme="{
            components: {
              Menu: {
                colorItemBg: theme.colorPrimary, // background color of the menu
                colorBgElevated: theme.colorPrimary, // background color of the second level menu
                colorItemTextHover: 'white', // hover color of the menu
                colorItemTextSelectedHorizontal: 'white', // hover color of the menu text underline
                colorItemTextSelected: 'white',
                colorItemBgSelected: theme.colorPrimary,
              }
            },
          }"
  >
    <a-menu
        class="menu"
        @click="go"
        mode="horizontal"
        :items="menu"
    />
  </a-config-provider>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: flex-end;
}

.menu {
  font-weight: bold;
  font-size: 18px;
}

::v-deep(ant-menu-item) {
  font-size: 16px;
}
</style>