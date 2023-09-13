<template>
  <body class="container-fluid">
    <router-link to="/checkout"
      ><h2>
        {{ cart.length }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-cart4"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
          />
        </svg></h2
    ></router-link>
    <div class="container-fluid">
      <div class="row" v-if="parkings">
        <div class="col" v-for="parking in parkings" :key="parking.parkingID">
          <div class="card border-danger" style="width: 18rem">
            <img
              :src="parking.parkingImg"
              class="img-top"
              alt="img"
              loading="lazy"
            />
            <div>
              <h5 class="card-title">Parking {{ parking.parkingNum }}</h5>

              <p class="card-text">
                <span> R{{ parking.price }}</span>
              </p>

              <router-link
                :to="{
                  name: 'singlePage',
                  params: { id: parking.parkingID },
                  query: {
                    name: parking.parkingNum,
                    img: parking.parkingImg,
                    amount: parking.price,
                  },
                }"
                ><button class="view">View</button></router-link
              >
              <button @click="Add2Cart(parking)">Add2Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <spinnerComp />
      </div>
    </div>
  </body>
</template>

<script>
import spinnerComp from "./spinnerComp.vue";
export default {
  components: {
    spinnerComp,
  },
  computed: {
    parkings() {
      return this.$store.state.parkings;
    },
  },
  mounted() {
    this.$store.dispatch("fetchParkings");
  },
  data: () => {
    return {
      cart: [],
    };
  },
  methods: {
    Add2Cart(parking) {
      this.cart.push(parking);
      console.log(this.cart);
      localStorage.setItem("cart", JSON.stringify(this.cart))

    },
  },
};
</script>

<style scoped>
body {
  background: url(https://images.pexels.com/photos/5182301/pexels-photo-5182301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
    no-repeat;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h2 {
  color: white;
  display: flex;
  justify-content: right;
}
</style>
