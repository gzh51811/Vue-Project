<template>
  <div>
    <div class="first">
      <span>健康优享</span>
      <span>
        <p>距时间仅剩</p>
        <p>03：32:34</p>
      </span>
      <span>更多></span>
    </div>
    <div class="secend">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="goods in goodlist" :key="goods.id">
          <img :src="goods.productImg" alt>
          <p v-text="goods.productName"></p>
          <span>￥{{goods.sellPrice}}</span>
        </swiper-slide>
      </swiper>
    </div>
    <div class="last">
      <img src="../assets/img/tupian.jpg" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "carrousel",
  data() {
    return {
      goodlist: [],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    };
  },
  computed: {
    swiper() {
      // return this.$refs.mySwiper.swiper
    }
  },
  created() {
    this.$axios
      .get("http://localhost:3000/setting/Swipe", {
        params: {}
      })
      .then(response => {
        // console.log(response.data[0].data.goodTopic[0].goodProducts);
        let res = response.data[0].data.goodTopic[0].goodProducts;
        this.goodlist = res;
      });
  }
};
</script>
<style lang="scss" scoped>
div {
  width: 100%;
  // height: 12.3125rem;
  padding-top: 0.5rem;
  .first {
    height: 2.5rem;
    background: #fff;
    border-bottom: .0625rem solid rgb(247, 243, 243);; 
    span:nth-child(1) {
      display: block;
      width: 5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      padding-left: 0.625rem;
      font-weight: bold;
      color: #507f68;
      float: left;
    }
    span:nth-child(2) {
      display: block;
      width: 9.375rem;
      height: 2.5rem;
      float: left;
      line-height: 1.875rem;
      p {
        font-size: 0.75rem;
        font-weight: normal;
        height: 2.5rem;
        padding-right: .625rem;
        line-height: 2.5rem;
        color: red;
        display: inline;
      }
      p:nth-child(1) {
        border-right: .0625rem solid #ccc;
        color: #ccc;
      }
    }
    span:nth-child(3) {
      display: block;
      width: 3.75rem;
      height: 2.5rem;
      float: right;
      line-height: 2.5rem;
      font-size: 0.75rem;
      color: #ccc;
      text-align: center;
    }
  }
  .secend {
    // height: 8.75rem;
    padding-top: 0;
  }
  .last {
    width: 100%;
    height: 9.875rem;
    background: rgb(247, 243, 243);
    padding-top: 0;
    img {
      width: 100%;
      height: 8.5625rem;
      padding-top: 0.625rem;
    }
  }
}
.swiper-container{
        width: 100%;
        height: 13.75rem;
        background: #fff;
        .swiper-wrapper{
            width: 6.25rem;
        }
        .swiper-wrapper img{
            width: 5rem;
            height: 6.25rem;
            margin: .375rem;
        }
        .swiper-wrapper p{
            font-size: .75rem;
            padding: 0 .75rem;
        }
        .swiper-wrapper span{
            display: block;
            width: 5rem;
            height: 1.25rem;
            font-size: .75rem;
            color: rgb(231, 39, 39);
            font-weight: bold;
            position: absolute;
            bottom: 1.25rem; 
            padding-left: .75rem;         
        }
    }
</style>


