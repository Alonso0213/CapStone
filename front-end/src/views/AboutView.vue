<template>
  <div class="about">
    <navComp/>
    <h2>About</h2>
<aboutComp/>
  </div>
</template>
<script>
import navComp from "@/components/navComp.vue";
import aboutComp from "@/components/aboutComp.vue";
export default {
  components: {
    navComp,
    aboutComp
  },
};
</script>
<style scoped> 
.about{
  background-color: rgb(136, 146, 156);
}
</style>
