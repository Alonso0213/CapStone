<template>
  <div  class="main">
    <navComp />
    <h2>Parking</h2>
  </div>
</template>

<script>
import navComp from "@/components/navComp.vue";

export default {
  components: {
    navComp,
  },
};
</script>

<style scoped>
.main{
background: url(https://images.pexels.com/photos/5182301/pexels-photo-5182301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat;
height: 80vh;
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h2{
  color: white;
}
</style>
