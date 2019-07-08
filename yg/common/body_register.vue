<template>
  <div style="padding-top:30px;">
    <div class="wrap">
      <p class="login">
        我已注册，现在就
        <a href="javascript:;" @click="toLogin">登录</a>
      </p>
      <div class="right">
        <p>
          <span>图形验证码</span>
          <input type="text" style="width:147px;" placeholder="图形验证码" v-model="test" @blur="t_test" autofocus>
          <test style="display:inline-block;left:250px" :identifyCode="identifyCode"></test>
          <a href="javascript:;" id="refresh" @click="refreshCode">换一张</a>
          <img :src="ts_test" class="hint">
        </p>
        <p>
          <span>用户名</span>
          <input type="text" placeholder="3-16位，字母或数字组成" v-model="uname" @blur="t_uname">
          <img :src="ts_uname" class="hint"><strong>{{info}}</strong>
        </p>
        <p>
          <span>设置密码</span>
          <input type="password" placeholder="6-20位字母和数字" v-model="upwd" @blur="t_upwd">
          <img :src="ts_upwd" class="hint">
        </p>
        <p>
          <span>确认密码</span>
          <input type="password" placeholder="再次输入密码" v-model="affirmUpwd" @blur="t_affirmUpwd">
          <img :src="ts_affirmUpwd" class="hint">
        </p>
        <p>
          <input
            type="checkbox"
            id="agree"
            style="margin-left:80px;margin-right:5px;"
            v-model="isAgree"
            @change="agree"
          >
          <label for="agree" style="color:#444;font-size:14px;">我已阅读并同意</label>
          <a href="javascript:;" style="color:#008842">《易果服务协议》</a>
          <a href="javascript:;" style="color:#008842">《隐私政策》</a>
          <label for="agree">
            <img :src="ag_img" class="hint" style="top:0px;">
          </label>
        </p>
        <p>
          <a href="javascript:;" id="register" :style="canRegister" @click="register">立即注册</a>
        </p>
      </div>
      <div class="left">
        <div class="img">
          <img src="../../assets/imgs/login/register.png">
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
      identifyCode: "hg45",
      test: "",
      ts_test: "",
      uname: "",
      ts_uname: "",
      upwd: "",
      ts_upwd: "",
      isAgree: false,
      canRegister: "background-color:#808080",
      ag_img: "",
      affirmUpwd: "",
      ts_affirmUpwd: "",
      info:"",
    };
  },
  components: {
    test
  },
  methods: {
    toLogin(){
        this.$router.push("/login");
    },
    //   注册
    register() {
      if (this.isAgree == false) {
        this.ag_img = require("../../assets/imgs/login/fail.png");
      }else if(this.isAgree==true){
          this.t_affirmUpwd();
          this.t_test();
          this.t_uname();
          this.t_upwd();
          console.log(this.can_register);
          if(this.ts_affirmUpwd==require("../../assets/imgs/login/suc.png")&&
          this.ts_test==require("../../assets/imgs/login/suc.png")&&
          this.ts_uname==require("../../assets/imgs/login/suc.png")&&
          this.ts_upwd==require("../../assets/imgs/login/suc.png")){
              var params={uname:this.uname,upwd:this.upwd};
              this.axios.get("user/register",{params}).then(result=>{
                  if(result.data.code==1){
                      alert("注册成功");
                      this.$router.push("/login");
                  }
              });
          }
      }
    },
    // 确认密码
    t_affirmUpwd() {
      if (this.upwd == "") {
        this.ts_affirmUpwd = "";
      } else {
        if (this.affirmUpwd == this.upwd) {
          this.ts_affirmUpwd = require("../../assets/imgs/login/suc.png");
        }else{
            this.ts_affirmUpwd = require("../../assets/imgs/login/fail.png");
        }
      }
    },
    //   是否同意协议
    agree() {
      if (this.isAgree == true) {
        this.canRegister = "";
        this.ag_img = "";
      } else {
        this.canRegister = "background-color:#808080";
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
    },
    // 验证验证码
    t_test() {
      if (this.test.toLowerCase() == this.identifyCode.toLowerCase()) {
        this.ts_test = require("../../assets/imgs/login/suc.png");
      } else {
        this.ts_test = require("../../assets/imgs/login/fail.png");
      }
    },
    // 验证用户名
    t_uname() {
      if (/^[a-zA-Z0-9]{3,16}$/.test(this.uname)) {
        // console.log(this.uname)
        var params={uname:this.uname};
        this.axios.get("user/test",{params}).then(result=>{
            if(result.data.code==1){
                this.ts_uname = require("../../assets/imgs/login/suc.png");
                this.info="";
            }else{
                this.ts_uname=require("../../assets/imgs/login/fail.png");
                this.info="用户名已存在";
            }
        }); 
      } else {
        this.ts_uname = require("../../assets/imgs/login/fail.png");
      }
    },
    // 验证密码
    t_upwd() {
      if (/^[a-zA-Z0-9]{6,20}$/.test(this.upwd)) {
        this.ts_upwd = require("../../assets/imgs/login/suc.png");
      } else {
        this.ts_upwd = require("../../assets/imgs/login/fail.png");
      }
    }
  },
  watch:{
    test(){
      this.t_test();
    },
    uname(){
      this.t_uname();
    },
    upwd(){
      this.upwd()
    },
    affirmUpwd(){
      this.t_affirmUpwd();
    }
  }
};
</script>

<style scoped>
.wrap .right strong{
    color:red;
    font-size:14px;
    margin-left:5px;
    position:absolute;
    width:100px;
    right:-130px;
    top:10px;
}
.right .hint {
  width: 25px;
  position: absolute;
  right: -25px;
  top: 7px;
}
.left .img {
  padding-top: 50px;
  border-left: 1px dotted #9fce84;
}
.wrap .login {
  position: absolute;
  right: 40px;
  top: 20px;
  color: #444;
}
.wrap .login a {
  text-decoration: underline;
  color: #ef760a;
  font-size: 14px;
}
.wrap {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 50px 50px;
  background: #fff;
  border: 1px solid #008842;
  border-top: none;
  position: relative;
}
.wrap .right {
  margin-left: 200px;
}
.wrap .right p {
  position: relative;
  padding-bottom: 20px;
}
.right span + input {
  width: 290px;
  height: 38px;
  padding-left: 15px;
  font-size: 14px;
}
.right span + input:focus{
    outline:#0bf solid 1px;
}
.right span {
  width: 70px;
  display: inline-block;
  margin-right: 20px;
  color: #444;
  font-size: 14px;
}
.right #refresh {
  color: #666;
  margin-left: 100px;
  font-size: 14px;
}
.right #refresh:hover {
  color: #008842;
}
.right #register {
  background-color: #008842;
  text-align: center;
  line-height: 50px;
  display: block;
  width: 306px;
  height: 50px;
  color: #fff;
  font-size: 18px;
  margin-left: 80px;
  border-radius: 2px;
}
.right #register:hover {
  background: #09964e;
}
</style>
