<template>
  <div>
    <navComp/>
   <router-view />
    <FooterComp />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>

<script>
import FooterComp from "@/components/FooterComp.vue";
import navComp from "./components/navComp.vue"
export default {
  components: {
    navComp,
    FooterComp

  },
};
</script>
