<template>
  <!-- <img src="./assets/logo.png"> -->
   <!-- <home></home> -->
     <el-container>

    <el-header>
      <Navigation></Navigation>
    </el-header>

    </el-container>
 <!-- <router-link to="/home" tag="firstly"></router-link> -->
 <router-view ></router-view>
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


    }
  },
  methods: {

  },

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
