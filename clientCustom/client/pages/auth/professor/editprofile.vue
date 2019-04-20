<template>
   <div class="text-center vh-100">
        <h1>Edit profile</h1>
        <h1>{{ username }}</h1>
  </div>
</template>

<script>
export default {
  middleware:'isAuth',
  computed: {
    username() {
      return this.$store.getters["auth/username"];
    }
  }
};
</script>

<style scoped>

</style>