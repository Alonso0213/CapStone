<template>
    <body>
      <h2>Parking {{ $route.query.name }}</h2>
      <div class="card text-center">
        <div class="card-header">
          <img
            :src="$route.query.img"
            class="card-img-top"
            :alt="$route.query.img"
            style="width: 40rem "
            
          />
        </div>
  
        <h5 class="card-title">No. {{ $route.query.name }}</h5>
        <p class="card-text">
          <span> R{{ $route.query.amount }}</span>
        </p>
  
        <div class="card-footer text-body-secondary">
          <router-link to="/parking" class="btn btn-primary">Back</router-link>
          <br />
        </div>
      </div>
    </body>
  
  </template>
  
  <script>
  export default {
    data: () => {
        return {
        cart:[],
      }
    },
    methods: {
        Add2Cart(parkings) {
        console.log($route.query.name);
        this.cart.push(parkings)
        console.log(this.cart);
      }
    }
  };
  </script>
  
  <style scoped></style>

  