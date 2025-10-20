<script setup lang="ts">
const props = defineProps<{
  padding?: string,
  component?: any,
}>();
</script>

<template>
  <div class="container" :style="{paddingLeft: padding, paddingRight: padding}">
    <div class="markdown">
      <component v-if="props.component !== undefined" :is="props.component" ref="current"/>
      <router-view v-else v-slot="{Component}" name="markdown">
        <component :is="Component" ref="current"/>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  max-width: 1200px;
  text-align: left;
  word-wrap: break-word;
}

::v-deep(table) {
  width: 100%;
  border-spacing: 0;
}

::v-deep(th), ::v-deep(td) {
  border-bottom: 1px solid gray;
  padding: 16px 16px;
}

::v-deep(a) {
  color: #e1e1e1;
  /* color: #fc80ff; */
  text-decoration: underline;
  text-decoration-color: dimgray;
  text-underline-offset: 0.2em;
  margin-bottom: 10px;
}

::v-deep(a:hover) {
  color: var(--colorPrimary);
}

::v-deep(.markdown h1) {
  text-align: center;
}

</style>