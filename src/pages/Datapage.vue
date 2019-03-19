<template>
    <div>
        <!--头部-->
        <div class='totop'>
            <div class="backer" onclick="javascript: window.history.back();"><img src="../assets/img/back.png" /></div>
            <ul class="top_c">
                <li class="is_active si_top">商品</li>
                <li class="is_top">详情</li>
                <li class="is_top">评价</li>
            </ul>
            <div class="more"><img src="../assets/img/more.png" /></div>
        </div>

        <!--底部-->
        <div class='tobuttom'>
            <ul class="buttom_c">
                <li class="is_buttom">客服</li>
                <li class="is_buttom">收藏</li>
                <li class="is_buttom" @click="gotocart()">购物车</li>
                <li class="is_buttomlast" >加入购物车</li>
            </ul>
        </div>

        <!--中间内容-->
        <div class="is_center">
            <div class="is_pic">
                <img class="pic_pic" :src="res.imgurl" />
            </div>
            <div class="c_sait">解热镇痛。用于感冒引起的头痛，发热，鼻塞，流涕，咽痛。
			    <a class="c_sa" href="javacript:void(0)">【常见病用药凑单专区，点击查看>>>】</a>

			</div>
            <div class="pro_title">
                <h1>
                    <span >
                        <img class="icon_ziying" src="../assets/img/ziyin.png" />
                    </span>
                    {{res.name}}
                </h1>
            </div>
            <p class="c_price">￥{{res.price}}</p>
            <p class="c_ben">本商品有1药网发货销售</p>
            <p class="c_ben">批准文字：国药准字Z44082319 <a href="javacript:void(0)">(国家食药局查询)</a></p>
            <div class="c_baoyou">
                <span class="spans"><img src="../assets/img/gou.png" /></span>
                <span  class="spanss spans">满69包邮</span>
                <span class="spans"><img src="../assets/img/gou.png" /></span>
                <span class="spanss spans">正品认证</span>
                <span class="spans"><img src="../assets/img/gou.png" /></span>
                <span class="spanss spans">药品局监证</span>
            </div>
            <p class="c_ben" style="font-size:16px;color:#FF6666;">推荐装</p>
            <div class="c_tuijian">
                <span class="span3">3件 | ￥12.60*1件</span>
                <span class="span3">6件 | ￥11.60*1件</span>
            </div>
            <div class="c_dianping">
                <span class="c_yaoshi"><img src="../assets/img/dianping.png" />
                </span ><span class="c_yaoshi">药师点评</span>
                <p style="font-size:14px;color:#8193AC;">暂无</p>

            </div>
            <div class="c_morepic">
                <img src="https://img.alicdn.com/imgextra/i1/2928278102/TB2qRP7cW8lpuFjy0FpXXaGrpXa-2928278102.jpg" />
                <img src="https://img.alicdn.com/imgextra/i1/2928278102/TB2GDY2cYXlpuFjy1zbXXb_qpXa-2928278102.jpg" />
                <img src="https://img.alicdn.com/imgextra/i4/2928278102/TB2pb6odJBopuFjSZPcXXc9EpXa-2928278102.jpg" />
                <img src="https://img.alicdn.com/imgextra/i4/2928278102/TB2s4fJc3JkpuFjSszcXXXfsFXa-2928278102.jpg" />
            </div>
            <div class='c_b'></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            res:''
        }
    },
    methods:{
        gotocart(){
            this.$router.push({name:'Cart'})
        }
    },
    created(){
        this.res=this.$route.query
        // console.log(this.res)
    }
}
</script>
<style lang="scss" scoped>
    .totop{
        position: fixed;
        top: 0;
        left: 0;
        border-bottom:.0625rem solid #ccc;
        z-index: 8;
        width: 100%;
        height: 2.8125rem;
        background: #F9F9F9;
        display:flex;
        justify-content:space-between;
        .backer{
           padding:.4375rem 0 0 .625rem;
        }
        .more{
            padding:.875rem .625rem  0 0;
        }
        .top_c{
            margin:0 0 0 -25px;
            height:2.8125rem;
            line-height:2.8125rem;
            display:flex;
            align-items:center;
            .is_top{
                color: #414141;
                margin-left:1.5625rem;
                padding:.5625rem 0;
            }
            .is_active{
                color: #FF6666;
            }
        }
    }   
    //底部样式
    .tobuttom{
        position: fixed;
        bottom: 0;left: 0;
        width:100%;height:3.4375rem;
        border:.0625rem solid #ccc;
        background: #F9F9F9;
        .buttom_c{
            margin:0;
            display:flex;
            height:100%;
            text-align:center;
            .is_buttom{
                flex:1;
                height:100%;
                border-right:1px solid #ccc;
                line-height:3.4375rem;
                
            }
            .is_buttomlast{
                height:100%;
                line-height:3.4375rem;
                flex:2;
                background::#FF6666;
                color:#fff;
            }

        }
    }
    //中间部分
    .is_center{
        padding:2.8125rem 0 3.4375rem 0;
        .is_pic{
            width:100%;height:15rem;
            display:flex;
            justify-content:center;
            .pic_pic{
                width:15rem;
            }
        }
        .c_sait{
            padding:1.875rem .9375rem 1.25rem .9375rem;
            font-size: .875rem;
            color: #FF6666;
            background: #fff;
           
            .c_sa{
                text-decoration: underline;
                color: #FF6666;
            }
        }
        .pro_title{
            // height:1.875rem;
            padding:.625rem;
            border-top:.3125rem solid #F9F9F9;
            border-bottom:1px solid #ccc;
            h1{
                margin: 0;
                padding: 0;
                font-weight: 400;
                font-family: Microsoft YaHei,tahoma,arial;
                line-height:2.5rem;
                font-size:1rem;
                font-style:normal;
                .icon_ziying{
                    vertical-align:middle;
                }
            }
        }
        .c_price{
            margin:.625rem .625rem;
            height:1.625rem;
            font-size:1.5rem;
            color:#FF6666;
        }
        .c_ben{
            padding:0 0 .625rem .625rem ;
            color: #808080;
            font-size: .875rem;
            margin:0;
            line-height:1.25rem;
            a{
                text-decoration:none;
                color:#3987F4;
                padding-left:.625rem;
            }
        }
        .c_baoyou{
            padding: .3125rem 0 .9375rem .625rem;
            .spans{vertical-align:top;}
            .spanss{
                color:#676767;
                font-size:.9375rem;
                padding: 0 .5rem 0 0;
            }
                
            
        }
        .c_tuijian{
            height:2.8125rem;
            display:flex;
            justify-content:space-around;
            border-bottom:2px solid #ccc;
            .span3{
                display:block;
                background: #F8F8F8;
                border: 1px solid #DFDFDF;
                border-radius: 15px;
                padding: 0 .9375rem;
                font-size:.875rem;
                float: left;
                height: 1.875rem;
                line-height: 1.875rem;
            }
        }
        .c-b{
            width:100%;height:3.4375rem;
        }
        .c_dianping{
            height:4.125rem;
            background:#F7FAFF;
            padding:1rem 0 0 .625rem;
            .c_yaoshi{
                 vertical-align:top;
                 color:#3987F4;font-size:14px;
            }
        }
        .c_morepic{
            padding: 1.875rem .625rem ;
            
            img{
            width:95%;

            }
        }
    

    }
</style>