<template>
    <body class="container-fluid">
      <div class="container-fluid">
        <div class="row" v-if="parkings">
          <div class="col" v-for="parking in parkings" :key="parking.parkingID">
            <div class="card border-danger" style="width: 18rem">
              <img :src="parking.parkingImg" class="img-top" alt="img" loading="lazy"/>
              <div
              >
                <h5 class="card-title">Parking {{ parking.parkingNum }}</h5>
                
                <p class="card-text">
                  <span> R{{ parking.price }}</span>
                </p>
                
                <router-link
                  :to="{
                    name: 'singlePage',
                    params: { id: parking.parkingID },
                    query: {
                      name:parking.parkingNum,
                      img: parking.parkingImg,
                      amount: parking.price,
                    },
                  }"
  
                  ><button class="view">Book now</button></router-link
                  >
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <spinnerComp/>
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
  };
  </script>
  
  <style scoped>
  body{
    background: url(https://images.pexels.com/photos/5182301/pexels-photo-5182301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat;

    background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    h2{
      color: white;
    }
  </style>