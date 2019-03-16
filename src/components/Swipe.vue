<template>
  <mt-swipe>
    <mt-swipe-item v-for="goods in goodlist" :key="goods.id">
      <img :src="goods.pic" alt="">
    </mt-swipe-item>
    
  </mt-swipe>
</template>
<script>
import axios from 'axios';
export default {
    data(){
      return {
        goodlist:[]
      }
    },
    // methods:{
    //   async getCommend(){
    //     let {
    //       data:{
    //         data:{goods}
    //       } 
    //     } = await this.$axiso('http://localhost:3000/setting/Swipe',{
    //       params:{
    //         banner
    //       }
    //     });
    //      console.log(this.goodlist);
    //   }
    // },
    created() {
      // debugger
      this.$axios.get('http://localhost:3000/setting/Swipe', {
        params: {

        }
      }).then(function (response) {
      // console.log(response.data[1].data.banner);
      let goodlist = response.data[1].data.banner;
      console.log(goodlist[0].pic)
    })
  }
}
</script>
<style lang="scss">
    .mint-swipe{
        height: 12.5rem !important;
        .mint-swipe-item{
            background: rgb(233, 138, 138);
        }
        
    }
</style>


