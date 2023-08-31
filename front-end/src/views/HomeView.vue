<template>
  <body>
    <navComp/>
    <h2>Home</h2>
    <div>
      <p>Why look for a parking spot when you got a car park booking system</p>
</div>
  </body>
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
body{
  background: url(https://i.postimg.cc/Gh6vSwCX/Home-page-pic.jpg)no-repeat;
  width:fill;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
p{
  display: grid;
  justify-content: center;
  font-size: xx-large;
  color: white;
}

</style>