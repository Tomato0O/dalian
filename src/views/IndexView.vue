<template>
  <el-carousel height="720px" motion-blur interval=3000>
    <el-carousel-item v-for="index in indexes" :key="index">
      <img :src="index" class="carousel-image" />
    </el-carousel-item>
  </el-carousel>


  <el-container style="margin: 10px;">
    <el-image :src="leftImage1" data-aos="fade-right"></el-image>
    <n-card>
      位于辽东半岛南端，是由一个叫“青泥洼”的小渔村逐步发展起来的，仅有百余年的历史。西北濒临渤海，东南面向黄海，与山东半岛隔海相望，共扼渤海湾。2006年末大连市总人口572.1万人，有36个民族。辖6个区、3个县级市、1个海岛县，土地面积12574平方公里，其中市区面积2415平方公里。海岸线长1906公里，其中海岛岸线618公里。大连属具有海洋性特点的季风型大陆气候，冬无严寒，夏无酷暑，无霜期6个月，年降雨量700毫米左右。
    </n-card>
  </el-container>

  <el-container style="margin: 10px;">
    <n-card>
      大连市自然资源十分丰富。海域有海洋生物、底栖生物和浮游生物3大类，共209科414种。已发现矿产56种，其中非金属矿46种、金属矿8种、能源矿产2种，金刚石储量居亚洲之首、世界第十位。旅游资源别具特色。自然景观以海滨风光为主，主要有老虎滩、星海等海滨公园，付家庄、夏家河子等多处海滨浴场及旅顺口、金石滩、冰峪沟、滨海路等风景区，人文景观以都市建筑和近代战争遗址为主，著名的有旅顺中日甲午战争和日俄战争遗址、白玉山、万忠墓、旅顺监狱、东鸡冠山炮台。此外，还有极地馆、圣亚海洋世界等特色景点。加之四季分明的温和气候，大连已成为理想的旅游、度假和避暑胜地。2006年被评为中国最佳旅游城市。
    </n-card>
    <el-image :src="leftImage1" data-aos="fade-right"></el-image>
  </el-container>
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
      ],
      leftImage1: require('../assets/index/left_img_1.jpg')
    }
  }
}
</script>