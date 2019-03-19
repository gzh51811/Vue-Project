<template>
  <div>
    <div id="main" v-if="isok" class="user_page">
      <div class="user_top">
        <span class="city_area">
          <img src="../assets/img/t12.png" alt="定位"> 广东
        </span>
        <span @click="goto('set')" class="setting_area">设置</span>
      </div>
      <div class="user_info_wrapper">
        <div class="user_info_content">
          <div class="user_header_icon">
            <img src="../assets/img/t13.png" alt="已登录头像">
          </div>
          <div class="user_name">
            <span>18379023259</span>
          </div>
          <div class="user_balance_content">
            <div class="balance_item border">
              <div class="msg_item">
                <span class="num">0.00</span>
                <span>元</span>
                <br>
                <span>余额</span>
              </div>
            </div>
            <div class="balance_item">
              <div class="msg_item">
                <span class="num">4</span>
                <span>张</span>
                <br>
                <span>优惠券</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="order_info_content">
        <span class="order_title">我的订单</span>
        <span data-ywpoint="null_null_null_null_I0355_0" class="check_all">
          查看全部
          <img src="../assets/img/t14.png" class="right">
        </span>
        <div class="clearfix"></div>
        <ul class="item_wrapper border-bt">
          <li>
            <i class="iconfont">
              <img src="../assets/img/t15.png" alt>
            </i>
            <span class="item_desc">待付款</span>
          </li>
          <li>
            <i class="iconfont">
              <img src="../assets/img/t16.png" alt>
            </i>
            <span class="item_desc">代发货</span>
          </li>
          <li>
            <i class="iconfont">
              <img src="../assets/img/t17.png" alt>
            </i>
            <span class="item_desc">待收货</span>
          </li>
          <li>
            <i class="iconfont">
              <img src="../assets/img/t18.png" alt>
            </i>
            <span class="item_desc">待评价</span>
          </li>
          <li>
            <i class="iconfont">
              <img src="../assets/img/t19.png" alt>
            </i>
            <span class="item_desc">退换货</span>
          </li>
        </ul>
      </div>
      <div class="server_content">
        <span class="order_title">我的服务</span>
        <div class="clearfix"></div>
        <ul class="item_wrapper">
          <li>
            <i class="iconfont">
              <img src="../assets/img/t20.png" alt>
            </i>
            <span class="item_desc">健康档案</span>
          </li>
          <li>
            <i class="iconfont">
              <img src="../assets/img/t21.png" alt>
            </i>
            <span class="item_desc">看过买过</span>
          </li>
          <li>
            <i class="iconfont">
              <img src="../assets/img/t22.png" alt>
            </i>
            <span class="item_desc">我的收藏</span>
          </li>
          <li>
            <i class="iconfont">
              <img src="../assets/img/t23.png" alt>
            </i>
            <span class="item_desc">咨询中心</span>
          </li>
        </ul>
      </div>
      <div class="vip_content">
        <img src="../assets/img/t24.png" alt="会员中心">
        <div class="vip_title">1+会员</div>
        <div class="vip_tip">365天您的家庭医生</div>
        <div class="vip_btn">立即加入</div>
      </div>
      <div class="benefit_content">
        <span class="order_title">福利中心</span>
        <div class="clearfix"></div>
        <ul class="item_wrapper">
          <li data-ywpoint="null_null_null_null_I0366_0" class="flex-fix">
            <i class="iconfont">
              <img src="../assets/img/t25.png" alt="领券中心">
            </i>
            <span class="item_desc">领券中心</span>
          </li>
          <li data-ywpoint="null_null_null_null_I0367_0" class="flex-fix">
            <i class="iconfont">
              <img src="../assets/img/t26.png" alt="领奖励金">
            </i>
            <span class="item_desc">领奖励金</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!isok" class="personalCenter">
      <div id="app">
        <div class="set_page">
          <header class="user_common_header">
            <a @click="goto('set')" href="javascript:history.go(-1)" class="common_header_left_btn">
              <span class="iconfont">&#xf0308</span>
            </a>
            <span class="user_header_title">设置</span>
          </header>
          <ul class="setting_content_item_wrapper">
            <li data-ywpoint="null_null_null_null_I0401_0" class="setting_item">
              <img src="../assets/img/t14.png" class="right_arrow">
              <span class="setting_desc">地址管理</span>
            </li>
            <li data-ywpoint="null_null_null_null_I0402_0" class="setting_item">
              <img src="../assets/img/t14.png" class="right_arrow">
              <span class="setting_desc">账号管理</span>
            </li>
            <li data-ywpoint="null_null_null_null_I0403_0" class="setting_item">
              <img src="../assets/img/t14.png" class="right_arrow">
              <span class="setting_desc">证件管理</span>
            </li>
          </ul>
          <ul class="setting_content_item_wrapper mg-top-10">
            <li data-ywpoint="null_null_null_null_I0404_0" class="setting_item">
              <img src="../assets/img/t14.png" class="right_arrow">
              <span class="setting_desc">帮助反馈</span>
            </li>
            <li class="setting_item">
              <span class="right_desc">
                <a href="tel:4000070958" data-ywpoint="null_null_null_null_I0405_0">400-007-0958</a>
              </span>
              <span class="setting_desc">联系客服</span>
            </li>
            <li data-ywpoint="null_null_null_null_I0406_0" class="setting_item">
              <img src="../assets/img/t14.png" class="right_arrow">
              <span class="setting_desc">关于我们</span>
            </li>
          </ul>
          <div data-ywpoint="null_null_null_null_I0407_0" class="fixed_bottom">
            <span class="logout_btn">退出当前账户</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isok: true,
      checkList: [1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    goto(path) {
      this.isok = !this.isok;
      // console.log(this);
      this.$router.push({ query: { path }, params: { path } });
    }
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.user_page {
  padding-bottom: 6.25rem;
  background: white;
  // height: 100%;
  .user_top {
    height: 7.375rem;
    background: linear-gradient(#908bff, #9bb3ff);
    text-align: center;
    .city_area {
      position: absolute;
      top: 1.75rem;
      color: #fff;
      font-size: 0.9375rem;
      left: 0.9375rem;
      img {
        width: 0.9375rem;
        height: 1.125rem;
      }
    }
    .setting_area {
      position: absolute;
      top: 1.75rem;
      color: #fff;
      font-size: 0.9375rem;
      right: 0.9375rem;
    }
  }
  .user_info_wrapper {
    display: flex;
    height: 9.4375rem;
    margin-top: -3rem;
    .user_info_content {
      width: 96%;
      margin-right: 2%;
      margin-left: 2%;
      flex: 1;
      background: white;
      height: 9.4375rem;
      border-radius: 0.375rem;
      position: relative;
      .user_header_icon {
        position: absolute;
        width: 3.125rem;
        height: 3.125rem;
        top: 0.9375rem;
        left: 0.9375rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user_name {
        position: absolute;
        top: 1.875rem;
        left: 4.6875rem;
        color: #262d56;
        font-size: 0.9375rem;
      }
      .user_balance_content {
        position: relative;
        width: 100%;
        top: 5.3125rem;
        height: 3.125rem;
        .balance_item {
          max-width: 50%;
          overflow: hidden;
          text-align: center;
          height: 100%;
          float: left;
          width: 50%;
          position: relative;
          .msg_item {
            height: 100%;
            font-size: 0.8125rem;
            .num {
              font-size: 1.125rem;
              max-width: 2.25rem;
              overflow: hidden;
              text-overflow: ellipsis;
              height: 1.5rem;
              line-height: 1.5rem;
              margin-left: 0;
            }
            span {
              font-size: 0.8125rem;
              margin-left: 0.125rem;
              color: #262d56;
              height: 1.125rem;
              line-height: 1.125rem;
            }
          }
        }
      }
    }
  }
  .order_info_content,
  .server_content,
  .benefit_content {
    margin-top: 1.25rem;
    width: 100%;
    height: 6.625rem;
    .order_title {
      float: left;
      font-size: 18px;
      color: #262d56;
      margin-left: 0.9375rem;
    }
    .check_all {
      float: right;
      font-size: 0.8125rem;
      color: #262d56;
      margin-right: 0.9375rem;
      img {
        width: 0.375rem !important;
        height: 0.6875rem !important;
        margin-left: 0.3125rem;
      }
    }
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
      height: 0;
      line-height: 0;
    }
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      list-style: none;
      li {
        margin: 0;
        padding: 0;
        list-style: none;
        flex: 1;
        width: 100%;
        height: 3.9375rem;
        padding-top: 0.9375rem;
        text-align: center;
        .iconfont {
          position: relative;
          font-size: 1.25rem;
          color: #ccc;
          img {
            width: 1.375rem;
            height: 1.375rem;
          }
        }
        .item_desc {
          display: block;
          font-size: 0.8125rem;
          padding-top: 0.3125rem;
          color: #262d56;
        }
      }
    }
  }
  .vip_content {
    width: 22.1875rem;
    height: 3.75rem;
    margin: 0 0.625rem;
    position: relative;
    color: #262d56;
    img {
      width: 100%;
      height: 100%;
    }
    .vip_title {
      position: absolute;
      top: 50%;
      left: 1.5625rem;
      font-size: 1.125rem;
      transform: translateY(-50%);
    }
    .vip_tip {
      position: absolute;
      top: 50%;
      font-size: 0.8125rem;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      left: 5.625rem;
    }
    .vip_btn {
      position: absolute;
      top: 50%;
      font-size: 0.8125rem;
      transform: translateY(-50%);
      right: 1.25rem;
      width: 5.4375rem;
      height: 1.875rem;
      line-height: 1.875rem;
      border-radius: 6.25rem;
      background: #2f2f2f;
      text-align: center;
      color: #fff;
    }
  }
}
.flex-fix {
  flex: none !important;
  width: 25% !important;
}
.personalCenter {
  .set_page {
    padding-top: 2.75rem;
  }
  .user_common_header {
    position: fixed;
    height: 2.8125rem;
    line-height: 2.8125rem;
    width: 100%;
    top: 0;
    text-align: center;
    background: #f9f9f9;
    border-bottom: 1px solid #ddd;
    z-index: 100;
    font-size: 1rem;
    a {
      padding: 0 0.625rem;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      text-decoration: none;
      color: #333;
    }
  }
  .setting_content_item_wrapper {
    .setting_item {
      height: 3.125rem;
      line-height: 3.125rem;
      background: #fff;
      box-shadow: 0 0 0 0 hsla(0, 0%, 90%, 0.5);
      border-top: 1px solid #e5e5e5;
      .right_arrow {
        float: right;
        height: 0.6875rem;
        width: 0.375rem;
        margin-right: 0.9375rem;
        margin-top: 1.25rem;
      }
      .setting_desc {
        margin-left: 0.9375rem;
        font-size: 0.9375rem;
      }
      .right_desc {
        float: right;
        width: 6.25rem;
        text-align: center;
        height: 1.25rem;
        margin-right: 0.9375rem;
        color: #a0a3b3;
        font-size: 0.8125rem;
        a {
          color: #a0a3b3;
          text-decoration: none;
        }
      }
    }
  }
  .fixed_bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    .logout_btn {
      height: 2.625rem;
      line-height: 2.625rem;
      display: block;
      text-align: center;
      margin: 0.9375rem 0.625rem;
      background-image: linear-gradient(-132deg, #5577fb, #738efc 93%);
      color: #fff;
      font-size: 0.9375rem;
      cursor: pointer;
      -webkit-border-radius: 2px;
      border-radius: 2px;
    }
  }
}
</style>
