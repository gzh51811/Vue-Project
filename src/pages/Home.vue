<template>
    <div>
        <Xheader></Xheader>
        <Swipe></Swipe>
        <Navs></Navs>
        <More></More>
        <special></special>
        <Msg></Msg>
        
    </div>

</template>
<script>
import Xheader from '../components/Xheader.vue';
import Swipe from '../components/Swipe.vue';
import Navs from '../components/Navs.vue';
import More from '../components/More.vue';
import special from '../components/special.vue';
import Msg from '../components/Msg.vue';
export default {
    components:{
        Xheader,
        Swipe,
        Navs,
        More,
        special,
        Msg
        
    }
}
</script>


