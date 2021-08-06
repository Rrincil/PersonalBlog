<template>
  <el-container>

    <el-main>
        <!-- 轮播图 -->
      <lunbo></lunbo>
    </el-main>

  </el-container>
</template>

<script>
import lunbo from './lunbo.vue'

  export default {
    name:'HeadTo',

    components:{
      lunbo,
      
    },
    data() {
      return {
        elicon:false,
      
      }
    },
    methods: {

    },
    mounted() {
      
    },
    created() {

    },
  }
</script>

<style scoped>
@import url(../../assets/css/HeadTo.css);
.el-main {
  padding: 0;
  position: relative;
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 600px;

}
.el-header {
  position: relative;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0; 
}

</style>