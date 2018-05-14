<template>
  <div>
    <!--公共的头部 start-->
    <el-menu  class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" :disabled="true">成纺助手</el-menu-item>
      <el-menu-item index="2" @click="$router.push({path:'/'})">首页</el-menu-item>
      <el-menu-item index="3" @click="$router.push({path:'/flea'})">跳蚤</el-menu-item>
      <el-menu-item index="4" @click="$router.push({path:'/recruit'})">招领</el-menu-item>
      <el-menu-item index="5" @click="$router.push({path:'/down'})">下载APP</el-menu-item>
    </el-menu>
    <!--公共的头部 end-->
  </div>
</template>

<script>

  export default {
    name: "index",
    data()
    {
      return {

      }

    },
    created:function(){
      this.getDataList();
    },
    methods:{
      getDataList(){

      }
    }
  }
</script>

<style scoped>

</style>
