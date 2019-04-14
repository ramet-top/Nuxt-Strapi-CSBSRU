<template>
    <div>
        <div v-if="username">profile</div>
        <h1 v-if="username == 'top' ">TTOOPP</h1>
        <!-- <div v-else-if="advisor">advisor_profile</div> -->
        <!-- <div v-else-if="admin">admin_dashboard</div> -->
        
        <!-- <div v-else>Home</div> -->
       <h1> Username::{{ username }}</h1>
       <h1>Email:: {{ email }}</h1>
    </div>
</template>

<script>

    export default {
        computed: {
            username(){
                return this.$store.getters['auth/username']
            },
            email(){
                return this.$store.getters['auth/email']
            }
        },
    }
</script>

<style scoped>

</style>