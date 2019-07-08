<template>
  <div>
    <myHead :price="price" :count="myCount"></myHead>
    <!-- 导航 -->
    <div class="nav">
      <ul>
        <li>新品专区</li>
        <li>优质生活</li>
        <li>银行专区</li>
        <li>菜谱专栏</li>
      </ul>
    </div>
    <div class="min-nav">
      <span>首页</span>
      <span>></span>
      <span>粮油杂货</span>
      <span>></span>
      <span>米</span>
      <span>></span>
      <span>艾古有机小米370g</span>
    </div>
    <!-- 详情 -->
    <div class="my-content">
      <div class="left">
        <div class="max-img">
          <img :src="require('../assets/imgs/details/'+maxImgUrl)" alt />
        </div>
        <div class="min-img">
          <ul>
            <li v-for="(item,index) of minImgUrl" :key="index" @mouseover="chooseImg(item)">
              <img :src="require('../assets/imgs/details/'+item)" alt />
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <h2>艾谷有机小米370g</h2>
        <p>温润醇正，颗粒饱满</p>
        <div class="price">
          <div class="p-left">
            <div class="p">
              <span>价格：</span>
              <span style="color:red;font-size:24px;margin-left:15px;">￥14.5</span>
            </div>
            <p style="font-size:12px;">
              更多商品优惠，尽在易果生鲜APP
              <span style="color:#000;margin-left:80px;">手机下单购买</span>
              <span style="color:#11b57c;margin-left:25px;">立即扫码</span>
            </p>
          </div>
          <div class="p-right">
            <div class="erweima">
              <img src="../assets/imgs/details/erweima.jpg" alt style="width:73px" />
            </div>
          </div>
        </div>
        <div class="info">
          <div class="i-left">
            <div class="guige">
              <span style="margin-right:15px;">规格：</span>
              <div style="display:inline-block">
                <p style="border-bottom:none">￥14.5</p>
                <p>370g/袋</p>
              </div>
            </div>
            <div class="count">
                <span style="margin-right:15px;">数量：</span>
                <input type="text" style="width:60px;border-radius:0" v-model="count">
                <div class="btn">
                    <button @click="add">+</button>
                    <button @click="cut">-</button>
                </div>
                <button disabled style="position:relative;top:12px;left:30px;background-color:#757575;color:#fff;width:187px;height:45px;">暂时无货</button>
            </div>
          </div>
          <div class="shu"></div>
          <div class="i-right">
              <table style="width:300px;">
                  <tr>
                      <td>原产地：</td>
                      <td>辽宁</td>
                  </tr>
                  <tr>
                      <td>商品编号：</td>
                      <td>120004</td>
                  </tr>
                  <tr>
                      <td>品牌：</td>
                      <td>中盐</td>
                  </tr>
                  <tr>
                      <td>发货地：</td>
                      <td></td>
                  </tr>
              </table>
          </div>
        </div>
      </div>
    </div>
    <div class="pic">
        <div class="like">
            <p style="background:#008842;color:#fff;padding:5px;">猜你喜欢</p>
            <div class="l-content">
                <div>
                    <img src="../assets/imgs/details/9288713737184073_300.jpg" alt="" style="width:65px;border:1px solid #cde4c0;margin-left:5px;">
                </div>
                <div class="text">
                    <span>心中甜每日坚果750g(25g*30)</span><br>
                    <span style="color:red;font-size:14px;">￥138.00</span>
                    <span @click="cart" style="display:inline-block;width:66px;background:#008842;padding:0 3px;border-radius:5px;margin-left:8px;cursor:pointer;color:#fff">加入购物车</span>
                </div>
            </div>
        </div>
        <div class="p-pic">
            <h4 style="padding:5px;">商品详情</h4>
            <div class="p-img">
                <img src="../assets/imgs/details/513691890213463356_880x245.jpg" alt=""><img src="../assets/imgs/details/513691884011627753_880x759.jpg" alt=""><img src="../assets/imgs/details/513691884011758825_880x758.jpg" alt=""><img src="../assets/imgs/details/513691884011660521_880x758.jpg" alt=""><img src="../assets/imgs/details/513691884011693289_880x759.jpg" alt=""><img src="../assets/imgs/details/513691884011726057_880x758.jpg" alt=""><img src="../assets/imgs/details/513691872596960091_1125x414.jpg" alt="">
            </div>
        </div>
    </div>
    <server></server>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from "./common/footer.vue";
import server from "./common/serve.vue";
export default {
  data() {
    return {
      minImgUrl: [
        "9288701274366550_500.jpg",
        "9288701274333782_500.jpg",
        "9288701274268246_500.jpg"
      ],
      maxImgUrl: "9288701274366550_500.jpg",
      count:1,
      price:Number(0).toFixed(2),
      myCount:0
    };
  },
  methods: {
    chooseImg(url) {
      this.maxImgUrl = url;
    },
    add(){
        this.count++
    },
    cut(){
        if(this.count>0){
            this.count--
        }
    },
    cart(){
      this.myCount++;
      this.price=Number(this.myCount*138).toFixed(2);
    }
  },
  components: {
    myFooter,
    server
  }
};
</script>

<style>
/* 导航栏 */
.nav,
.min-nav,
.my-content,
.pic {
  margin: 0 auto;
  width: 1200px;
}
.nav {
  border-bottom: 1px solid #008842;
}
.nav ul {
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin-left: 200px;
}
.nav ul li {
  width: 115px;
  height: 37px;
  font-size: 15px;
  color: #444;
  line-height: 37px;
  font-weight: bold;
}
.nav ul li:hover {
  color: #008842;
  cursor: pointer;
}
.min-nav {
  height: 35px;
  line-height: 35px;
}
.min-nav span {
  margin-right: 8px;
}
/* 详情 */
.my-content {
  display: flex;
  justify-content: flex-start;
}
.my-content .left {
  margin-right: 10px;
}
.my-content .left .max-img img {
  width: 500px;
}
.my-content .left .min-img img {
  width: 85px;
}
.my-content .left .min-img ul li {
  float: left;
  margin-right: 12px;
}
.my-content .left .min-img ul li img:hover {
  border: 1px solid #008842;
}
.my-content .left .min-img ul::fater {
  content: "";
  display: block;
  clear: both;
}

.price {
  display: flex;
  justify-content: flex-start;
  background: #fff;
  width: 600px;
  height: 100px;
  padding: 10px 20px;
  margin-top: 50px;
}
.p-left .p {
  border-bottom: 1px solid #ddd;
  width: 423px;
}
.erweima {
  border: 3px solid #11b57c;
}
.info {
  width: 570px;
  display: flex;
  justify-content: flex-start;
  margin-top:30px;
}
.info .shu {
  height: 145px;
  border-left: 1px solid #aaa;
}
.info .guige{
    width:500px;
    height:65px;
}
.info .guige p{
    border:1px solid #11b57c;
    padding:3px;
    margin:0;
}
.count{
    margin-top:20px;
}
.btn{
    display: inline-block;
}
.btn button{
    width:19px;
    height: 20px;
    font-size: 8px;
    padding:4px;
    display: block;
    position: relative;
    top:12px;
    border-radius: 0;
}
.info .i-right{
    margin-left:30px;
}
.info .i-right td{
    width:80px;
    display: inline-block;
    color:#aaa;
}

/* 图片展示 */
.pic{
    display: flex;
    justify-content: space-between;
    padding:5px;
    margin-top:30px;
}
.pic .like{
    width:255px;
    border:1px solid #cde4c0;
    background:#fff;
    height: 150px;
}

.pic .p-pic{
    width:930px;
    border:1px solid #aaa;
    text-align: center;
}
.like .l-content{
    display: flex;
    justify-content: space-between;
    padding:5px;
}
.p-img img{
    width:880px;
    display: block;
}
</style>


