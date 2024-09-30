<template>
  <el-carousel height="1080px" motion-blur interval=3000>
    <el-carousel-item v-for="index in indexes" :key="index">
      <img :src="index" class="carousel-image" />
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.carousel-image {
  object-fit: contain;
}
</style>

<script>
export default {
  data() {
    return {
      indexes: [
        require('../../src/assets/material/background.jpg'),
        require('../../src/assets/material/background.jpg'),
      ]
    }
  }
}
</script>