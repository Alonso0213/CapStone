<template>
    <div>
<h2>Admin</h2>
<router-link class="btn btn-info" to="/addparking">ADD Parking</router-link>
<br><br>
<router-link class="btn btn-info" to="/addUser">ADD user</router-link>
<adminComp/>
    </div>
</template>

<script>
import adminComp from '../components/adminComp.vue'

    export default {
        components:{
        
            adminComp
        }
    }
</script>

<style scoped>

</style>