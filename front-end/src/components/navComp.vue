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
            <router-link to="/checkout">Checkout</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/admin">Admin</router-link>
            <router-link to="/login">login</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Raleway:ital,wght@1,100&display=swap");
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
