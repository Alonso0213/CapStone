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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
          <li class="nav-item">
           
          </li>
        </ul>
        <div class="d-flex">
           <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
         
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
.d-flex {
  display: flex;
  gap: 1.5rem;
}
img {
  height: 4rem;
  border-radius: 4rem;
  transition: all 0.5s ease-in-out;
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
img:hover {
  transform: scale(1.2);
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
