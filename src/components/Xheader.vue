<template>
  <div class="header">
    <div class="header-l">
      <h4></h4>
      <span>广东</span>
    </div>
    <div class="header-l">
      <div>
        <i></i>
        输入商品名称
      </div>
    </div>
    <div class="header-r">
     <img src="../assets/img/msg.png" alt="">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    // margin-top: 1.25rem;
    position: fixed;
    top:.625rem;
    left: 0rem;
    z-index: 10000;
  .header-l {
    float: left;
    width: 6.25rem;
    position: relative;
    h4 {
      position: absolute;
      left: .5625rem;
      top: -1.9375rem;
      width: 2.5rem;
      height: 2.5rem;
      background: url("../assets/img/logo.png") no-repeat;
      background-size: auto 2.875rem;
    }
    span {
      padding-left: 3.75rem;
      color: #000;
      line-height: 1.875rem;
    }
  }
  .header-l {
    float: left;
    div {
      width: 10.625rem;
      height: 1.875rem;
      border-radius: 0.5rem;
      border: 0.0625rem solid rgba(248, 236, 236, 0.9);
      background: rgba(248, 236, 236, 0.9);
      color: #898989;
      font-size: 0.75rem;
      line-height: 1.875rem;
      // text-align: center;
      padding-left: 1.875rem;
      position: relative;
      i {
        width: 1.875rem;
        height: 1.875rem;
        position: absolute;
        background: url("../assets/img/sousuo.png") no-repeat;
        top: 0.3125rem;
        left: 0.3125rem;
      }
    }
  }
  .header-r {
    float: right;
    width: 3.5rem;
    img{
        width: 3.125rem;
        height: 1.875rem;
        position: absolute;
        top: 0;
        right: .8125rem;
    }
  }
}
</style>

