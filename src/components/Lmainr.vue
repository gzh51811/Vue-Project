<template >
    <div class="dv3" >
        {{name}}
        <button @click='jump()'>跳详情页</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
        jump(){
            this.$router.push('/content')
        }
    },
   mounted(){
      this.name=this.$store.state.leixing
      
    }
}
</script>
<style lang="scss" scope >
   .dv3{
            height: 100%;
            overflow-y: auto;
            background: #fff;
        }
</style>