<template>
  <div>
    <body>
      <div class="container">
        <div class="forms">
          <div class="login-form">
            <span class="title"> Login Form </span>

            <form action="#">
              <div class="input-field">
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  id="txtUsername"
                />
              </div>
              <div class="input-field">
                <input
                  type="password"
                  class="password"
                  placeholder="Enter your password"
                  required
                  id="txtPassword"
                />
              </div>

              <div class="input-field button">
                <input type="button" value="Login" @click="validate()"/>
              </div>
            </form>

            <div class="login-signup">
              <span class="text">
                Not a member?
                <a href="#" class="text signup-text"> Signup now </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: rgb(57, 63, 216);
}

.container {
  position: relative;
  max-width: 430px;
  width: 100%;
  background: white;
  box-shadow: black;
  border-radius: 10px;
}

.container .login-form {
  padding: 30px;
}

.container .login-form .title {
  position: relative;
  font-size: 27px;
  font-weight: 600;
}
.login-form .title::before {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  background-color: #4070f4;
  border-radius: 25px;
}

.login-form .input-field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 30px;
}

.input-field input {
  height: 100%;
  width: 100%;
  padding: 0 35px;
  border: none;
  outline: none;
  font-size: 16px;
  border-bottom: 2px solid #ccc;
  border-top: 2px solid transparent;
  transition: all 0.4s ease;
}

.input-field input:is(:focus, :valid) {
  border-bottom-color: #4070f4;
}

.login-form .button {
  margin-top: 35px;
}

.login-form .button input {
  border: none;
  color: white;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 7px;
  background-color: #4070f4;
  cursor: pointer;
}

.button input:hover {
  background-color: #265df2;
}

.login-form .login-signup {
  margin: 30px;
  text-align: center;
}
</style>
