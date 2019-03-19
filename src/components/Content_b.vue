<template>
<div>
    <div class="goodslist" v-for="(it,idx) in goodsList" :key="idx"
     @click="todatalists(it.names,it.img,it.price,it.userGrade)"
     >
        <div class="pic"><img :src="it.img" width='10px'/></div>
        <div class="gright">
           <h2 class="goods_name"><i class="yin"></i>{{it.names}}</h2>
            <div class="pro_type"><img src="../assets/img/zhongchengyao.png"/></div>
            <div class="pro_promotion_type"><img src="../assets/img/taocan.png"/></div>
            <span class="price">¥<i class="pnum">{{it.price}}</i></span><br/>
            <span class="review_num">{{it.userGrade}}条评论&nbsp;&nbsp;好评率99.22%
                <img class="add_cart" src="../assets/img/redcart.png"/>
            </span>
        </div>
    </div>
</div>


</template>
<script>
export default {
    computed: {
        goodsList(){
            if(this.$route.query.name=='感冒'){
                return(
                    this.$store.state.ganmao
                )
            }else{
                return(
                    this.$store.state.xiaoquang
                )
            }
        }
    },
    methods:{
        todatalists(name,imgurl,price,haoping){
            this.$router.push({path:'/datalists',query:{name,imgurl,price,haoping}})
        }
    }
    
    
}
</script>
<style lang="scss" scoped>
    .goodslist{
        width:100%;height:8.75rem;
        border-bottom:1px solid #ccc;
        display:flex;
        .pic{
            width:27%;
            overflow:hidden;
            padding:1.8125rem .625rem;
            img{width:5rem; }
        }
        .gright{
           width:72%;
           height:100%;
           padding:.625rem .5rem 0 0;
           .goods_name{
               display:block;
                font-size:.875rem;
                line-height:1.25rem;
                margin:0;
                max-height: 2.5rem;
                overflow: hidden;
                padding-left:1.9125rem;
                font-weight: 400;
                font-family: Microsoft YaHei,tahoma,arial;
                position:relative;
                .yin{
                    position:absolute;top:.125rem;left:0;
                    display:block;
                    width:1.8125rem;height:1rem;
                    background: url("../assets/img/yin.png")0 0 no-repeat;
                    
                }
           }
           .pro_type{margin-top:.25rem;height:1rem;}
           .pro_promotion_type{margin-top:.25rem;height:1rem;}    
           .price{
               color: #f66;font-size:.625rem;
               .pnum{
                    font-style: normal;
                    font-size:1.125rem;
               }

           }
           .review_num{
                color: #999;
                font-size:8px;
                vertical-align:middle;
           }
           .add_cart{
              position: absolute;
                right:.9375rem;
                vertical-align:middle;
           }
               
           
       }
    }
</style>