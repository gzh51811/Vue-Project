<template>
  <div>
    <header class="bar bar_nav">
      <a href="javascript:;" @click="goto" class="iconl">
        <span class="iconfont">&#xf0308</span>
      </a>
      <div class="top_title">免密码登录</div>
    </header>
    <div class="login_page paddingTop">
      <div class="top_tip" v-if="isok">
        <p>新用户可通过快速登录注册账号</p>
      </div>
      <div class="v-content content">
        <div v-if="isok">
          <div class="item_control">
            <input
              @keyup="judge($event)"
              type="tel"
              placeholder="请输入手机号"
              autocomplete="off"
              maxlength="11"
              class="item_input"
            >
            <i class="icon_success show" v-if="show1"></i>
            <i class="icon_clear show" @click="clear($event)" v-if="show"></i>
          </div>
          <div class="item_control">
            <input
              @keyup="inyzm($event)"
              type="tel"
              class="item_input msg_code"
              placeholder="请输入验证码"
              autocomplete="off"
              maxlength="4"
              oninput="if(value.length>4)value=value.slice(0,4)"
            >
            <i class="icon_clear yzm show" @click="clearyzm($event)" v-if="show2"></i>
            <span></span>
            <button class="btn_code" @click="getyzm($event)">获取验证码</button>
            <button disabled="disabled" class="btn_code" style="display: none;">重新发送({{num}}s)</button>
          </div>
          <div v-if="show4" class="item_tips">
            <p>{{tishi}}</p>
          </div>
          <button
            class="btn_default btn_red btn_block mt20"
            @click="login($event)"
            :disabled="show3"
          >登录</button>
          <div class="item_box">
            <a @click="shift($event)" class="fl blue-color">账号密码登录</a>
          </div>
        </div>
        <div v-if="!isok">
          <div class="item_control">
            <input
              @keyup="judge($event)"
              type="tel"
              placeholder="请输入手机号"
              autocomplete="off"
              maxlength="11"
              class="item_input"
            >
            <i class="icon_success show" v-if="show1"></i>
            <i class="icon_clear show" @click="clear($event)" v-if="show"></i>
          </div>
          <div class="item_control">
            <input
              @keyup="inyzm($event)"
              :type="password"
              placeholder="请输入密码"
              autocomplete="new-password"
              class="item_input item_password"
            >
            <i class="icon_clear show" v-if="show2" style="right:3.125rem"></i>
            <div class="checkbtn" @click="mima($event)" :disabled="show3"></div>
          </div>
          <div v-if="false" class="item_tips">
            <p>请输入正确的用户名或密码</p>
          </div>
          <button class="btn_default btn_red btn_block mt20">登录</button>
          <div class="item_box">
            <a @click="shift" class="fl blue-color">免密码登录</a>
            <a href="javascript:;" class="forgot_password">忘记密码?</a>
          </div>
        </div>
        <div class="quick_login">
          <div class="quick_top">
            <span>用其他方式登录</span>
          </div>
          <ul>
            <li>
              <div class="icon icon_qq"></div>
            </li>
            <li>
              <div class="icon icon_baidu"></div>
            </li>
            <li>
              <div class="icon icon_alipay"></div>
            </li>
            <li>
              <div class="icon icon_tsina"></div>
            </li>
            <li>
              <div class="icon icon_yhd"></div>
            </li>
          </ul>
          <div class="item_box">
            <div class="agree_item">
              登录即代表您已同意
              <span class="clasue-text">
                1药网
                <a href="javascript:;">《服务协议》</a>和
                <a href="javascript:;">《隐私条款》</a>
              </span>
            </div>
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
      password: "password",
      isok: false,
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      tishi: "",
      num: 60
    };
  },

  methods: {
    goto() {
      this.$router.push("/home");
    },
    shift(e) {
      this.isok = !this.isok;
      this.show = false;
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.tishi = "";
      e.target.parentNode.parentElement.childNodes[0].childNodes[0].value = "";
      e.target.parentNode.parentElement.childNodes[2].childNodes[0].value = "";
    },
    judge(e) {
      console.log(e.target.value.trim().length);

      if (e.target.value.trim() == "") {
        this.show = false;
      } else {
        this.show = true;
        if (e.target.value.trim().length == 11) {
          this.show1 = true;
        } else {
          this.show1 = false;
        }
      }
    },
    clear(e) {
      e.path[1].childNodes[0].value = "";
      this.show1 = false;
      this.show = false;
      // if()
      // e.target.previousElementSibling.value = "";
    },
    clearyzm(e) {
      e.path[1].childNodes[0].value = "";
      this.show2 = false;
    },
    getyzm(e) {
      let tel = e.path[2].childNodes[0].childNodes[0];
      if (tel.value.trim().length == 11) {
        this.show4 = false;
        e.target.style.display = "none";
        e.target.nextElementSibling.style.display = "block";
        e.target.previousElementSibling.style.display = "block";
        this.num = 5;
        let time = setInterval(() => {
          this.num--;
          if (this.num <= 0) {
            clearInterval(time);
            e.target.style.display = "block";
            e.target.nextElementSibling.style.display = "none";
          }
        }, 1000);
        time;
      } else {
        this.show4 = true;
        this.tishi = "请输入正确的手机号";
      }
    },
    inyzm(e) {
      if (e.target.value.trim() == "") {
        this.show2 = false;
      } else {
        this.show2 = true;
        if (e.target.value.trim().length == 4) {
          this.show3 = true;
        } else {
          this.show3 = false;
        }
      }
    },
    mima(e) {
      if (this.password == "password") {
        this.password = "text";
        this.show3 = true;
      } else {
        this.password = "password";
        this.show3 = false;
      }
    }
  }
};
</script>
<style lang="scss">
input:focus,
button:focus {
  outline: none;
}
.bar_nav {
  display: block;
  width: 100%;
  position: fixed;
  height: 2.8125rem;
  padding-right: 0.9375rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid #e6e6e6;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 10;
  text-align: center;
  .iconl {
    float: left;
    text-decoration: none;
    span {
      color: #666;
      font-size: 1.25rem;
    }
  }
}
.login_page {
  padding-top: 2.8125rem;
  .top_tip {
    height: 2rem;
    width: 100%;
    color: #f66;
    text-align: center;
    p {
      margin: 0;
      font-size: 0.875rem;
    }
  }
  .content {
    padding: 0 0.625rem;
    .item_control {
      position: relative;
      width: 100%;
      height: 3.125rem;
      line-height: 3.125rem;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      .item_input {
        padding: 0 0.625rem;
        font-size: 0.875rem;
        color: #333;
        display: inline-block;
        line-height: normal;
        box-shadow: inset 0 0 0 2.34375rem #fff;
        border: none;
        width: 100%;
      }
      .checkbtn {
        position: absolute;
        top: 0;
        right: 0;
        width: 3.125rem;
        height: 100%;
        background: url(../assets/img/t10.png) no-repeat 100% #fff;
        background-size: 1.625rem auto;
      }
      .checkbtn[disabled] {
        background: url(../assets/img/t11.png) no-repeat 100%;
        background-size: 1.625rem auto;
      }
      .icon_success {
        position: absolute;
        top: 0;
        right: 0;
        width: 1.875rem;
        height: 3.125rem;
        background: url(../assets/img/t3.png) no-repeat 50% #fff;
        background-size: 1.25rem;

        // display: none;
      }
      .icon_clear {
        width: 1.875rem;
        height: 3.125rem;
        position: absolute;
        top: 0;
        right: 1.875rem;
        background: url(../assets/img/t4.png) no-repeat 50% #fff;
        background-size: 1.25rem;
      }
      .yzm {
        right: 6.25rem;
      }
      .btn_code {
        position: absolute;
        bottom: 0.5rem;
        right: 0.625rem;
        width: 5.875rem;
        height: 1.75rem;
        padding: 0;
        margin: 0;
        background: #f66;
        text-align: center;
        color: white;
        font-size: 0.875rem;
        border: 0.1875rem;
        border-radius: 0.1875rem;
      }
      .btn_code[disabled] {
        color: #7d7d7d;
        background-color: #ececec;
      }
    }
    .item_tips {
      line-height: 1.875rem;
      padding: 0 0.625rem;
      overflow: hidden;
      p {
        color: #f66;
        margin: 0;
        padding: 0;
        font-size: 14px;
      }
    }
    .btn_default {
      background: #eee;
      border-color: #eee;
      color: #bcbcbc;
      margin-top: 1.25rem;
      height: 2.8125rem;
      border: 0.0625rem solid #ccc;
      display: block;
      width: 100%;
      margin-bottom: 0.625rem;
    }
    .btn_default[disabled] {
      background: #f66;
      color: #fff;
      border-color: #f66;
    }
    .forgot_password {
      color: #666 !important;
      float: right;
      text-decoration: none;
    }
    .item_box {
      width: 100%;
      line-height: 1.875rem;
      display: block;
      margin-top: 1.25rem;
      overflow: hidden;
      a {
        text-decoration: none;
        color: #0075e8;
        font-size: 0.875rem;
        display: inline-block;
        line-height: 1.875rem;
      }
      .clasue-text {
        a {
          color: #ff7070;
        }
      }
      .agree_item {
        height: 1.875rem;
        line-height: 1.875rem;
        font-size: 0.75rem;
        text-align: left;
        a {
          text-decoration: underline;
        }
      }
    }
    .quick_login {
      font-size: 0.875rem;
      color: #9b9b9b;
      margin-top: 3.125rem;
      text-align: center;
      ul {
        display: table;
        padding: 0;
        margin: 0;
        margin-top: 1.40625rem;
        li {
          list-style: none;
          position: relative;
          display: table-cell;
          width: 1%;
          height: 3.125rem;
          padding: 0;
          text-align: center;
          vertical-align: middle;
          .icon {
            width: 3.125rem;
            height: 3.125rem;
            margin: 0 auto;
          }
          .icon_qq {
            background: url(../assets/img/t5.png) no-repeat;
            background-size: 100% auto;
          }
          .icon_baidu {
            background: url(../assets/img/t6.png) no-repeat;
            background-size: 100% auto;
          }
          .icon_alipay {
            background: url(../assets/img/t7.png) no-repeat;
            background-size: 100% auto;
          }
          .icon_tsina {
            background: url(../assets/img/t8.png) no-repeat;
            background-size: 100% auto;
          }
          .icon_yhd {
            background: url(../assets/img/t9.png) no-repeat;
            background-size: 100% auto;
          }
        }
      }
    }
  }
}
</style>
