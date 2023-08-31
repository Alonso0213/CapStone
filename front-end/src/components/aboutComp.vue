<template>
    <div>
      
        <body class="container-fluid" id="back">
          <div class="color container-fluid">
        <h2 class="animate__animated animate__fadeInUp">Who are we</h2>
        <div class="row">
          <div class="col">
            <img
              class="img1 animate__animated animate__flipInX"
              src="https://i.postimg.cc/BbsMVd9L/parking-lot-with-many-cars-one-that-says-car-parking-it-883586-1139.jpg"
              alt="img"
              loading="lazy"
            />
            <div class="col">
              <br />
              <p col-3>
                Empower Cape Town's residents and visitors with a user-friendly web app <br> that streamlines the process of booking parking spots, ensuring convenience, accessibility, <br> and peace of mind in navigating the city's parking challenges.

              </p>
            </div>
          </div>
        </div>
  
        <h2>Our Mission</h2>
        <div class="row">
          <div class="col">
            <img
              class="img1"
              src="https://i.postimg.cc/3JyrGLng/parkingg.gif"
              alt="img"
              loading="lazy"
            />
            <div class="col">
              <br />
              <p col-3>
                Parscape is committed to transforming the parking experience in Cape Town. Through our intuitive web app,<br> we offer convenient and customized parking solutions.  Our platform ensures efficiency, reliability, and community engagement. <br> We strive to contribute to sustainability and innovation while providing exceptional customer support. <br> Our ultimate goal is to redefine urban parking, making it seamless and empowering for all.

              </p>
            </div>
          </div>
        </div></div>
      </body>
      
    </div>
  </template>
  
  <script>
  export default {
    
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Raleway:ital,wght@1,100&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@1,300&family=Raleway:ital,wght@1,100&display=swap');
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .col {
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  img {
    height: 22rem;
    border-radius: rem;
  }

  
  p {
    font-family: Alegreya Sans;
    font-size: x-large;
    color: white;
  }
  h2 {
   text-decoration: underline;
    color: white;
    font-family:Black Ops One;

  }
  
  #back{
    background-color:rgba(45, 18, 163, 0.893);
  }
  @media (width <= 620px) {
    .img1{
     height: 12rem;
    }
    
   }
   @media (width <= 330px) {
    .img1{
     height: 9rem;
    }
    
   }
  </style>
  