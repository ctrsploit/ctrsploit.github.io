<script setup lang="ts">

import ImageWall from "@/components/ImageWall.vue";
</script>

<template>
  <div class="container">
    <ImageWall image="/assets/ctrsploit-todo-cyber.png" height="400px" background-color="#211e32"/>
  </div>
  <div class="content">
    <h1>Todo</h1>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  max-width: 1200px;
  padding-left: 100px;
  padding-right: 100px;
  text-align: left;
  word-wrap: break-word;
}


.content {
  padding: 40px 0;
  text-align: center;
}
</style>