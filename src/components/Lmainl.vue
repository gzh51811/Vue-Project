<template >
    <ul class="dv1" >
        <li v-for="(type,idx) in typeList" :key="idx" @click="isClick(idx)" :class="{'isactive':active==idx}">
            <span>{{type.name}}</span>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            typeList:[
                {"name":"热门类目"},
                {"name":"男科用药"},
                {"name":"神经用药"},
                {"name":"心脑用药"},
                {"name":"肝胆用药"},
                {"name":"呼吸道用药"},
                {"name":"皮肤用药"},
                {"name":"风湿骨科用药"},
                {"name":"滋补调养用药"},
                {"name":"消化道用药"},
                {"name":"五官用药"},
                {"name":"妇科用药"},
                {"name":"内分泌用药"},
                {"name":"肿瘤用药"},
                {"name":"对症找药"},
                {"name":"营养保健"},
                {"name":"维生素钙"},
                {"name":"隐形眼镜"},
                {"name":"医疗器械"},
                {"name":"成人用品"},
                {"name":"美妆个护"},
                {"name":"母婴用品"},
                {"name":"海外购"}
            ],
            active:0
                
        }
    },
    methods:{
        isClick(idx){
            this.active=idx;
        }
    }

    










}
</script>
<style lang="scss" scope >
    .dv1{
        height: 35.3125rem;
        overflow: auto;
        list-style: none;
        width: 25%;
        float: left;
        padding:0;
        margin:0;
        text-decoration: none;
        border-right: 1px solid rgba(0,0,0,.1);
        li{
            padding:0 .625rem;
            border-bottom: 1px solid rgba(0,0,0,.1);
            line-height:2.5rem;
            color: #333;
            font-weight: 400;
            font-size:.9375rem;
            span{
                display:block;
                width:4.375rem;
                overflow:hidden;
                height:2.5rem;
            }
        }
        .isactive{
            color: #f66;
            background: #fff;
            border-left: 2px solid #f66;
        }
    }
</style>