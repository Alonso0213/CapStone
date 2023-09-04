<template>
    <div>
<navComp/>
<h2>Admin</h2>
<adminComp/>
    </div>
</template>

<script>
import navComp from '../components/navComp.vue'
import adminComp from '../components/adminComp.vue'

    export default {
        components:{
            navComp,
            adminComp
        }
    }
</script>

<style scoped>

</style>