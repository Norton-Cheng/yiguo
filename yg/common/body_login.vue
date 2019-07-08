<template>
  <div class="wrap">
    <div class="login">
      <div class="left">
        <a href="javascript:void(0)">
          <img src="../../assets/imgs/login/9288691196862353.jpg" alt>
        </a>
      </div>
      <div class="right">
        <p>
          <span style="font-size:18px;color:#000;">欢迎登录</span>
          <span>
            还没有账号？
            <a href="javascript:void(0)" style="text-decoration:underline;color:#008842;" @click="toRegister">立即注册</a>
          </span>
        </p>
        <div :style="hid" class="err">
          <span style="margin-left:40px;color:#E4393C;line-height:26px">请输入正确的验证码</span>
        </div>
        <p>
          <i style="background-position:0px -120px;"></i>
          <input type="text" placeholder="请输入您的用户名" v-model="uname" @blur="t_uname" @keyup.enter="login()" autofocus>
          <img :src="ts_uname" width="25px" class="hint">
        </p>
        <p>
          <i style="background-position:0px -180px;"></i>
          <input type="password" placeholder="密码" v-model="upwd" @blur="t_upwd" @keyup.enter="login()">
          <img :src="ts_upwd" width="25px" class="hint">
        </p>
        <p style="display:block">
          <i style="background-position:0px -180px;color:#000;"></i>
          <input type="text" style="width:152px;" placeholder="验证码" v-model="test" @blur="t_test" @keyup.enter="login()">
          <test :identifyCode="identifyCode"></test>
          <a
            href="javascript:void(0)"
            style="position:absolute;left:215px;top:10px;"
            class="a1"
            @click="refreshCode"
          >换一张</a>
          <img
            :src="ts_test"
            width="25px"
            class="hint"
            style="position:absolute;left:265px;top:10px;"
          >
        </p>
        <p>
          <span>
            <input type="checkbox" id="auto">
            <label for="auto" style="margin-left:10px">自动登录</label>
          </span>
          <a href="javascript:void(0)" class="a1">忘记登录密码？</a>
        </p>
        <p>
          <button @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        </p>
        <p>第三方登录</p>
        <p>
          <a href="javascript:void(0)" @click="open">
            <u style="background-position:-60px -200px;"></u>
          </a>
          <a href="javascript:void(0)" @click="open">
            <u style="background-position:-160px -200px;"></u>
          </a>
          <a href="javascript:void(0)">
            <u style="background-position:-260px -200px;"></u>
          </a>
        </p>
      </div>
    </div>
    <div class="alert" :style="alert">
      <div style="position:absolute;right:10px;top:10px">
        <img src="../../assets/imgs/login/cha.png" @click="close">
      </div>
      <div>
        <p style="color:#565656">亲，第三方登录目前仅支持移动端，请拿起手机扫描以下二维码下载易果生鲜APP或关注微信服务号吧！</p>
        <div style="text-align:center">
          <img src="../../assets/imgs/login/code.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import test from "./identify.vue";
export default {
  data() {
    return {
      identifyCode: "dG45",
      uname: "",
      upwd: "",
      test: "",
      ts_uname: "",
      ts_upwd: "",
      ts_test: "",
      hid: "visibility: hidden",
      alert: "display:none"
    };
  },
  components: {
    test
  },
  methods: {
    toRegister(){
      this.$router.push("/register");
    },
    // 微信微博登录弹窗打开
    open() {
      this.alert = "";
    },
    // 微信微博登录弹窗关闭
    close() {
      this.alert = "display:none";
    },
    // 登录模块
    login() {
      if (this.uname == "" || this.upwd == "") {
        alert("用户名或密码不能为空");
      } else {
        if (this.test.toLowerCase() != this.identifyCode.toLowerCase()) {
          this.hid = "";
          this.refreshCode();
        } else {
          this.hid = "visibility: hidden;";
          var params = { uname: this.uname, upwd: this.upwd };
          this.axios.get("user/login", { params }).then(result => {
            if (result.data.code == 1) {
              alert("登录成功！3s后转跳到首页");
              sessionStorage.setItem("uname",this.uname);
              setTimeout(()=>{
                this.$router.push("/index");
              },3000);
            } else {
              alert("账号或密码错误!");
              this.refreshCode();
            }
          });
        }
      }
    },
    // 验证验证码
    t_test() {
      if (this.test.toLowerCase() == this.identifyCode.toLowerCase()) {
        this.ts_test = require("../../assets/imgs/login/suc.png");
        this.hid = "visibility: hidden";
      } else {
        this.ts_test = require("../../assets/imgs/login/fail.png");
      }
    },
    // 验证密码
    t_upwd() {
      if (/^[a-zA-Z0-9]{6,20}$/.test(this.upwd)) {
        this.ts_upwd = require("../../assets/imgs/login/suc.png");
      } else {
        this.ts_upwd = require("../../assets/imgs/login/fail.png");
      }
    },
    // 验证用户名
    t_uname() {
      if (/^[a-zA-Z0-9]{3,16}$/.test(this.uname)) {
        // console.log(this.uname)
        this.ts_uname = require("../../assets/imgs/login/suc.png");
      } else {
        this.ts_uname = require("../../assets/imgs/login/fail.png");
      }
    },
    // 重置验证码
    refreshCode() {
      function randomstring(L) {
        var s = "";
        var randomchar = function() {
          var n = Math.floor(Math.random() * 62);
          if (n < 10) return n; //1-10
          if (n < 36) return String.fromCharCode(n + 55); //A-Z
          return String.fromCharCode(n + 61); //a-z
        };
        while (s.length < L) s += randomchar();
        return s;
      }
      this.identifyCode = randomstring(4);
    }
  },
  watch:{
    uname(){
      this.t_uname();
    },
    upwd(){
      this.t_upwd();
    },
    test(){
      this.t_test();
    }
  }
};
</script>

<style scoped>
.wrap {
  background-color: #fff;
  height: 520px;
  width: 100%;
}

.login {
  width: 1200px;
  height: 450px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.left,
.right {
  margin-top: 40px;
}

.right {
  width: 350px;
  height: 430px;
  border: 1px solid #e3e6e0;
  padding: 20px;
  margin-right: 110px;
}

.right p {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right i + input {
  width: 250px;
  height: 40px;
  padding-left: 50px;
  box-sizing: border-box;
  color: #000;
  font-size: 14px;
}

.right i + input:focus{
  outline:#0bf solid 1px;
}

.right i {
  position: absolute;
  top: 1px;
  left: 1px;
  display: inline-block;
  height: 40px;
  width: 38px;
  background-image: url(../../assets/imgs/login/bg_input.png);
  background-repeat: no-repeat;
  border-right: 1px solid #e3e6e0;
}
.right u {
  display: block;
  width: 88px;
  height: 20px;
  background-image: url(../../assets/imgs/login/bg_login.png);
}
.right button {
  width: 100%;
  height: 50px;
  background: #008842;
  color: #fff;
  font-size: 18px;
}
canvas#c1 {
  background: #008842;
  position: absolute;
}

.right .a1 {
  color: #878787;
}
.right .a1:hover {
  color: #008842;
}
.hint {
  margin-right: 20px;
  margin-bottom: 15px;
}
.right .err {
  width: 250px;
  height: 26px;
  border: 1px solid #e4393c;
  margin-bottom: 10px;
  background-color: #ffebeb;
}

.alert {
  width: 502px;
  height: 342px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 200px;
  margin: 0 auto;
  border: 1px solid #e3e6e0;
  padding: 45px;
}
</style>
