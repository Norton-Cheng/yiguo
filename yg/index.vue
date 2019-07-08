<template>
  <div>
    <myHead></myHead>
    <!-- 轮播图 -->
    <div class="carousel" style="cursor:pointer">
      <el-carousel :interval="2000" arrow="always" height="500px">
        <el-carousel-item v-for="(item,index) of bannerUrl" :key="index">
          <img :src="require('../assets/imgs/index/'+item)" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 广告区 -->
    <div class="adItems">
      <div class="new">
        <img src="../assets/imgs/index/new.jpg" alt />
        <div class="content">
          <h3>新品专区</h3>
          <p>探访源头产地 甄选当令时鲜</p>
        </div>
      </div>
      <div class="baby">
        <img src="../assets/imgs/index/baby.jpg" alt />
        <div class="content">
          <h3>母婴专场</h3>
          <p>从妈咪孕味到宝贝食尚 我们用心 让您安心</p>
        </div>
      </div>
      <div class="bank">
        <img src="../assets/imgs/index/bank.jpg" alt />
        <div class="content">
          <h3>银行卡专区</h3>
          <p>银行卡专项 超值购实惠</p>
        </div>
      </div>
      <div class="food">
        <img src="../assets/imgs/index/food.jpg" alt />
        <div class="content">
          <h3>菜谱专区</h3>
          <p>大厨私房菜 餐桌新食尚</p>
        </div>
      </div>
    </div>
    <!-- 粮油区 -->
    <div class="liangyou" style="width:1200px;margin:0 auto;margin-top:30px;">
      <div class="title">
        <div class="right">
            <img src="../assets/imgs/index/louti.png" alt="" style="vertical-align: bottom;">
            <strong style="font-size:20px;color:#b84f00;font-weight:bold;margin-left:10px;">粮油杂货</strong>
        </div>
        <div class="left">
            <span>有机面食</span>|
            <span>干货</span>|
            <span>果干零食</span>
        </div>
      </div>
      <div class="ly-content">
          <div class="agyjzl" @click="jump"><img src="../assets/imgs/index/9288696309489930.jpg" alt=""></div>
          <div class="yjms" style="left:275px;"><img src="../assets/imgs/index/9288686655545160.jpg" alt=""></div>
          <div class="cftl" style="left:510px;"><img src="../assets/imgs/index/9288692428349520.jpg" alt=""></div>
          <div class="gh" style="left:510px;top:192px;"><img src="../assets/imgs/index/9288685772775229.jpg" alt=""></div>
          <div class="tj" style="right:0;"><img src="../assets/imgs/index/9288696310341898.jpg" alt=""></div>
          <div class="pinpai" style="width:677px;height:89px;left:275px;top:383px;padding:18px 20px;">
              <img src="../assets/imgs/index/9288685535633211.jpg" alt="">
          </div>
      </div>
    </div>
    <!-- 方便速食 -->
    <div class="liangyou" style="width:1200px;margin:0 auto;margin-top:30px;">
      <div class="title">
        <div class="right">
            <img src="../assets/imgs/index/louti.png" alt="" style="vertical-align: bottom;">
            <strong style="font-size:20px;color:#b84f00;font-weight:bold;margin-left:10px;">方便速食</strong>
        </div>
        <div class="left">
            <span>避风塘</span>|
            <span>湾仔码头</span>|
            <span>龙凤</span>
        </div>
      </div>
      <div class="ly-content">
          <div class="agyjzl"><img src="../assets/imgs/index/9288695082197207.jpg" alt=""></div>
          <div class="yjms" style="left:275px;"><img src="../assets/imgs/index/9288685775200061.jpg" alt=""></div>
          <div class="cftl" style="left:510px;"><img src="../assets/imgs/index/9288692428349520.jpg" alt=""></div>
          <div class="gh" style="left:510px;top:192px;"><img src="../assets/imgs/index/9288685772775229.jpg" alt=""></div>
          <div class="tj" style="right:0;"><img src="../assets/imgs/index/9288685775200061.jpg" alt=""></div>
          <div class="pinpai" style="width:677px;height:89px;left:275px;top:383px;padding:18px 20px;">
              <img src="../assets/imgs/index/9288685537206075.jpg" alt="">
          </div>
      </div>
    </div>
    <server></server>
    <my-footer></my-footer>
  </div>
</template>


<script>
import myFooter from "./common/footer.vue"
import server from "./common/serve"
export default {
  data() {
    return {
      bannerUrl: ["banner1.jpg", "banner2.jpg"]
    };
  },
  components:{
      myFooter,
      server
  },
  methods:{
    jump(){
      this.$router.push("/details")
    }
  }
};
</script>

<style>

/* 广告区 */
.adItems {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  margin-top:50px;
}
.adItems .new:hover,
.adItems .baby:hover,
.adItems .bank:hover,
.adItems .food:hover {
  box-shadow: 0px 0px 7px #444;
  cursor: pointer;
}
.new,
.baby,
.bank,
.food {
  position: relative;
}
.content {
  position: absolute;
  bottom: 20px;
  background: #fff;
  width: 270px;
  left: 10px;
  text-align: center;
  opacity: 0.8;
  color: #575757;
}
.title{
    display:flex;
    justify-content: space-between;
}
.title .left span{
    padding:0 7px;
    cursor: pointer;
}
.title .left span:hover{
    text-decoration:underline;
}
/* 粮油 */
.liangyou{
    height:550px;
}
.ly-content{
    position: relative;
    top:15px;
}
.ly-content div[class]{
    position: absolute;
    cursor: pointer;
    border:1px solid #d5d5d5;
    background:#fff;
    box-sizing: border-box;
}

</style>

