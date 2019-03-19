<template>
<div>详情页</div>
</template>
<script>
export default {
    created() {
      // debugger
      this.$axios.get('http://localhost:3000/setting/Swipe', {
        params: {
        }
      }).then( (response) =>{
          console.log(666)
      
      
        })
    }
    
}
</script>