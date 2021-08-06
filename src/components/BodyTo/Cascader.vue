
<template>
<div>
  <p>请选择想看的博文</p>
<el-cascader :options="options" :show-all-levels="false" aria-placeholder="选择"></el-cascader>
</div>

</template>

<script>
  export default {
    name:'Cascader',
    data() {
      return {
        options: [
          // 基础
        {
          value: 'html',
          label: 'html',
          disabled: true,
          children: [{
            value: 'htmlmd',
            label: 'html.md',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }]
        },
        {
          value: 'css',
          label: 'css',
          children: [{
            value: 'cssmd',
            label: 'css.md'
          }]
        },
          //  前端
        {
          value: 'qianduan',
          label: '前端',
          children: [{
            value: 'basic',
            label: '基础',
            children: [{
              value: 'htmlmd',
              label: 'html'
            }, {
              value: 'css',
              label: 'css'
            }, {
              value: 'js',
              label: 'js'
            }]
          }, {
            value: 'frame',
            label: '框架',
            children: [{
              value: 'Vue',
              label: 'Vue',
              children:[{
              value: 'vuemd',
              label: 'vue.md'
              }]
            },{
            value: 'Bootstrap',
            label: 'Bootstrap', 
            disabled:true         
            },{
            value: 'React',
            label: 'React',
            children: [{
              value: 'Reactmd',
              label: 'React.md'
            }]
          }]
          }]
        },
          // 主流前端UI框架
        {
          value: 'uiframe',
          label: '主流前端UI框架',
          children: [{
            value: 'Elementui',
            label: 'Element UI',
            children:[{
              value: 'Elementuimd',
              label: 'Elementui.md',
            }]
          }, {
            value: 'youzhan',
            label: '有赞UI'
          },{
            value:'Frozenui',
            label:'FrozenUI'
          },{
            value:'MUI',
            label:'MUI'
          },{
            value:'Pure',
            label:'Pure'
          },{
            value:'AUI',
            label:'AUI'
          }
          ]
        },
          // 后端
        {
          value: 'houduan',
          label: '后端',
          children: [{
            value: 'java',
            label: 'Java',
          },
          {
            value: 'c',
            label: 'C',
          },
          {
            value: 'c++',
            label: 'C++',
          },
          {
            value: 'pathon',
            label: 'Pathon',
          }]
        }


        ]
      };
    }
  };
</script>

<style>
.el-cascader{
  margin-top: 0px;
}
p{
  color: rgb(103, 59, 114);
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}
</style>
