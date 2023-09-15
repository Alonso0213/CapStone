<template>
  <body class="main container-fluid">
    <div class="main container-fluid">
      <h2>Checkout</h2>

      <div class="tab_container">
        <input id="tab1" type="radio" name="tabs" checked />
        <label for="tab1"
          ><span class="numberCircle">1</span><span>Cart</span></label
        >

        <input id="tab2" type="radio" name="tabs" />
        <label for="tab2"
          ><span class="numberCircle">2</span
          ><span>Customer Information</span></label
        >

        <input id="tab3" type="radio" name="tabs" />
        <label for="tab3"
          ><span class="numberCircle">3</span><span>Payment</span></label
        >

        <section id="content1" class="tab-content" checked>
          <button class="del btn btn-warning" @click="clearCart">
            Clear cart
          </button>
          <div class="table table-responsive-xxl">
            <table
              class="table border-info table-dark table-hover table-bordered bg-danger-subtle"
            >
              <thead>
                <tr>
                  <th scope="col">ID:</th>
                  <th scope="col">Parking number:</th>
                  <th scope="col">Image:</th>
                  <th scope="col">Amount:</th>
                </tr>
              </thead>
              <tbody
                v-for="park in cart"
                id="display-items"
                :key="park.parkingID"
              >
                <tr>
                  <td>{{ park.parkingID }}</td>
                  <td>{{ park.parkingNum }}</td>
                  <td>
                    <img
                      class="pic"
                      :src="park.parkingImg"
                      alt="img"
                      loading="lazy"
                    />
                  </td>
                  <td>R{{ park.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="content2" class="tab-content">
          <h3>Customer Information</h3>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm"
              >First Name</span
            >
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm"
              >Adress</span
            >
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm"
              >E-mail</span
            >
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <center>
            <div class="button-container button-finish">
              <a href="#tab3" type="radio" name="tabs">Next</a>
            </div>
          </center>
        </section>

        <section id="content3" class="tab-content container fluid">
          <h4 class="payment-title">Choose your payment method</h4>
          <form action="" method="post">
            <div class="pymt-radio">
              <div class="row-payment-method payment-row">
                <div class="select-icon">
                  <input type="radio" id="radio1" name="radios" value="pp" />
                  <label for="radio1"></label>
                </div>
                <div class="select-txt">
                  <p class="pymt-type-name">Paypal</p>
                  <p class="pymt-type-desc">
                    Safe payment online. Credit card needed. PayPal account is
                    not necessary.
                  </p>
                </div>
                <div class="select-logo">
                  <img
                    src="https://www.dropbox.com/s/pycofx0gngss4ef/logo-paypal.png?raw=1"
                    alt="PayPal"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div class="pymt-radio">
              <div class="row-payment-method payment-row-last">
                <div class="select-icon hr">
                  <input type="radio" id="radio2" name="radios" value="pp" />
                  <label for="radio2"></label>
                </div>
                <div class="select-txt hr">
                  <p class="pymt-type-name">Credit Card</p>
                  <p class="pymt-type-desc">
                    Safe money transfer using your bank account. Safe payment
                    online. Credit card needed. Visa, Maestro, Discover,
                    American Express
                  </p>
                </div>
                <div class="select-logo">
                  <div class="select-logo-sub logo-spacer">
                    <img
                      src="https://www.dropbox.com/s/by52qpmkmcro92l/logo-visa.png?raw=1"
                      alt="Visa"
                      loading="lazy"
                    />
                  </div>
                  <div class="select-logo-sub" checked >
                    <img
                      src="https://www.dropbox.com/s/6f5dorw54xomw7p/logo-mastercard.png?raw=1"
                      alt="MasterCard"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-cc">
              <div class="row-cc">
                <div class="cc-field">
                  <div class="cc-title">Credit Card Number</div>
                  <input
                    type="text"
                    class="input cc-txt text-validated"
                    value=""
                    placeholder="4542 xxxx xxxx xx93"
                  />
                </div>
              </div>
              <div class="row-cc">
                <div class="cc-field">
                  <div class="cc-title">Expiry Date</div>
                  <select class="input cc-ddl">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <select class="input cc-ddl">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>
                <div class="cc-field">
                  <div class="cc-title">
                    CVV Code<span class="numberCircle">?</span>
                  </div>
                  <input type="text" class="input cc-txt" />
                </div>
              </div>
              <div class="row-cc">
                <div class="cc-field">
                  <div class="cc-title">Name on Card</div>
                  <input type="text" class="input cc-txt" />
                </div>
              </div>
            </div>
            <div class="button-master-container">
              <div class="button-container button-finish">
                <button type="button" @click="submit"  class="del btn btn-warning">Finish Order</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </body>
</template>

<script>
import sweet from "sweetalert";
export default {
  components: {},
  computed: {
    cart() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      console.log(this.cart);
      return cart;
    },
    clearCart() {
      localStorage.removeItem("cart");
      location.reload();
    },
  },
  methods: {
    submit() {
      sweet({
        title: "Booking has been made",
        icon: "success",
        timer: 4000,
      }),
        setTimeout(() => {
          location.reload();
          const computedValue = this.clearCart;
          console.log(` ${computedValue}`);
        }, 4000);
    },
  },
};
</script>

<style scoped>
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.main {
  height: 150vh;
  background-color: #141e30;
}
.pic {
  width: 7rem;
}

.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}

.clearfix:after {
  clear: both;
}

body {
  font-family: sans-serif;
  background: #f6f9fa;
}

h2 {
  color: #ffffff;
  text-align: center;
}
h4.payment-title {
  text-align: left;
  padding: 10px 0px 30px 30px;
  font-weight: 500;
  color: #5e6977;
}
a {
  color: #ccc;
  text-decoration: none;
  outline: none;
}

.tab_container {
  width: 550px;
  margin: 50px auto;
  position: relative;
  border: 1px solid #eee;
  border-radius: 7px;
  background: #fff;
}

input,
section {
  clear: both;
  padding-top: 10px;
  display: none;
}

label {
  font-weight: 700;
  font-size: 14px;
  display: block;
  float: left;
  padding: 20px 14px;
  color: #ccc;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  background: #fff;
  margin-bottom: 2px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom: 2px solid #eee;
}

#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4 {
  display: block;
  padding: 20px 0 0 0;
  color: #999;
}

.tab_container .tab-content h3 {
  text-align: center;
}

.tab_container [id^="tab"]:checked + label {
  background: #fff;
  border-bottom: 2px solid #358ed7;
  color: #358ed7;
}

.tab_container [id^="tab"]:checked + label > span.numberCircle {
  border: 2px solid #358ed7;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 3px 5px;
  text-align: center;
  font-size: 10px;
  margin: 3px 8px;
}

label:hover {
  background-color: #eee;
  border-radius: 0px;
}

.numberCircle {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 3px 5px;
  border: 2px solid #ccc;
  text-align: center;
  font-size: 10px;
  margin: 3px 8px;
}

.row-payment-method {
  margin: 0px 0px 0px 0px;
  padding: 22px 0px 11px 0px;
  text-align: left;
  display: table;
}
.payment-row {
  background-color: #f5f6fa;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
}
.payment-row-last {
  margin-left: 30px;
  margin-right: 30px;
  width: 100%;
}

.select-icon {
  display: table-cell;
  vertical-align: top;
  text-align: left;
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  width: 24px;
  height: 24px;
}

.select-txt {
  display: table-cell;
  vertical-align: middle;
  word-wrap: break-word;
  height: 60px;
  text-align: left;
  padding-left: 15px;
  font-size: 12pt;
}
.select-logo {
  padding-right: 0px;
  vertical-align: top;
  right: 35px;
  position: absolute;
}
.select-logo-sub {
  display: table-cell;
  vertical-align: middle;
}
.logo-spacer {
  padding-right: 13px;
}
.pymt-type-name {
  font-weight: 500;
  font-size: 12pt;
  padding-bottom: 8px;
  color: #5a6977;
}
.pymt-type-desc {
  padding-bottom: 22px;
  width: 70%;
  font-size: 14px;
}
.hr {
  border-bottom: 1px solid #ebf0f5;
  padding-bottom: 5px;
}
.form-cc {
  display: table;
  width: 100%;
  text-align: left;
  padding: 0px 0px 30px 30px;
}
.row-cc {
  display: table;
  width: 100%;
  padding-bottom: 7px;
}
.cc-txt {
  border-color: #e1e8ee;
  width: 100%;
}
.input {
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  height: 38px;
  padding-left: 15px;
  font-weight: 600;
  font-size: 11pt;
  color: #5e6977;
}
input[type="text"] {
  display: initial;
  padding: 15px;
}
.text-validated {
  border-color: #7dc855;
  background-image: url("https://www.dropbox.com/s/1mve74fafiwsae1/icon-tick.png?raw=1");
  background-repeat: no-repeat;
  background-position: right 18px center;
}
.cc-ddl {
  border-color: #f0f4f7;
  background-color: #f0f4f7;
  width: 100px;
  margin-right: 10px;
}
.cc-title {
  font-size: 10.5pt;
  padding-bottom: 8px;
}
.cc-field {
  padding-top: 15px;
  padding-right: 30px;
  display: table-cell;
}
.button-master-container,
.button-master-container:hover {
  display: table;
  width: 100%;
  border-top: 1px solid #e1e8ee;
  height: 60px;
  vertical-align: bottom;
}
.button-container {
  width: 50%;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
a,
a:hover {
  color: inherit;
  text-decoration: inherit;
}
.button-container:hover {
  background-color: #eee;
  cursor: pointer;
}
.button-finish {
  border-left: 1px solid #e1e8ee;
  color: #7dc855;
  font-weight: 500;
  font-size: 12pt;
  background-image: url("https://www.dropbox.com/s/10d95otbo48r0hh/icon-next.png?raw=1");
  background-repeat: no-repeat;
  background-position: right 50px center;
}
.cvv-tooltip-img {
  display: inline-block;
  vertical-align: middle;
  padding-left: 17px;
}
input[id^="radio"] {
  display: none;
}

input[id^="radio"] + label {
  background-image: url("https://www.dropbox.com/s/mnwbybfl4pnzoi4/radio-inactive.png?raw=1");
  height: 26px;
  width: 24px;
  display: inline-block;
  padding: 0 0 0 0px;
  cursor: pointer;
  border-radius: 50%;
}

input[id^="radio"]:checked + label {
  background-image: url("https://www.dropbox.com/s/8634yi8i1s7fx7w/radio-active.png?raw=1");
  height: 26px;
  width: 24px;
  display: inline-block;
  padding: 0 0 0 0px;
  cursor: pointer;
}
p.credit {
  text-align: center;
  color: #ccc;
}
@media (width <= 600px) {
  .main {
    height: 160vh;
  }
}
@media (width <= 580px) {
  .tab_container {
    width: fit-content;
  }
}

@media (width <= 560px) {
  .tab_container {
    width: fit-content;
  }
  .main {
    overflow: hidden;
    height: 170vh;
  }
}
@media (width <= 414px) {
  .tab_container {
    width: 75%;
  }
  .main {
    overflow: hidden;
    height: 200vh;
  }
}
@media (width <= 375px) {
  .input[data-v-1ab4eb05] {
    width: 95%;
  }
  .main {
    overflow: hidden;
    height: 240vh;
  }
}
</style>
