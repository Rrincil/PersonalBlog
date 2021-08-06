<template>
  <div>
    <ul>
      <li v-for="item in srcArrys">
        <img :src='item.srcimg'/>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Photoalbum',
    data() {
      return {
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
  }
</script>

<style scoped>

</style>