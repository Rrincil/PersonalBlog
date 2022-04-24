<template>
  <div :style="{width:fullHeight+'px'}">
  <!-- <img src="./assets/logo.png"> -->
   <!-- <home></home> -->
     <el-container>

    <el-header>
      <Navigation></Navigation>
    </el-header>

    </el-container>
    <router-link to="/home" tag="firstly"></router-link>
    <router-view ></router-view>    
  </div>
</template>

<script>
import Navigation from './components/Navigate/Navigation.vue'
import HeadTo from './components/HeadTo/HeadTo.vue'
import About from './views/About'
import BodyTo from './components/BodyTo/BodyTo.vue'

export default {
  name: 'App',
  components: {
    About,
    HeadTo,
    BodyTo,
    Navigation
  },
  data() {
    return {
      fullHeight: null,

    }
  },
  methods: {
    get_bodyHeight () {//动态获取浏览器高度
      this.fullHeight = window.outerWidth
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        this.fullHeight = 1080
      console.log(this.fullHeight);
      }
    },
  },
  mounted(){
    this.get_bodyHeight()
  }
}
</script>

<style scoped>
.el-header {
  position: relative;
  background-color: #fdfdfc;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0; 
}
</style>
