<template>
  <!-- 跳蚤市场 -->
  <div>
    <!--引入公共的头部 -->
    <WebHeader></WebHeader>
    <!-- 主内容区 start -->
    <div class="main-content" style="width:100%;margin-left:100px">
      <el-row :gutter="8">
        <el-col :span="6" v-for="(buy, index) in buys" :key="index"  style="margin:20px 20px 20px 20px">
          <el-card :body-style="{ padding: '0px' }" shadow="always">
            <a href="javascript:;"><img :src="ip+buy.img" class="image">
            <div style="padding: 14px;">
              <span>{{buy.title}}</span>
              <div class="bottom clearfix">
                <time class="time">¥：{{buy.price}} 元</time>
                <el-button type="text" class="button">详细信息</el-button>
              </div>
            </div>
            </a>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 主内容区 end -->
    <!-- 分页插件 start -->
    <div class="block" style="text-align:center">

    </div>
    <!-- 分页插件 end -->

    <div class="block">
      <!--引入公共的头部-->
      <WebFooter></WebFooter>
    </div>
  </div>
</template>

<script>
  import WebHeader from '../header';
  import WebFooter from '../footer';
  export default {
    components:{
        WebHeader,
        WebFooter

    },
    data()
    {
      return {
        ip:'http://47.106.85.0',
        buys:''
      }

    },
    created(){
      this.getdata()

    },
    methods:{
      getdata(){
        let page={
          pageSize: 10,
          pageNum :1
        }
        this.myAjax.buyPage(page)
          .then(res=>{
            console.log(res)
            this.buys=res.data
          })
      }
    },
    mounted(){
      console.log(this.buys)

    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 320px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
  .el-col-offset-1{
    margin-left: 0;
  }
  .el-pagination{
    text-align: center;
  }
  .block{
    margin-top: 20px;
  }
</style>
