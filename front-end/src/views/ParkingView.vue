<template>
  <div class="main">
    <h2>Parking Spots</h2>
    <br />
    <div class="space">
      <button class="sort" @click="SortName">Sort by Number</button>
      <button class="sort1" @click="SortPrice">Sort by price</button>
    </div>
    <parkingComp />
  </div>
</template>

<script>

import parkingComp from "../components/parkingComp.vue";
export default {
  components: {
    parkingComp,
  },
  methods: {
    SortName() {
      this.$store.dispatch("FilterName");
    },
    SortPrice() {
      this.$store.dispatch("FilterPrice");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@1,300&family=Anton&family=Chakra+Petch:wght@300&family=Josefin+Sans:wght@100&family=Raleway:ital,wght@1,100&display=swap');
.main {
  background-color: rgb(26, 26, 28);
}
h2 {
  color: white;
  font-family: Josefin Sans;
}
input {
  width: 30%;
}
.d-flex {
  display: flex;
  justify-content: right;
}
.sort {
  background-color: #2d9e9e;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 3rem;
}
.sort1 {
  background-color: #2d9e9e;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 3rem;
}
.sort1:hover {
  background-color: grey;
  color: white;
}
.sort:hover {
  background-color: grey;
  color: white;
}
.space {
  display: flex;
  gap: 1rem;
}
</style>
