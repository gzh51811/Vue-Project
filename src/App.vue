<template>
  <div>
    <div class="nav" v-if="isok">
      <div 
        v-for="(nav,idx) in navs" 
        :key="idx"
        @click="goto(nav.path,idx)"
        :class="{'active':isactive==idx}">
          <img :src="nav.imgurl" height="50%"><br>
        {{nav.title}}
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isok: true,
      navs: [
        {
          title: "首页",
          path: "/home",
          imgurl: "assets/img/1.png"
        },
        {
          title: "找药",
          path: "/list",
          imgurl: "assets/img/2.png"
        },
        {
          title: "购物车",
          path: "/cart",
          imgurl: "assets/img/3.png"
        },
        {
          title: "我的",
          path: "/mine",
          imgurl: "assets/img/4.png"
        }
      ],
      isactive: 0
    };
  },
  beforeUpdate() {
    console.log(this.$route.path);
    if (this.$route.path == "/cart") {
      this.isok = false;
    } else {
      this.isok = true;
    }
    let { path: path } = this.$route.params;
    console.log(path);
    if (path == "set") {
      this.isok = false;
    }
  },
  methods: {
    goto(path, idx) {
      this.isactive = idx;
      this.$router.push({ path });
    }
  }
};
</script>
<style lang="scss">
.nav {
  padding: 5px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #d8d8d8;
  display: -webkit-box;
  display: flex;
  justify-content: space-around;
  img {
    padding-left: 4px;
  }
  .active {
    color: red;
  }
}
</style>