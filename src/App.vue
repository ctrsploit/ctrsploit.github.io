<script setup lang="ts">
import Layout from "@/components/layout/Layout.vue";
import {themes} from "@/theme.ts";
import {provide, ref} from "vue";

provide('theme', ref(themes.blue));
</script>

<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<style>
* {
  cursor: var(--cursor);
}

html, body {
  line-height: 1.5;
  background-color: var(--colorBgBody);
}
</style>
