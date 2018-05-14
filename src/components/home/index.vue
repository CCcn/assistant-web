<template>
  <div>
    <el-container>
      <el-header class="header" style="padding:0">
        <!--引入公共头部组件-->
        <WebIndex></WebIndex>
      </el-header>
      <el-main class="main">
        <!--轮播 start-->
        <el-carousel :interval="4000" type="card" height="400px" style="margin-top:80px;margin-bottom:80px">
          <el-carousel-item v-for="(item,index) in banner" :key="index">
            <div>
                <a :href="item.url" target="_blank">
                <img :src='ip+item.img' style="max-width:750px;">
                <p style="position:absolute;bottom:10px;left:10px;color:#fff">{{item.tip}}</p>
              </a>
            </div>
          </el-carousel-item>
        </el-carousel>
        <!--轮播 end-->
      </el-main>
      <!--表白墙 start-->
      <div class="block">
        <span class="demonstration">表白墙</span>
        <el-carousel height="400px" arrow="never">
          <el-carousel-item v-for="(item,index) in loves" :key="index">
            <h2 style="text-align:center;margin-top:40px">{{item.title}}</h2>
            <h3 style="text-align:center">{{ item.content }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--表白墙 end-->
      <!--失物招领 start-->
      <div class="block">
        <span class="demonstration">失物招领</span>
        <el-carousel height="400px">
          <el-carousel-item v-for="(item,index) in finds" :key="index">
            <div>
              <img :src="ip+item.img" style="position:absolute;z-index:1;max-width:1500px;">
              <div style="position:absolute;z-index:100;text-align:center;width:100%">
                <h2 style="text-align:center;margin-top:40px;margin-bottom:30px">{{ item.title }}</h2>
                <p>{{item.date}}</p>
                <p style="margin-top:80px">{{item.description}}</p>
              </div>
            </div>

          </el-carousel-item>
        </el-carousel>
      </div>
      <!--失物招领 end-->
      <!--跳蚤 start-->
      <div class="block">
        <span class="demonstration">跳蚤市场</span>
        <el-carousel height="300px" arrow="never">
          <el-carousel-item v-for="(item,index) in buys" :key="index">
            <div style="display:flex">
              <div class="img-box" style="flex:1">
                <img :src="ip+'/'+item.img" style="width:100%;height:300px">
              </div>
              <div style="flex:1" class="description">
                <h2>{{ item.title }}</h2>
                <p>价格:￥{{item.price}}</p>
                <p>联系信息</p>
                <div class="contacts-info">
                  <p>{{item.owner}}</p>
                </div>
                <p>{{item.description}}</p>
              </div>
            </div>

          </el-carousel-item>
        </el-carousel>
      </div>
      <!--跳蚤 end-->
      <WebFooter></WebFooter>
    </el-container>

  </div>

</template>

<script>
  import WebIndex from '../header';
  import WebFooter from '../footer';

  export default {
    //加载组件
    components: {
      WebIndex,
      WebFooter
    },
    data() {
      return {
        ip: 'http://47.106.85.0',
        banner: '',
        buys: '',
        finds: '',
        loves: ''
      }
    },
    methods: {
      getdata() {
        this.myAjax.index()
          .then(res => {
            console.log(res)
            this.banner = res.banner;
            this.buys = res.buys;
            this.finds = res.finds;
            this.loves = res.loves
          })
      }
    },
    mounted() {
      this.getdata()
    }
  }
</script>

<style scoped>
  .header {
    background-color: #ccc;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .demonstration {
    margin-top: 10px;
    margin-bottom: 15px;
    display: block;
    font-size: 20px
  }

  .block {
    margin-top: 10px;
    margin-bottom: 25px;
  }

  .description {
    background-color: #fff;
    padding-top: 20px;
  }

  .description h2 {
    text-align: center;
  }

  .description > p {
    margin-left: 30px;
    margin-top: 20px;
  }

  .contacts-info {
    margin-left: 45px;
    margin-top: 8px;

  }

  .contacts-info > p {
    margin-top: 2px;
  }
</style>
