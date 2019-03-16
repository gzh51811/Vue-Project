<template>
    <div class="list">
        <Ltop></Ltop>
        <Lmain></Lmain>
        


    </div>
</template>
<script>
    import Ltop from '../components/Ltop.vue'
    import Lmain from '../components/Lmain.vue'

    export default {
        components:{
            Ltop,
            Lmain
        },
        methods:{
            
        }
        
    }
</script>
<style scope>
    .list{
        overflow-y:none;
    }
    
</style>


