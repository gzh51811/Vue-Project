<template >
    <div class="dv3" >
       <div id='lun'>
            <mt-swipe :auto="4000" :show-indicators="false">
                <mt-swipe-item>
                    <img width='260px' src="https://p1.maiyaole.com/img/mobile/20185/1528081076647125.jpg"/>
                </mt-swipe-item>
                <mt-swipe-item>
                    <img width='260px' src="https://p1.maiyaole.com/img/mobile/20187/1533090054718241.png"/>
                </mt-swipe-item>
            </mt-swipe>
       </div>
       <Lmainr_b/>
       





    </div>
</template>
<script>
import Lmainr_b from './Lmainr_b.vue'
export default {
    components:{
        Lmainr_b
    }
    
   
}
</script>
<style lang="scss" scope >
   .dv3{
        height: 31.75rem;
        overflow-y: auto;
        background: #fff;
        padding-left:.625rem;
        #lun{
            padding:.625rem .625rem .625rem 0;
            .mint-swipe{
                height:4.0625rem !important;
                .mint-swipe-item{
                    background:#fff;
                }
            }
        }
        
        
    }
</style>