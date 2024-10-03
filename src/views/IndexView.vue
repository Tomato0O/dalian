<template>
  <el-carousel height="1080px" motion-blur interval=3000>
    <el-carousel-item v-for="index in indexes" :key="index">
      <img :src="index" class="carousel-image" />
    </el-carousel-item>
  </el-carousel>

  <!-- TODO 文案、图片、etc... -->
</template>

<style>
.carousel-image {
  object-fit: contain;
}
</style>

<script>

export default {
  components: {
    // 
  },
  data() {
    return {
      indexes: [
        require('../../src/assets/index/bridge1.jpg'),
        require('../../src/assets/index/bridge2.jpg'),
        require('../../src/assets/index/bridge3.jpg'),
      ]
    }
  }
}
</script>