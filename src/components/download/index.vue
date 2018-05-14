<template>
  <!-- 下载APP页面 -->
  <div>
    <!--引入公共的头部 -->
    <WebHeader></WebHeader> 
    <!-- 主内容区 start -->
    <div class="main-content">
        <img src="../../assets/images/QR_Code.png" alt="">
    </div>
    <!-- 主内容区 end -->

    <!--引入公共的头部-->
    <WebFooter></WebFooter>
  </div>
</template>

<script>
  import WebHeader from '../header';
  import WebFooter from '../footer';
  export default {
    name: "index",
    components:{
        WebHeader,
        WebFooter
    },
    data()
    {
      return {
        
      }

    },
    created:function(){

    },
    methods:{

    }
  }
</script>

<style scoped>
.main-content{
  width: 400px;
  height: 400px;
  background-color: #f8f8f8;
  margin: 25px auto ;
  padding:25px;
  border-radius: 8px;
  box-shadow: #666 0 0 10px;
}
.main-content img{
  display: block;
  margin:0 auto;
  margin-top:25%; 
}
</style>
