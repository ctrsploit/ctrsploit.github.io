<script setup lang="ts">
import {inject} from "vue";
import {themes} from "@/theme";
import type {Theme} from "@/theme";
import {useRouter} from "vue-router";
import {menu} from "@/data/menu"
import {ItemType} from "ant-design-vue";

const theme = inject<Theme>('theme', themes.blue);
const router = useRouter()
const go = (item: ItemType) => {
  router.push('/' + String(item?.key));
}

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
    <a-menu class="menu" mode="horizontal">
      <a-menu-item
          v-for="item in menu"
          :key="item.key"
          @click="() => go(item)"
      >
        <component :is="item.icon" style="margin-right:8px;"/>
        {{ item.label }}
      </a-menu-item>
    </a-menu>
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