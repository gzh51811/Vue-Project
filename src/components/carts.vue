<template>
  <div class="app">
    <div class="login_bar" v-if="isok">
      <span class="bar_info">登录后可同步电脑与手机购物车中的商品</span>
      <span class="login_btn">登录</span>
    </div>
    <div class="cart_container">
      <div class="cart_empty" v-if="isok1">
        <div class="cart_ico">
          <i class="iconfont">&#xe707</i>
        </div>
        <p class="empty_warm">购物车还是空的</p>
        <span class="see_btn" @click="see">去看看</span>
      </div>
      <section class="cart_section" v-if="!isok">
        <div class="shop_tt">
          <i class="iconfont" :id="show">&#xe6c2</i>
          <!-- <i class="iconfont" v-model="checkAll">&#xe624</i> -->
          <span class="yiyaowang_logo shop_logo_new"></span>
          <span class="right_warm">满69.0元包邮</span>
        </div>
        <div class="shop_cart" v-for="(goods,index) in goodslist" :key="goods.prie">
          <div class="cart_pro">
            <span class="ico_box" @click.stop="select(index)">
              <!-- <i class="iconfont">&#xe6c2</i> -->
              <!-- <input type="checkbox" v-model="selected" :value="1"> -->
              <!-- <i class="iconfont" style="display:none">&#xe624</i>
              <el-checkbox v-model="checked"></el-checkbox>-->
              <el-checkbox v-model="selected" :value="index"></el-checkbox>
            </span>
            <div class="pro_img_box">
              <img :src="goods.img" alt class="pro_img">
            </div>
            <h2 class="pro_name">{{goods.name}}</h2>
            <p class="series_mark">{{goods.des}}</p>
            <el-input-number
              v-model="goods.num"
              @change="handleChange"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
            <span class="price">￥{{goods.price}}</span>
          </div>
        </div>
      </section>
      <div class="cart_other">
        <div class="other_tt">
          <span class="tt_name">常备用药</span>
          <span class="more_link">
            更多
            <i class="icon iconfont icon_rightarrow">&gt</i>
          </span>
        </div>
        <div class="cart_other_list">
          <!-- <mt-swipe :auto="4000">
            <mt-swipe-item v-for="list in goodslist">{{list.goods_image_url}}</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
          </mt-swipe>-->
        </div>
      </div>
      <div class="cart_footer">
        <div class="all_select">
          <el-checkbox v-model="selected" :value="1"></el-checkbox>
          <p>全选</p>
        </div>
        <div class="shop_settlement_box">
          <p class="price_p">
            合计：
            <em>{{total.inum}}</em>
            <i class="color_red">{{total.float}}</i>
          </p>
          <p class="msg_p">
            不含运费，已优惠¥
            <em>40.00</em>
          </p>
        </div>
        <a href="javascript:;" class="btn_settlement btn_settlement_ok">
          去结算
          <em>(23)</em>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: "showt",
      pitchon: true,
      selected: [],
      num1: 1,
      isok: false,
      // checked: true,
      isok1: false,
      goodslist: [
        {
          id: 1,
          img: "../assets/img/t1.jpg",
          name: "澳诺锌钙特 葡萄糖酸钙锌口服溶液 10ml*24支",
          des: "含量:10ml*24支;",
          price: "46.56",
          num: "3"
        },
        {
          id: 2,
          img: "../assets/img/t1.jpg",
          name: "澳诺锌钙特 葡萄糖酸钙锌口服溶液 10ml*24支",
          des: "含量:10ml*24支;",
          price: "96.33",
          num: "4"
        }
      ]
    };
  },
  methods: {
    see() {
      this.$router.push("/home");
    },
    handleChange(value) {
      console.log(value);
    },
    select(idx) {
      console.log(idx);
      let index = this.selected.indexOf(idx);
      if (index >= 0) {
        this.selected.splice(index, 1);
      } else {
        console.log(111);
        this.selected.push(idx);
      }
      console.log(this.selected);
    }
  },
  computed: {
    total: {
      get() {
        let price = 0;
        let float = 0;
        let inum = 0;
        for (let i = 0; i < this.goodslist.length; i++) {
          price += this.goodslist[i].price * this.goodslist[i].num;
        }
        inum = Math.floor(price);
        float = Math.round(price * 100) % 100;
        return { inum, float };
      }
    }
  }
  // computed: {
  //   // computed中的属性为getter&setter
  //   // 默认为getter
  //   // checkAll(){
  //   //     // 返回true:所有的索引值都存在seleted中
  //   //     // 返回false:只要有一个索引值不在selected中
  //   //     return this.songs.every((song,idx)=>this.selected.includes(idx))
  //   // }
  //   // got(){},
  //   selected: {
  //     get() {
  //       return this.songs.every((song, idx) => this.selected.includes(idx));
  //     },
  //     set(checked) {
  //       this.selected = checked ? this.songs.map((item, idx) => idx) : [];
  //     }
  //   }
  // }
  // created() {
  //   console.log(this);

  //   if (this.isok) {
  //     console.log(this.isok);

  //     this.isok = true;
  //   } else {
  //     console.log(this.isok);
  //     this.isok = false;
  //   }
  //   this.$axios
  //     .get("https://www.nanshig.com/mobile/index.php", {
  //       params: {
  //         act: "goods",
  //         op: "goods_list",
  //         keyword: "",
  //         page: 10,
  //         curpage: 1
  //       }
  //     })
  //     .then(res => {
  //       console.log(res);
  //       let data = res.data;
  //       console.log(this);

  //       this.goodslist = data.datas.goods_list;

  //       console.log(data.datas.goods_list);
  //     });
  // }
};
</script>
<style lang="scss" >
p {
  margin: 0;
  padding: 0;
}
.app {
  padding: 0 0.625rem;
  .cart_container {
    .cart_empty {
      padding: 3.75rem;
      text-align: center;
      .cart_ico {
        position: relative;
        width: 9.0625rem;
        height: 1.3125rem;
        display: inline-block;
        i {
          display: inline-block;
          width: 1.875rem;
          height: 1.875rem;
          background: #ffffff;
          z-index: 5;
          position: relative;
        }
      }
      .cart_ico::after {
        content: "";
        height: 0.0625rem;
        width: 9.0625rem;
        display: inline-block;
        background: #999;
        position: absolute;
        margin: 0.625rem -0.9375rem;
        transform: translate(-50%, -50%);
        z-index: 3;
      }
      .empty_warm {
        font-size: 0.34666667rem;
        margin-top: 0.66666667rem;
        color: #999;
        font-size: 0.875rem;
        text-align: center;
      }
      .see_btn {
        height: 1.375rem;
        width: 4.0625rem;
        display: inline-block;
        border: 0.0625rem solid #ff6666;
        border-radius: 0.1875rem;
        margin-top: 1.5625rem;
        text-align: center;
        font-size: 0.75rem;
        color: #ff6666;
        line-height: 1.375rem;
      }
    }
    .cart_other {
      background: #fff;
      margin-bottom: 0.625rem;
      .other_tt {
        width: 100%;
        height: 2.75rem;
        border: 0.0625rem solid #fff;
      }
      .tt_name {
        display: inline-block;
        width: 7rem;
        // height: 2.6875rem;
        color: #ff6666;
        line-height: 2.6875rem;
        border-bottom: 0.125rem solid #ff6666;
      }
      .more_link {
        line-height: 2.6875rem;
        color: #666;
        float: right;
        i {
          color: #ccc;
        }
      }
    }
    .cart_section {
      background: #fff;
      margin-bottom: 0.625rem;
      width: 100%;
      overflow: hidden;
      .shop_tt {
        width: 100%;
        height: 2.5625rem;
        line-height: 2.5625rem;
        border-bottom: 1px solid #f5f5f6;
        position: relative;
        .iconfont {
          color: #ccc;
        }
        .yiyaowang_logo {
          display: inline-block;
          width: 2.125rem;
          height: 2.125rem;
          background: url(../assets/img/logo.png) no-repeat;
          background-size: 2.125rem 2.125rem;
          position: absolute;
          top: 0.25rem;
          left: 2.1875rem;
        }
        .right_warm {
          font-size: 0.75rem;
          color: #666;
          position: absolute;
          right: 0.625rem;
        }
      }
      .shop_cart {
        border-bottom: 1px solid #f5f5f6;
        padding-bottom: 0.75rem;
        overflow: hidden;
        padding-right: 0.625rem;
        .cart_pro {
          padding-left: 8.25rem;
          position: relative;
          min-height: 5.0625rem;
          transition: transform 0.2s;
          .ico_box {
            position: absolute;
            left: 0rem;
            top: 1.25rem;

            height: 1.875rem;
            width: 2.5rem;

            .el-checkbox__inner {
              border-color: #ccc;
              border-radius: 50%;
            }
            .is-checked {
              .el-checkbox__inner {
                background-color: #ff6666;
              }
            }
            .el-checkbox {
              width: 1rem;
              height: 1rem;
              .el-checkbox__original {
                display: block;
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                color: red;
                padding-top: 0;
              }
            }
          }
          .pro_img_box {
            width: 5rem;
            height: 5rem;
            position: absolute;
            left: 1.875rem;
            display: inline-block;
            border: 1px solid #e5e5e5;
            top: 0;
            img {
              width: 5rem;
              height: 5rem;
            }
          }
          h2 {
            margin: 0;
            font-size: 1rem;
            line-height: 1.3125rem;
            color: #666;
            white-space: nowrap;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: normal;
          }
          .series_mark {
            font-size: 1rem;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 0.05333333rem;
            color: #999;
            -webkit-border-radius: 2px;
            border-radius: 2px;
          }
          .el-input-number {
            position: absolute;
            bottom: 0;
            right: 0.125rem;
            width: 6.25rem;
            height: 1.25rem;
            border: 0.0625rem solid #e5e5e5;
            line-height: 1rem;
            padding: 0.1875rem 0;
            border-radius: 0.125rem;
            text-align: center;
            span {
              display: block;
              float: left;
              width: 1.625rem;
              height: 1.25rem;
              line-height: 1.25rem;
              position: absolute;
              top: 0;
              padding-top: 0;
              i {
                color: #666;
                font-weight: 900;
              }
            }
            .el-input-number__decrease {
              border-right: 0.0625rem solid #e5e5e5;
              left: 0;
            }
            .el-input-number__increase {
              border-left: 1px solid #e5e5e5;
              left: 4.5625rem;
            }
            .el-input {
              width: 2.8125rem;
              height: 1.25rem;
              float: left;
              left: 1.6875rem;
              input {
                display: block;
                padding: 0;
                width: 2.8125rem;
                height: 1.25rem;
                line-height: 1.25rem;
                border: none;
                color: #666;
                font-size: 1rem;
                text-align: center;
              }
            }
          }
          .price {
            font-size: 0.9375rem;
            color: #ff6666;
            position: absolute;
            left: 8.25rem;
            top: 3.75rem;
          }
        }
      }
    }
  }
  .login_bar {
    padding: 0.625rem;
    width: 100%;
    height: 1.625rem;
    line-height: 1.625rem;
    font-size: 0.75rem;
    color: #999;
    position: relative;
    span {
      height: 1.6875rem;
      line-height: 1.6875rem;
    }
    .login_btn {
      float: right;
      position: absolute;
      display: inline-block;
      width: 3.375rem;
      right: 1.875rem;
      border-radius: 0.1875rem;
      background: #ff6666;
      color: white;
      text-align: center;
    }
  }
  .cart_footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    background: #fff;
    border-top: 1px solid #eeeeee;
    box-sizing: border-box;
    .all_select {
      position: absolute;
      top: 0.9375rem;
      left: 0.5rem;

      line-height: 0.625rem;
      text-align: center;
      .el-checkbox__inner {
        border-radius: 50%;
        border-color: black;
      }
      p {
        font-size: 0.75rem;
        color: #ccc;
        margin-top: 0.625rem;
      }
      .el-checkbox {
        margin: 0;
      }
    }
    .shop_settlement_box {
      text-align: right;
      padding: 0 8.75rem 0 3.125rem;
      .price_p {
        height: 2rem;
        line-height: 2rem;
        color: #666;
        font-size: 0.75rem;
        white-space: nowrap;
        em {
          font-size: 1.25rem;
          color: #ff6666;
          font-style: normal;
        }
        .color_red {
          color: #ff6666;
        }
      }
      .msg_p {
        height: 1.25rem;
        line-height: 1rem;
        font-size: 0.75rem;
        color: #999;
      }
    }
    .btn_settlement {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      text-decoration: none;
      font-size: 1.125rem;
      line-height: 3.5rem;
      color: #fff;
      background: #ccc;
      float: right;
      width: 8.125rem;
      text-align: center;

      em {
        font-style: normal;
      }
    }
    .btn_settlement_ok {
      background: #ff6666;
    }
  }
}
</style>