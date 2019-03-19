<template>
  <mt-swipe>
    <mt-swipe-item v-for="goods in goodlist" :key="goods.id">
      <img :src="goods.pic" alt="">
    </mt-swipe-item>
    
  </mt-swipe>
</template>
<script>
// import axios from 'axios';
export default {
    data(){
      return {
        goodlist:[]
      }
    },
    created() {
      // debugger
      this.$axios.get('http://localhost:3000/setting/Swipe', {
        params: {
        }
      }).then( (response) =>{

      //  console.log(response.author);
        this.goodlist = response.data[1].data.banner;
      // console.log(this.goodlist);
      // let list = goodlist[0]
      
    })
  }
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 9.375rem !important;
        .mint-swipe-item{
            // background: rgb(233, 138, 138);
            img{
              width: 100%;
              height: 9.375rem;
            }
        }
        
    }
</style>


