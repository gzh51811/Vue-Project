<template>
  <div id="top">
      <div class="seachdrug">
          <i><img src="../assets/img/back.png"/></i>
          <div class="search_box">
              <i><img src="../assets/img/0.png" height='1.75rem'/></i> 
              <input id="searchKeyInput" type="search" autocomplete="off" placeholder="搜索" class="search_box_input">
          </div>
          <i class="carts"><img src="../assets/img/cart.png"/></i>
      </div>
      <ul class="paixu">
          <li class="ziyin">感冒</li>
          <li class="ziyin">综合排序</li>
          <li class="ziyin">列表</li>
          <li class="ziyin">筛选</li>
      </ul>
      <ul class="search_filter_tab2_ul">
        <li class="ziyin1"><span>自营</span></li> 
        <li class="ziyin1"><span>促销</span></li> 
        <li class="ziyin1"><span>品牌</span></li> 
        <li class="ziyin1"><span>价格</span></li> 
      </ul>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style lang='scss' scoped>
    #top{
          position:fixed;top: 0rem;left:0;
          .seachdrug{
                    height:2.375rem;width: 43.75rem;
                    background: #f9f9f9;
                    border: .0625rem solid #e7e7e7;
                    position: fixed;
                    left: 0 ;
                    top: 0;
                    .carts{
                        position:relative;
                        top:0rem;left:19.0625rem;
                        
                    }
                   .search_box{
                            height: 1.875rem;
                            width: 17.5rem;
                            border-radius: 1.0625rem;
                            background: #ebebeb;
                            position: absolute;
                            top:.25rem;left:2.75rem;
                            i{
                                position:absolute;
                                top:0;left:.6875rem;
                            }
                            #searchKeyInput{   
                                font-size: 1rem;
                                color: #333;
                                height: 1.75rem;
                                width: 11.8125rem;
                                border: 0;
                                background: #ebebeb;
                                overflow: hidden;
                                display:block;
                                z-index: 0;
                                margin:0  0 0 2.5rem;
                            }
                    }  
            }
            .paixu{
                margin:0;
                list-style: none;
                height: 3rem;
                padding:0;
                border-bottom: .0625rem solid #e7e7e7;
                overflow: hidden;
                width:100%;
                position:fixed;top:2.4375rem;left:0;
                .ziyin{
                    font-size: .9375rem;
                    float: left;
                    text-align: center;
                    line-height: 3rem;
                    padding:0 1.6875rem;
                    font-weight: 400;
                    font-family: Microsoft YaHei,tahoma,arial;
                }
            }
            .search_filter_tab2_ul{
                    position:fixed;top:5.5rem;left:0;
                    padding-left:0;
                    list-style: none;
                    height: 2.6875rem;
                    padding-top:.5rem;
                    margin:0 .5rem;
                    .ziyin1{
                        line-height: 1.75rem;
                        float: left;
                        height: 1.75rem;
                        padding:0 1.9375rem;
                        font-size: .8125rem;
                        text-align: center;
                        background: #f8f8f8;
                        border-radius: .1875rem;
                    }

            }
    } 
                
               
               
                
                


                
                
                
                
                



               
</style>