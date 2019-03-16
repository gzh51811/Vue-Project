<template>
    <div>
        <h3 class="lei">
           {{names[0]}}
        </h3>
        <ul>
            <li v-for="item in dataList " :key="item.id" class='lei_1'>
                <img :src="item.icon"/>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dataList:this.$store.state.leixing,
            names:this.$store.state.buwei
        }
        
    }
}
</script>
<style lang="scss" scope>
    .lei{
        color: #333;
        height:1.625rem;
        line-height: 1.5rem;
        font-size: 1rem;
        padding: 0;
        font-weight: 400;
        font-family: Microsoft YaHei,tahoma,arial;
        margin:0 .625rem 0 0;
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
    ul{
        list-style:none;
        padding:0;
        overflow: hidden;
        font-weight: 400;
        font-family: Microsoft YaHei,tahoma,arial;
        .lei_1{
            float: left;
            width: 33.33333%;
            height:5.5rem;
            text-align: center;
            margin-bottom:1.5rem;
            display: block;
            img{
                width:3.625rem;
                margin:0 .9375rem .625rem .9375rem;
            }
            span{
                display: block;
                overflow: hidden;
                font-size:.8125rem;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                color: #555;
            } 
        }
    }
</style>