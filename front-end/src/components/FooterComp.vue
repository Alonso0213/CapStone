<template>
  <footer
    class="bd-footer py-4 py-md-5 mt-10 text-bg-primary"
    data-bs-theme="dark"
  >
    <div class="space">
      <div class="bot">
        <h6>Alonso Cupido</h6>
        <h6>alonsocupido51@gmail.com</h6>
        <h6>061 460 5377</h6>
      </div>

      <center>
        <img
          class="logo"
          src="https://i.postimg.cc/MKd2843m/Pics-Art-08-30-12-51-50.jpg"
          alt="logo"
        />
      </center>
      <center><p>Limitless ©copyright 2023</p></center>
      <p>
        Rights reserved by <br />
        Alonso Cupido
      </p>
      <div class="socails">
        <a href="#">
          <img
            src="https://i.postimg.cc/PJjw68bK/2021-Facebook-icon-svg.png"
            loading="lazy"
            alt="icon"
        /></a>
        <a href="#"
          ><img
            src="https://i.postimg.cc/TPKghxYj/instagram-icon-logo-free-png.webp"
            loading="lazy"
            alt="icon"
        /></a>
        <a href="#"
          ><img
            src="https://i.postimg.cc/sgDpdSkN/702300.png"
            alt="icon"
            loading="lazy"
        /></a>
      </div>
    </div>
    <div class="line"></div>
  </footer>
</template>


<script>
export default {};
</script>

<style scoped>
.copy {
  text-align: center;
}

.logo {
  display: flex;
  justify-content: center;
  margin-top: -90px;
  border: 4px rgba(77, 245, 26, 0.831) solid;
  width: 4rem;
  height: 4rem;
}

.bot {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: -20px;
  width: 200px;
  color:rgba(245, 245, 245, 0.936);
}

img {
  height: 5rem;
  border-radius: 6rem;
  transition: all 0.3s ease-in-out;
}
img:hover {
  transform: scale(1.5);
}

.space {
  display: grid;
}
.word {
  color: aliceblue;
}
.line {
  border-bottom: 2px solid rgb(255, 255, 255);
  margin-top: 5px;
  width: 100%;
}
p {
  color: white;
  margin-top: -20px;
}
.socails img {
  height: 2.4rem;
  margin-top: -50px;
  margin-left: 10px;
}
.socails {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

@media (width <= 624px) {
  .socails {
    margin: 30px;
  }

  p {
    margin: auto;
  }
  .bot {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    margin-top: -20px;
    width: 200px;
    color: rgba(255, 255, 255, 0.418);
  }
  .logo {
    margin-top: 45px;
  }
}
</style>
