<template>
  <nav class="navbar navbar-expand-lg text-bg-primary">
    <div class="container-fluid">
      <router-link to="/"
        ><img
          src="https://i.postimg.cc/MKd2843m/Pics-Art-08-30-12-51-50.jpg"
          alt="logo"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/parking">Parking</router-link>
            
            <router-link to="/contact">Contact</router-link>
            <router-link to="/admin" v-show="ifAdmin()">Admin</router-link>
           
          </li>
        </ul>
         
        <div class="d-flex" id="side">
          <router-link to="/singleUser"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></router-link>
          <router-link to="/checkout"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></router-link>
          <router-link to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>Login</router-link>

            </div>
            
      </div>
    </div>
  </nav>
</template>

<script>
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
export default {
  methods: {
     ifAdmin() {
      return this.results?.userRole?.toLowerCase() === "admin"
    }
  },
  computed: {
    user() {
      return this.$store.state.user||cookies.get('LegitUser')
    },
    results() {
      return this.user?.result
    },
   
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Raleway:ital,wght@1,100&display=swap");
#side{
  gap: 2rem;
}
.navbar-nav li {
  display: flex;
  gap: 1.5rem;
}
img {
  height: 4rem;
  border-radius: 4rem;
  border: 4px rgba(77, 245, 26, 0.831) solid;
  transition: all 0.5s ease-in-out;
}
img:hover {
  transform: scale(1.2);
}
input {
  width: fit-content;
}
.container-fluid {
  display: flex;
  gap: 1rem;
}
.btn {
  background-color: black;
  color: whitesmoke;
}
@media (width <= 400px) {
  img {
    height: 2.3rem;
  }

  .navbar-nav li {
    display: grid;
    font-family: Permanent Marker;
  }
  input {
    width: 9rem;
  }
}
</style>
