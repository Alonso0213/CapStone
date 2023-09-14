<template>
  <div class="main">
    <h2>Parking</h2>
<form class="d-flex" role="search" @submit.prevent="filterProducts">
        <input class="form-control me-2" type="search" placeholder="Search Product" aria-label="Search" v-model="searchInput">
      </form>
    <br>
    <div class="space">
    <button class="sort" @click="SortName">sort by parkingNumber</button>
    <button class="sort1" @click="SortPrice">sort by price</button>
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
    data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    filterProducts() {
      const searchQuery = this.searchInput.toLowerCase();
      return this.$store.state.products.filter((product) => {
        const productName = product.prodName.toLowerCase();
        const category = product.Category.toLowerCase();
        return (
          productName.includes(searchQuery) || category.includes(searchQuery)
     
        );
      });
    },
  },
    SortName() {
      this.$store.dispatch("FilterName");
    },
    SortPrice() {
      this.$store.dispatch("FilterPrice");
    },
  },
  computed: {
    filteredProducts() {
      if (this.searchInput) {
        return this.filterProducts();
      } else {
        return this.products;
        
      }
    },
  },
  }
</script>

<style scoped>
.main {
  background-color: rgb(26, 26, 28);
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
.sort{
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
.sort1{
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
.sort1:hover{
  background-color: grey;
  color: white;
}
.sort:hover{
  background-color: grey;
  color: white;
}
.space{
  display: flex;
  gap: 1rem;
}
</style>
