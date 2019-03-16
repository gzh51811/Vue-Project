<template >
    <div class="dv3" >
        {{name}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:''
        }
    },
   mounted(){
      this.name=this.$store.state.leixing
      console.log(this.name)
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