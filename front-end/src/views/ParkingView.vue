<template>
  <div  class="main">
   
    <h2>Parking</h2>
    <parkingComp/>
  </div>
</template>

<script>
import parkingComp from "../components/parkingComp.vue";
export default {
  components: {
    parkingComp
  },
};
</script>

<style scoped>
.main{
background: url(https://images.pexels.com/photos/5182301/pexels-photo-5182301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat;

background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h2{
  color: white;
}
</style>
