<template>  
    <!-- <h3>Hi</h3> -->
    <Login/>  
</template>

<script>
import Login from "~/components/auth/login.vue";

export default {
  layout:'layout_login_only',
  middleware:'afterAuth',
  components: {
    Login
  }
};
</script>

<style scoped>
  
</style>