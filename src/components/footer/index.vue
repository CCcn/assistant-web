<template>
  <div class="footContainer">
    <el-row>
      <el-col :span="8" :offset="8">
        <div class="grid-content bg-purple icon">
          <img src="@/assets/weixin.png" alt="">
          <img src="@/assets/weibo.png" alt="">
          <p style="margin-top:20px">Powered by 成纺助手网 © 2018-2019</p>
          <p style="margin-top:10px">蜀ICP备15020398号 </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  .footContainer {
    background-color: #eee;
    height: 150px;
    
  }
.icon{
  text-align: center;
  margin-top:20px;
}
  .icon img{
    width: 50px;
  }
  p{
    font-size: 12px;
  }
</style>
