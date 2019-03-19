<template>
  <div>
    <!-- 购物车 -->
    <mt-navbar v-model="selected">
      <a href="javascript:;" @click="goto" class="iconl">
        <span class="iconfont">&#xf0308</span>
      </a>
      <mt-tab-item v-for="(nav,index) in navs" :id="index" :key="nav.text">
        <span @click="kkk(nav.name)">{{nav.text}}</span>
      </mt-tab-item>
      <a href="javascript:;" class="iconr" @click="show">
        <span class="iconfont">&#xe637</span>
      </a>
      <mt-popup v-model="popupVisible" position="right-top">
        <a v-for="back in bcaks" :key="back.text" @click="go(back.name)">
          <i class="iconfont">&#xe67e</i>
          {{back.text}}
        </a>
        
      </mt-popup>
    </mt-navbar>
    <carts v-if="name=='/carts'"></carts>
    <demlist v-if="name=='/demlist'"></demlist>
  </div>
</template>
<script>
import carts from "../components/carts.vue";
import demlist from "../components/demlist.vue";
export default {
  data() {
    return {
      name: "/carts",
      selected: 0,
      popupVisible: false,
      navs: [
        {
          text: "购物车",
          name: "/carts"
        },
        {
          text: "需求清单",
          name: "/demlist"
        }
      ],
      bcaks: [
        {
          text: "首页",
          name: "/home",
          icon: ".icon-shouye"
        },
        {
          text: "分类",
          name: "/list",
          icon: ".icon-fenlei"
        },
        {
          text: "我的",
          name: "/mine",
          icon: ".icon-wode"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    goto() {
      this.$router.push("/home");
    },
    show() {
      this.popupVisible = !this.popupVisible;
    },
    go(path) {
      this.$router.push(path);
    },
    kkk(path) {
      this.name = path;
    }
  },
  components: {
    carts,
    demlist
  }
};
</script>
<style   lang="scss">
.mint-navbar {
  height: 2.75rem;
  display: block !important;
  line-height: 2.75rem;
  .mint-tab-item {
    display: inline-block;
    padding: 0.8125rem 0.9375rem !important;
    .mint-tab-item-label {
      font-size: 1rem;
    }
  }
  .is-selected {
    color: #333 !important;
    border-bottom: 0.125rem solid #ff6666 !important;
  }
  .iconl {
    float: left;
    text-decoration: none;
    span {
      color: #666;
      font-size: 1.25rem;
    }
  }
  .iconr {
    float: right;
    text-decoration: none;
    span {
      color: #666;
      font-size: 1.5625rem;
    }
  }
  .mint-popup {
    width: 7.1875rem;
    height: 7.6875rem;
    border-radius: 0.5rem;
    display: inline-block;
    position: fixed;
    top: 7.8rem;
    left: 19.5rem;
    a {
      display: block;
      padding-left: 0.8rem;
      height: 2.4375rem;
      line-height: 2.4375rem;
      color: #666;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      text-align: left;
      i {
        float: left;
        margin-right: 0.8rem;
      }
    }
  }
  .v-modal {
    opacity: 0.3;
  }
  .mint-popup::before {
    content: "";
    width: 0;
    border: 0.7rem solid transparent;
    border-bottom-color: #fff;
    display: inline-block;
    position: absolute;
    top: -1.2rem;
    right: 0.8rem;
  }
}
</style>

