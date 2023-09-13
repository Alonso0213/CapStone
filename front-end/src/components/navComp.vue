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
            <router-link to="/admin">Admin</router-link>
          </li>
        </ul>
        <div class="d-flex" id="side">
          <router-link to="/checkout"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></router-link>
          <router-link to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg></router-link>

            </div>
            
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
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
