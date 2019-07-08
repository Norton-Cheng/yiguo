<template>
  <div style="background:#f7f9f8;">
    <div class="head">
      <div class="left">
        <ul class="left-content">
          <li style="cursor:default;color:#000">欢迎光临易果生鲜！</li>
          <li>
            <i>
              <img src="../../assets/imgs/head/xiaoxi.png" alt />
            </i>网警提示
          </li>
        </ul>
      </div>
      <div class="right">
        <ul class="right-content">
          <li>
            <router-link to="/login" v-if="uname==null">[登录]</router-link>
            <span v-else>{{"欢迎回来 "+uname+" !"}}</span>
          </li>
          <li>
            <router-link to="/register" v-if="uname==null">[注册]</router-link>
            <span v-else @click="loginOut">[退出]</span>
          </li>
          <li>
            <i>
              <img src="../../assets/imgs/head/yonghu.png" alt />
            </i>我的易果
          </li>
          <li>
            <i>
              <img src="../../assets/imgs/head/erweima.png" alt />
            </i>手机易果
          </li>
          <li>
            <i>
              <img src="../../assets/imgs/head/iconfontlipinicon.png" alt />
            </i>礼品卡绑定
          </li>
          <li>
            <i>
              <img src="../../assets/imgs/head/ren.png" alt />
            </i>礼品兑换券入口
          </li>
          <li>
            <i>
              <img src="../../assets/imgs/head/yingyezizhi.png" alt />
            </i>营业资质
          </li>
          <li>
            <i>
              <img src="../../assets/imgs/head/zp1.png" alt />
            </i>人才招聘
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap">
      <div class="serch">
        <div class="logo" style="position:relative;cursor:pointer" @click="jump" >
          <img src="../../assets/imgs/head/logo.png" alt />
                        <div class="menu">
        全部商品分类
        <div class="jiantou"></div>
        <div class="menuList">
          <ul>
            <li>
              <i>
                <img src="../../assets/imgs/index/jinkou.png" alt />
              </i>进口水果
            </li>
            <li>
              <i>
                <img src="../../assets/imgs/index/shuiguo.png" alt />
              </i>国产水果
            </li>
            <li>
              <i>
                <img src="../../assets/imgs/index/shipin-shengxian-jitui.png" alt />
              </i>精选肉类
            </li>
            <li>
              <i>
                <img src="../../assets/imgs/index/icon-test.png" alt />
              </i>海鲜水产
            </li>
            <li>
              <i>
                <img src="../../assets/imgs/index/niunai.png" alt />
              </i>乳品糕点
            </li>
            <li>
              <i>
                <img src="../../assets/imgs/index/qintao19.png" alt />
              </i>方便速食
            </li>
            <li>
              <i>
                <img src="../../assets/imgs/index/zahuopu.png" alt />
              </i>粮油杂货
            </li>
            <li>
              <i>
                <img src="../../assets/imgs/index/shucai.png" alt />
              </i>新鲜蔬菜
            </li>
          </ul>
        </div>
      </div>
        </div>
        <div class="inp">
          <input type="text" placeholder="输入商品名/编号/拼音" />
          <button class="serchBtn">搜索</button>
        </div>
        <div class="cart">
          <img src="../../assets/imgs/head/cart.png" alt style="width:35px;" />
          <strong>{{price}}</strong>
          <span>{{count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname:"",
    };
  },
  props:{
    price:{type:Number,default:0},
    count:{type:Number,default:0}
  },
  methods:{
    jump(){
      this.$router.push("/index");
    },
    loginOut(){
      sessionStorage.removeItem("uname");
      this.uname=sessionStorage.getItem("uname");
    }
  },
  mounted(){
    this.uname=sessionStorage.getItem("uname")
    console.log(this.uname);
  }
};
</script>

<style scoped>
.head {
  background-color: #f7f9f8;
  width: 1200px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.left-content,
.right-content {
  display: flex;
  justify-content: space-around;
  line-height: 30px;
  font-size: 12px;
}
.left-content li,
.right-content li {
  margin-right: 15px;
  cursor: pointer;
}
.left-content li:hover,
.right-content li:hover,
.right-content li a:hover {
  color: #008842;
}
.right-content a {
  color: #000;
}
.head i {
  display: inline-block;
  width: 22px;
  position: relative;
}
.head i img {
  position: absolute;
  width: 22px;
  top: -15px;
  right: 2px;
}
.wrap {
  background: #e0e0e0;
}
.serch {
  display: flex;
  width: 1200px;
  height: 78px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}
.inp input {
  display: inline-block !important;
  padding: 0;
  height: 28px;
  width: 447px;
  border: 1px solid #008842;
  outline: none;
  padding: 0 15px 0 15px;
  border-radius: 0;
  font-size: 12px;
}
.inp .serchBtn {
  height: 28px;
  border-radius: 0;
  color: #fff;
  background: #008842;
  border: 0;
  width: 81px;
}
.cart {
  position: relative;
  width: 172px;
  height: 42px;
  text-align: center;
  background: #fff;
  border: 1px solid #008842;
  cursor: pointer;
}
.cart strong {
  font-size: 25px;
  color: #008842;
  font-weight: bold;
  position: absolute;
  right:30px;
  top:13px;
}
.cart img{
  position: absolute;
  left:38px;
}
.cart span {
  position: absolute;
  left: 50px;
  top: 12px;
  font-size: 14px;
  color: #008842;
}
/* 导航栏 */
.menu {
  width: 180px;
  background-color: #008842;
  height: 38px;
  position:absolute ;
  z-index: 10;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 38px;
  top:67px;
}
.jiantou {
  width: 0px;
  height: 0px;
  border: 7px solid transparent;
  border-top-color: #fff;
  z-index: 12;
  display: inline-block;
  top: 15px;
  right: 15px;
  position: absolute;
}
.menu .menuList {
  width: 180px;
  height: 462px;
  background-color: #e7e7e6;
  position: absolute;
  z-index: 10;
  opacity: 0.9;
  display: none;
}
.menu:hover .menuList {
  display: block;
}
.menu .menuList ul li {
  color: #000;
  font: normal 14px/24px "Microsoft YaHei";
  height: 42px;
  padding: 9px 0 9px 15px;
  position: relative;
}
.menu .menuList ul li:hover {
  background: #fff;
}
.menu .menuList ul li i {
  position: absolute;
  left: 30px;
}
.menu .menuList ul li i img {
  width: 20px;
}
</style>
