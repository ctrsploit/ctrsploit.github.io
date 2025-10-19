<script lang="ts" setup>

defineProps<{
  image: string,
  height: string,
  backgroundColor: string,
}>();
</script>

<template>
  <div class="wall" :style="{height: height, backgroundColor: backgroundColor}">
    <img :src="image" alt="">
  </div>
</template>

<style scoped>
.wall {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.wall img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

.wall img {
  width: auto;
  height: auto;
  object-fit: scale-down;
}

</style>