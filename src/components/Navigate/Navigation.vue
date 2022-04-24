<template>
  <div class="Navigate">
    <!-- 左边 -->
    <div class="d1">
      <div class="mytitle">
        RrincilBlog     
      </div>   
      <router-link to="/" class="frontPage">
        <el-button type="primary" @click="" >首页</el-button>
      </router-link>
    
  
      <router-link to="/404" class="community">         
        <el-button type="primary" @click="" >社区</el-button>
      </router-link>
       
    </div>

    <!-- 中间 -->
    <div class="d2">
        <!-- 搜索框 -->
      <input :value="mes"  placeholder="请输入想看的博文"/> <i class="el-icon-search"></i>    
      <!-- <el-button type="primary" icon="el-icon-search" class="search">搜索</el-button>  -->
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
.Navigate{
  width: 100%;
  height: auto;
  /* background-color: rgb(222, 13, 250); */
}
.d1{
  width: 30%;
  height: 100%;
  float: left;
  background-color: rgb(222, 13, 250);
}
.d2{
  width: 40%;
  height: 100%;
  float: left;
  /* background-color: rgb(222, 13, 250); */
}
.d3{
  width: 30%;
  height: 100%;
  float: left;
  /* background-color: rgb(222, 13, 250); */
}

.el-icon-s-custom{
  font-size: 40px;
  color: rgb(180, 63, 171);
  margin-top:11px;
  text-indent: 60px;
}
.el-icon-s-custom:hover{
  color: rgb(131, 90, 134);
}

button.el-icon-search{
  color: darkgoldenrod;
  background-color: chocolate;
}
:deep(.el-icon-search:before){
  margin-top: 1px;
  margin-bottom: 20px;
  line-height: 1px;
}
/* button.search{
  width: 80px;
  height: 10px;
  color: black;
  line-height: 10px;
  background-color:rgb(233, 46, 217);
  
}
button.search:hover{
  background-color: rgb(133, 68, 153);
} */
input{
  font-size: 20px;
  vertical-align:top;
  margin-top:18px;
  margin-left: 0%;
  padding: 0%;
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
  width: 40%;
  float: left;
  height: 60px;
}
.frontPage button{
  margin-left: 10%;
  width: 60px;
  color: black;
  background-color:white;
}
.community{
  width: 30%;
  height: 100%;
  float: left;
}
.community button{
  margin-left: 10%;
  width: 60px;
  color: black;
  background-color:white;
}
.mytitle{
  
  width: 30%;
  height: 60px;
  margin: 0px;
  float: left;
  color: rgb(245, 248, 46);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  text-shadow: 2px 2px 2px 2px forestgreen;
}
</style>