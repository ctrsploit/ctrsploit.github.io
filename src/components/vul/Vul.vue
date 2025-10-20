<script setup lang="ts">
import vul from "@/data/vul.md"
import Markdown from "@/components/markdown/Markdown.vue";
</script>

<template>
  <Markdown :component="vul"/>
</template>

<style scoped>
::v-deep(th:first-child),
::v-deep(td:first-child) {
  white-space: nowrap;
}
</style>