<template>
  <div>
    <el-container> 
      
      <el-aside :width="asidewith"  @mouseout="dian1" @mouseover="dian1" v-if="elaside">

           <!-- 图标 -->
          <i class="el-icon-arrow-left" v-show="elicon1" @click="pullup"></i>
            <!-- 级联器 -->
          <Cascader></Cascader>
            <!-- 限制滚动 -->
          <Scroll>hh</Scroll>
            <!-- 按钮 -->
            <mybutton></mybutton>                    
      </el-aside>
         

      <el-main @mouseout="dian" @mouseover="dian">
         <!-- 图标 -->
        <i class="el-icon-arrow-right" v-show="elicon" @click="pullin" ></i>
         <!-- 内容 -->
        <!-- <rootText></rootText> -->
          <!-- <router-view  tag="first"></router-view>  -->
          <!-- 显示about --> 
        <router-view  tag="li"></router-view> 
      </el-main>
        
    </el-container>
  </div>
</template>

<script>
import Cascader from './Cascader.vue'
import Scroll from './Scroll.vue'
import mybutton from './mybutton.vue'
import Photoalbum from './Photoalbum.vue'
import rootText from './rootText'
export default {
  name: 'BodyTo',
  components: {
    rootText,
    Cascader,
    Scroll,
    Photoalbum,
    mybutton
  },
  data() {
    return {
      asidewith:'200px',
      elicon:false,
      elicon1:false,
      elaside:true,

    }
  },
  methods: {
    pullup(){
      // this.asidewith=0
    this.elaside=!this.elaside

    },
    pullin(){

    this.elaside=!this.elaside

    },
    dian(){
      if(this.elaside==false)
        {
          this.elicon=!this.elicon
        }
        else{
          this.elicon=false
          this.elicon1=false
        }
    },  
    dian1(){
        this.elicon1=!this.elicon1
    },  

  },

}
</script>

<style scoped>
/* @import url(../../assets/css/BodyTo.css); */
.el-icon-right,.el-icon-back{
  /* width: 100%; */
  position:absolute;
  
  top: 300px;
}
  .el-icon-arrow-right
{
  /* background-color: red; */
  color: rgb(11, 18, 2);
  width: 50px;
  height: 50%;
  position:absolute;
  left: 0px;
  font-size: 30px;
  top: 50%
}
  .el-icon-arrow-left
{
  color: rgb(42, 69, 3);
  width: 50px;
  height: 30px;
  position:absolute;
  right:0px;
  font-size: 30px;
  top: 50%
}

.el-aside {
  position: relative;
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 35px;
  height: 800px;
}

.el-main {
  padding: 0;
  position: relative;
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 800px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>