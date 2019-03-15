<template>
  <div>
    <div class='nav' >
      <div v-for="(nav,idx) in navs" :key="idx"  @click="goto(nav.path,idx)" :class="{'active':isactive==idx}">
           <img :src='nav.imgurl' height='50%'/><br/>
            {{nav.title}}
      </div>
    </div>
    <router-view/>
  </div>
</template>



<script>
  import Vue from 'vue';
  import axios from "axios";

  Vue.prototype.$axios = axios;//绑定到vue实例
  export default {
      data(){
        return {
            navs:[
              {
                title:'首页',
                path:'/home',
                imgurl:'assets/img/1.png'
              },{
                title:'找药',
                path:'/list',
                imgurl:'assets/img/2.png'

              },{
                title:'购物车',
                path:'/cart',
                imgurl:'assets/img/3.png'

              },{
                title:'我的',
                path:'/mine',
                imgurl:'assets/img/4.png'

              }
            ],
            isactive:0
        }
      },
      methods:{
        goto(path,idx){
          this.isactive=idx;
          this.$router.push({path});
        }
      }
  }
</script>





<style lang="scss" >
  .nav{
    padding:.3125rem 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    border-top: .0625rem solid #d8d8d8;
    display: -webkit-box;
    display: flex;
    justify-content: space-around;
    img{
      padding-left:.25rem;
    }
    .active{color:red;}
  }
  .list-top{

  }

</style>