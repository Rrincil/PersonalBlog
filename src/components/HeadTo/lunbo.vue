<template>
  <el-carousel :interval="4000" type="card" height="420px" >
    <el-carousel-item v-for="item in srcArrys" :key="item" >
      <h3 class="medium">
        <img :src="item.srcimg" @mouseenter="xian(item)" @mouseleave="xian(item)" >
         
        <div class="d1" v-if="elicon" >
          {{item.name}}
        
        </div>
      </h3>
    </el-carousel-item>   
  </el-carousel>

</template>

<script>
  export default {
    name:'lunbo',
    
    data() {
      return {
      elicon:false,
      srcArrys:[
      {
        srcimg:require('../../assets/img/1.1.png'),
        name:'生命周期1'
      },
      {
        srcimg:require('../../assets/img/1.2.png'),
        name:'生命周期2'
      },
      {
        srcimg:require('../../assets/img/1.3.png'),
        name:'生命周期3'
      },
      {
        srcimg:require('../../assets/img/1.4.png'),
        name:'生命周期4'
      },
      {
        srcimg:require('../../assets/img/1.5.png'),
        name:'生命周期5'
      },
      {
        srcimg:require('../../assets/img/2.jpg'),
        name:'程序猿喝咖啡'

      },
      {
        srcimg:require('../../assets/img/4.jpg'),
        name:'当你终于刚搞定一个Bug'
      },
      {
        srcimg:require('../../assets/img/5.jpg'),
        name:'然后发现了更多Bug'

      },
      {
        srcimg:require('../../assets/img/3.jpg'),
        name:'求求你放我回去写代码吧'
      },
      ]
      }
    },
    methods: {
      xian(item){
        
          this.elicon=!this.elicon
         
      }
    }
  }
</script>

<style scoped>
  .el-carousel{
    position: relative;
    padding-top: 20px;
    /* background-image: url('../../assets/img/1.jpg'); */
    background-size:cover; 
    background-position: center center;
  }
  .el-carousel__item h3 {
    /* color: #475669;
    font-size: 14px; */
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .d1{
  line-height: 40px;
  padding: 0;
  margin: 0;
  position:absolute;
  background-color: antiquewhite;
  bottom: 0px;
  left: 0;
  text-align: center;
  
  font-size: 20px;
  color: green;
  width: 100%;
  opacity: 0.8;
  height: 50px;
  }
.el-icon-caret-left
{
  color: gold;
  width: 50px;
  height: 50%;
  position:absolute;
  left: 50px;
  font-size: 50px;
  top: 50%
}
.el-icon-caret-right
{
  /* background-color: red; */
  color: gold;
  width: 50px;
  height: 50%;
  position:absolute;
  right: 50px;
  font-size: 50px;
  top: 50%
}
h3.medium>img{
  width: 100%;
  height: 100%;
}
</style>