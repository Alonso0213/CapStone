<template>
  <div class="main">
    <h2>Parking</h2>
    <form class="d-flex" role="search" @submit.prevent="performSearch">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchTerm"
      />
      <button class="btn text-bg-danger btn-outline-success" type="submit">
        Search
      </button>
    </form>
    <button class="sort" @click="SortName">sort by parkingNumber</button>
    <button class="sort" @click="SortPrice">sort by price</button>
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
    performSearch() {
      this.$store.dispatch("searchProducts", this.searchTerm);
    },
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
.main {
  background: url(https://images.pexels.com/photos/5182301/pexels-photo-5182301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
    no-repeat;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h2 {
  color: white;
}
input{
  width: 30%;
}
.d-flex{
  display: flex;
  justify-content: right;
}
</style>
