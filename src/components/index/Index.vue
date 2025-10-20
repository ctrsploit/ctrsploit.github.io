<script setup lang="ts">

import ImageWall from "../ImageWall.vue";
import {menus} from "@/data/menus";
import Desc from "@/components/index/Desc.vue";
</script>

<template>
  <div class="container">
    <ImageWall image="/assets/ctrsploit-cyber.png" height="360px" background-color="#211e32"/>
    <div class="content">
      <a-row>
        <span class="title">
          <span>Ctrsploit Landscape</span>
          &emsp;
          <a href="https://github.com/ctrsploit/ctrsploit/releases"
             style="font-size: 20px"
             target="_blank">releases</a>

          <a href="https://github.com/ctrsploit/ctrsploit"
             style="font-size: 20px; margin-left: 10px"
             target="_blank">src(ctrsploit)</a>
          <a href="https://github.com/ctrsploit/ctrsploit.github.io"
             style="font-size: 20px; margin-left: 10px"
             target="_blank">src(ctrsploit.github.io)</a>
        </span>
      </a-row>
      <a-row>
        <a-col v-for="item in menus" :key="'1' + item.key" :span="12" class="graph">
          <Desc :menu="item"/>
        </a-col>
      </a-row>
    </div>
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
  margin-top: 30px;
}

.title {
  font-size: 32px;
  font-weight: bold;
}

.graph {
  padding-right: 20px;
  margin-top: 30px;
}

a {
  color: #e1e1e1;
  text-decoration: underline;
  text-decoration-color: dimgray;
  text-underline-offset: 0.2em;
  margin-bottom: 10px;
}

a:hover {
  color: var(--colorPrimary);
}
</style>