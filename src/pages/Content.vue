<template>
<div>
    <div id="top">
        <div class="seachdrug">
            <i onclick="javascript: window.history.back();" class="goback"><img src="../assets/img/back.png"/></i>
            <div class="search_box">
                <i><img src="../assets/img/0.png" class="fang"/></i> 
                <input  type="seach"  placeholder="搜索" class="search_box_input">
            </div>
            <i class="carts"><img src="../assets/img/cart.png"/></i>
        </div>
        <ul class="ganmao">
            <li>感冒</li>
            <li>综合排序</li>
            <li>列表</li>
            <li>筛选</li>
        </ul>
        <ul class="search_filter_tab2_ul">
            <li class="tab2"><span>自营</span></li> 
            <li class="tab2"><span>促销</span></li> 
            <li class="tab2"><span>品牌</span></li> 
            <li class="tab2"><span>价格</span></li> 
        </ul> 
        <Contentb/>
    </div>
   
  </div>
</template>
<script>
import Contentb from '../components/Content_b.vue'
  export default {
    components:{
        Contentb
    }
  }
</script>
<style lang='scss' scoped>

    #top{
        width:100%;
        position:fixed;top: 0rem;left:0;
        .seachdrug{
                height:2.375rem;width:100%;
                background: #f9f9f9;
                border: .0625rem solid #e7e7e7;
                display:flex;
                justify-content:space-between;
                .goback{margin-top:.1875rem;}
                .search_box{
                    height: 1.875rem;
                    width: 72%;
                    margin-top:.25rem;
                    border-radius: 1.0625rem;
                    background: #ebebeb;
                    display:flex;
                    justify-content:flex-start;
                    .fang{margin-left:.3125rem;}
                    .search_box_input{
                        outline:none;
                        border:none;
                        background:none;
                        margin-left:.625rem;
                        font-size:17px;
                        padding-left:.3125rem;
                    }
                }
                .carts{
                    margin:.1875rem .5rem 0 0;
                }  
        }
        .ganmao{
            width:100%;height:2.9375rem;
            display:flex;
            justify-content:space-around;
            border-bottom: .0625rem solid #e7e7e7;
            margin:0;line-height:2.9375rem;
            font-size:.875rem;
            font-weight: 400;
            font-family: Microsoft YaHei,tahoma,arial;

        }
        .search_filter_tab2_ul{
            width:100%;height:2.6875rem;
            display:flex;
            justify-content:space-around;
            border-bottom: .0625rem solid #e7e7e7;
            margin:0;
            .tab2{
                flex:1;margin:.5rem 0 .5rem .5rem;
                span{
                    display:block;
                    width:90%;height:100%;
                    background: #f8f8f8;
                    text-align:center;
                    border-radius:.3125rem;
                    font-weight: 400;
                    font-size:.8125rem;
                    line-height:1.6875rem;
                    font-family: Microsoft YaHei,tahoma,arial;
                }
            }
        }
    } 
                
               
               
                
                


                
                
                
                
                



               
</style>