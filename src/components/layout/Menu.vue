<script setup lang="ts">
import {inject} from "vue";
import {themes} from "@/theme";
import type {Theme} from "@/theme";
import {useRouter} from "vue-router";
import {antdMenus as menus} from "@/data/menus"
import type {ItemType} from "ant-design-vue";

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
                colorItemBg: theme.colorPrimary, // background color of the menus
                colorBgElevated: theme.colorPrimary, // background color of the second level menus
                colorItemTextHover: 'white', // hover color of the menus
                colorItemTextSelectedHorizontal: 'white', // hover color of the menus text underline
                colorItemTextSelected: 'white',
                colorItemBgSelected: theme.colorPrimary,
              }
            },
          }"
  >
    <a-menu :items="menus" class="menu" mode="horizontal" @click="go"/>
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