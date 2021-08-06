<template>
  <div class="Navigate">
    <!-- 左边 -->
    <div class="d1">
      <div class="mytitle">
        
          RrincilBlog
        
      </div>   
        <router-link to="/" class="frontPage">
          <el-button type="primary" @click="" class="frontPage">首页</el-button>
        </router-link>
      
    
        <router-link to="/404" class="community">         
          <el-button type="primary" @click="" >社区</el-button>
        </router-link>
       
    </div>

    <!-- 中间 -->
    <div class="d2">
        <!-- 搜索框 -->
      <input :value="mes"  placeholder="请输入想看的博文"/>     
      <el-button type="primary" icon="el-icon-search" class="search">搜索</el-button> 
        <!-- 头像   -->
      <i class="el-icon-s-custom" ></i>    
        
      
    </div>

    <!-- 右边 -->
    <div class="d3">
        <!-- 编辑博文 -->
      <el-button type="primary" @click="" class="createblog" icon="el-icon-edit">创作博文</el-button>
      <el-button type="primary" @click="" class="personalcenter">个人中心</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name:'Navigation',
    data() {
      return {
        mes:'',

      }
    },
  }
</script>

<style scoped>
.Navigate>div{
  width: 33.333%;
  height: 60px;
  float: left;
  /* background-color: rebeccapurple; */

}
.Navigate>.d3>el-button{
  width: 50%
}
.el-icon-s-custom{
  font-size: 40px;
  color: rgb(114, 133, 7);
  margin-top:11px;
  text-indent: 60px;
}
.el-icon-s-custom:hover{
  color: rgb(151, 175, 17);
}
button{
 margin-top:11px;
 padding: 5px;
 font-size: 15px;

  vertical-align:top;
}
button.el-icon-search{
  color: darkgoldenrod;
  background-color: chocolate;
}
button.search{
  background-color: rgb(240, 28, 28);
}
button.search:hover{
  background-color: rgb(221, 9, 9);
}
input{
  font-size: 20px;
  vertical-align:top;
  margin-top:18px;
  background-color: #e9eef3;
}
button.createblog{
  margin-left: 0px;
  padding-left: 0px;
}
button.personalcenter{
  margin-left: 100px;
}
.frontPage{
  width: 60px;
  height: 60px;
}
.frontPage button{
  width: 60px;
  height: 60px;
  padding: 0px;
  margin-left: 100px;
  color: black;
  background-color:white;
}
.community button{
  margin-left: 100px;
  width: 60px;
  color: black;
  background-color:white;
}
.mytitle{
  width: 10px;
  height: 60px;
  margin: 0px;
  color: rgb(245, 248, 46);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  text-shadow: 2px 2px 2px 2px forestgreen;
}
</style>