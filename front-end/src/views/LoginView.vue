<template>
  <div>
    <loginNavComp/>
    <h2>Login</h2>
    <loginFormComp />
  </div>
</template>

<script>
import loginFormComp from "@/components/loginFormComp.vue";
import loginNavComp from "@/components/loginNavComp.vue";
export default {
  components: {
    loginFormComp,
    loginNavComp
  },
};
</script>

<style scoped></style>
