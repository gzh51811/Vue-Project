<template>
    <div class="top">
        <div class="first">
            <span >

            </span>
        </div>
        <div class="secend"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodlist:[]
        }
    },
    created(){
        this.$axios.get("http://localhost:3000/setting/Swipe",{
            params:{
                
            }
        }).then((response)=>{
            // console.log(response.data[0].data.goodTopic);
            let goodlist = response.data[0].data.goodTopic;
             console.log(goodlist)
        })
    }
}
</script>
<style lang="scss" scoped>
    .top{
        width: 100%;
        height: 31.25rem;
        
        div .first{
            width: 100%;
            height: 6.25rem;
            background: #cdcdcd;
        }
        div .secend{
            width: 100%;
            height: 6.25rem;
            background: red;
        }
    }
</style>


