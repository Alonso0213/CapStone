<template>
  <div class="main">
    <div>
      <h1 class="text-center p-3 heading-text text-white">My Account</h1>
      <div class="card mx-auto my-3 p-5 w-75 user-card p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
        <div class="m-3 text-center">
          <img
            :src="$store.state.user?.userProfile"
            :alt="$store.state.user?.firstName"
            class="img-fluid mb-5"
           
          />
          <h2 class="text">
            {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
          </h2>
          <cite>{{ $store.state.user?.userRole }}</cite>
        </div>
        <div>
          <div class="card mb-5 p-3 info-card p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
            <span
              ><strong>User ID: </strong>{{ $store.state.user?.userID }}</span
            >
            <br />
            <br />
            <span
              ><strong>Email: </strong>{{ $store.state.user?.emailAdd }}</span
            >
            <br />
            <br />
           
          </div>
          <div class="d-flex justify-content-between">
            <update-user-comp class="btn edit-btn" />
            <button
              type="submit"
              class="btn del-btn btn btn-outline-warning"
              @click="Logout(user.userID)"
            >
            Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 
  methods: {
    async Logout() {
      try {
      this.$store.dispatch("Logout");
        this.$router.push({ name:"login"  })
      }
      catch (err) {
      console.log(err);
    }
      
    
  },
  },
  created() {
    const saveData = localStorage.getItem("user");
    if (saveData) {
      this.user = JSON.parse(saveData);
    }
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.$store.commit("setUser", data);
    }
  },
};
</script>
<style scoped>
.img-fluid.mb-5 {
  height: 20rem;
  border-radius: 50rem;
}

.main{
background-color: rgb(31, 30, 30);
color: white;
}
.text{
  color: white;
}
cite{
   color: white;
}
span{
   color: white;
}
@media (width <= 590px) {
.img-fluid.mb-5 {
  height: 12rem;
  border-radius: 50rem;
}
}
@media (width <= 447px) {
.img-fluid.mb-5 {
  height: 7rem;
  border-radius: 50rem;
}
}
@media (width <= 315px) {
.img-fluid.mb-5 {
  height: 5rem;
  border-radius: 50rem;
}
}
</style>
