
<template>
<div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
  export default {
    name:'Scroll',
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 200
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

<style>
.infinite-list-wrapper{
  width: 100%;
  height: 280px;
  margin-bottom: 170px;
}
/* .list{
  width: 100%;
  height: 200px;
} */
.list-item{
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  background-color: #9ebcff;
  color: antiquewhite;

}
.el-aside{
    line-height: 0px;
}
</style>
