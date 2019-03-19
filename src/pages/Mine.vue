<template>
  <div>
    <!-- <div>我的</div> -->
    <login v-if="!isok"></login>
    <my v-if="isok"></my>
  </div>
</template>
<script>
import login from "../components/login.vue";
import my from "../components/my.vue";
export default {
  data() {
    return {
      isok: false
    };
  },
  components: {
    login,
    my
  }
};
</script>
