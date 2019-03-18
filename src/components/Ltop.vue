<template>
     <div> 
        <seach/>
        <div class="ltop">
            <img src="../assets/img/go.png" width="100%">
        </div>
    </div>
</template>
<script>
import Seach from './Xseach1.vue'
export default {
    components:{
        Seach
    }
}
</script>
<style scope >
    .ltop{
        position:fixed;
        top:3rem;
        width:100%;
    }
</style>