<template>
  <div style="width:100%;">
    <hr style="margin-top:30px;background-color:#e0e0e0;height:1px;border:none">
    <div class="wrap">
      <div class="new">
        <i></i>
        <p>新手指南</p>
        <ul>
          <li>
            <a href="javascript:;">账户注册</a>
          </li>
          <li>
            <a href="javascript:;">购物流程</a>
          </li>
          <li>
            <a href="javascript:;">订购方式</a>
          </li>
          <li>
            <a href="javascript:;">悠币说明</a>
          </li>
          <li>
            <a href="javascript:;">会员等级</a>
          </li>
        </ul>
      </div>
      <div class="pay">
        <i style="background-position:0 -23px;"></i>
        <p>付款方式</p>
        <ul>
          <li>
            <a href="javascript:;">支付方式</a>/<a href="javascript:;">发票说明</a>
          </li>
          <li>
            <a href="javascript:;">礼品卡章程</a>
          </li>
          <li>
            <a href="javascript:;">优惠券代码</a>
          </li>
          <li>
            <a href="javascript:;">卡券购买章程</a>
          </li>
        </ul>
      </div>
      <div class="ps">
        <i style="background-position:0 -46px;"></i>
        <p>配送方式</p>
        <ul>
            <li>
                <a href="javascript:;">配送运费</a>
            </li>
            <li>
                <a href="javascript:;">时间及范围</a>
            </li>
        </ul>
      </div>
      <div class="sh">
        <i style="background-position:0 -69px;"></i>
        <p>售后服务</p>
        <ul>
            <li>
                <a href="javascript:;">退换货政策</a>
            </li>
            <li>
                <a href="javascript:;">退换货流程</a>
            </li>
            <li>
                <a href="javascript:;">常见问题</a>
            </li>
            <li>
                <a href="javascript:;">投诉与建议</a>
            </li>
        </ul>
      </div>
      <div class="about">
        <i style="background-position:0 -92px;"></i>
        <p>关于我们</p>
        <ul>
            <li>
                <a href="javascript:;">公司介绍 </a>
            </li>
            <li>
                <a href="javascript:;">联系我们 </a>
            </li>
            <li>
                <a href="javascript:;">业务介绍 </a>
            </li>
            <li>
                <a href="javascript:;">诚信举报 </a>
            </li>
            <li>
                <a href="javascript:;">用户协议 </a>
            </li>
            <li>
                <a href="javascript:;">隐私协议 </a>
            </li>
        </ul>
      </div>
    </div>
    <div class="service">
        <span>客服热线 400-000-7788</span>
        <span>周一至周日 9:00-21:00</span>
        <p style="margin-top:40px;">所有图片均受著作权保护，未经许可任何单位与个人不得使用、复制、转载、摘编，违者必究法律责任。</p>
        <p><a href="javascript:;">沪ICP备09008015号 </a>Copyright © 2005-2019 版权所有</p>
        <p>
            <img src="../../assets/imgs/login/153685368061665897_121x29.png" alt="">
            <img src="../../assets/imgs/login/footer_copy.jpg" alt="">
            <img src="../../assets/imgs/login/ghs.png" alt="">
            沪公网安备 31010502000002
        </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom:80px;
}
.wrap i {
  display: inline-block;
  width: 30px;
  height: 23px;
  background-image: url(../../assets/imgs/login/footer_icon.png);
}
.wrap p {
  display: inline-block;
  margin-left: 10px;
}
.wrap ul{
    border-left:1px dashed #A8A8A8;
    height: 150px;
}

.wrap ul li{
    margin-left:35px;
    margin-top:5px;
}
.service a,
.wrap a{
    color:#575556;
}
.service a:hover,
.wrap a:hover{
    color:#008842;
    text-decoration:underline;
}
.service{
    width:1200px;
    margin:0 auto;
    text-align: center;
    margin-bottom:40px;
}
.service span{
    font-size: 14px;
    color:#008842;
    margin-right:30px;
}
.service p{
    font-size: 12px;
    color:#717171;
    line-height: 22px;
}
.service p img{
    margin-right:25px;
}
</style>

