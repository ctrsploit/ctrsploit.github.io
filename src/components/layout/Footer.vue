<script setup lang="ts">
import {version} from "@/components/version.ts";
</script>

<template>
  <div class="footer">
    <a-config-provider
        :theme="{
        token: {
          colorText: 'white',
        }
      }"
    >
      <a-layout-footer class="footer">
        <span style="font-weight: bold; font-size: large">ctrsploit</span>
        <br>
        {{ version.version }}
        <br>
        <span>compiled at: {{ version.time }}</span>
      </a-layout-footer>
    </a-config-provider>
  </div>
</template>

<style scoped>
.footer {
  text-align: center;
  /* reduce spacing that contributes to page overflow; use padding instead */
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>