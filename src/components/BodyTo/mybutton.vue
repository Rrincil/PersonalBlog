<template>
  <div>

    <router-link :to="pathName[index].pathname"  >
      <el-button type="primary" v-html="pathName[index].mes" @click="textTo" class="pathName"></el-button> 
    </router-link>
    
    <router-link to="/Photoalbum"  >
      <el-button type="primary" @click="" class="Photoalbum">相册</el-button> 
    </router-link>

    <router-link to="/rootText"  >
      <el-button type="primary" @click="t" icon="el-icon-caret-left">返回主页</el-button> 
    </router-link>   

  </div>
</template>

<script>
  export default {
    name:'mybutton',
    data() {
      return {
        index:1,
        pathName:[
          {
            pathname:'/about',
            mes:'about',
          },
          {
            pathname:'/rootText',
            mes:'返回',
          },
          {
            pathname:'/firstText',
            mes:'/rootText'
          }
        ]
      }
    },
    methods: {
      textTo(){

        if(this.index=0){
          this.index=1
        }
        else if(this.index=1)
        {
          this.index=0
        }
      }      
    },
  }
</script>

<style scoped>
button.Photoalbum{
  background-color: rgb(204, 112, 250);
  border-color: gold;
  color: rgb(226, 230, 31)
}
button.Photoalbum:hover{
  background-color: rgb(214, 84, 231);
  color: rgb(251, 248, 30)
}
button.pathName{
  background-color: rgb(188, 133, 216);
  border-color: gold;
  color: rgb(226, 230, 31)
}
button.pathName:hover{
  background-color: rgb(177, 91, 189);
  color: rgb(251, 248, 30)
}
</style>