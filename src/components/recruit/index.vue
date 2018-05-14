<template>
  <!-- 跳蚤市场 -->
  <div>
    <!--引入公共的头部 -->
    <WebHeader></WebHeader>
    <!-- 主内容区 start -->
    <div class="main-content" style="width:100%;margin-left:100px">
      <el-row :gutter="8">
        <el-col :span="6" v-for="(o, index) in finds" :key="index" :offset="index > 0 ? 1 : 0" style="margin:20px 20px 20px 20px">
          <el-card :body-style="{ padding: '0px' }" shadow="always">
            <a href="javascript:;"><img :src="ip+o.img" class="image">
            <div style="padding: 14px;">
              <span>掉落物品:{{o.title}}</span>
              <div class="bottom clearfix">
                <time class="time">掉落日期:{{o.date}}</time>
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
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
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
    name: "index",
    components:{
        WebHeader,
        WebFooter

    },
    data(){
      return {
        finds:'',
        ip:'http://47.106.85.0'
      }
    },
    created(){
    this.getdata()
    },
    mounted(){

    },
    methods:{
      getdata(){
        let data={
          pageSize: 10,
          pageNum :1
        }
        this.myAjax.findPage(data)
          .then(res=>{
            console.log(res)
            this.finds=res.data
          })
          .catch(err=>{
            throw err
          })
      }
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
