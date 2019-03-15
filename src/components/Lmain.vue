<template >
    <div class="list-l">
       <Lmainl/>
       <Lmainr/>

    </div>
</template>
<script>
import Lmainl from './Lmainl.vue';
import Lmainr from './Lmainr.vue';

export default {
    components:{
        Lmainl,
        Lmainr

    }
}
</script>
<style lang="scss" scope >
    .list-l{
            height: 100%;
            zoom: 1;
            margin: 0 auto;
            overflow: hidden;
            margin-top:2.723625rem;
    }
</style>