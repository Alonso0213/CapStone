import { createStore } from "vuex";
import axios from "axios";
const Api = "";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
    postData: null,
    searchResults: null,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setPostData(state, data) {
      state.postData = data;
    },
    setSearch(state, letter) {
      state.filteredProducts = state.products.filter(
        (product) =>
          product.prodName.charAt(0).toLowerCase() === letter.toLowerCase()
      );
    },
    SortName(state) {
      state.products.sort((a, b) => a.prodName.localeCompare(b.prodName));
    },
    SortPrice(state) {
      state.products.sort((a, b) => a.amount - b.amount);
    },
  },

  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${Api}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${Api}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async fetchftProducts(context) {
      try {
        const { data } = await axios.get(`${Api}products?limit=4`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${Api}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async deleteProd(context, prodID) {
      try {
        const { data } = await axios.delete(`${Api}product/${prodID}`);
        if (data.msg) {
          context.dispatch("fetchProducts");
        }
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
    async deleteUser(context, userID) {
      try {
        const { data } = await axios.delete(`${Api}user/${userID}`);
        if (data.msg) {
          context.dispatch("fetchUsers");
        }
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
    async ConfimAddprod({ commit }, addprod) {
      try {
        const res = await axios.post(`${Api}product`, addprod);
        commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.error(err);
      }
    },
    async ConfimAdduser({ commit }, adduser) {
      try {
        const res = await axios.post(`${Api}user`, adduser);
        commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.error(err);
      }
    },
    async ConfimEditProd(context, editprod) {
      try {
        const res = await axios.patch(
          `${Api}product/${editprod.prodID}`,
          editprod
        );
        context.commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.log(err);
      }
    },
    async ConfimEditUser(context, adduser) {
      try {
        const res = await axios.patch(`${Api}user/${adduser.userID}`, adduser);
        context.commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.log(err);
      }
    },
    async searchProducts(context, searchTerm) {
      try {
        const res = await fetch(`${Api}products/${prodName}=${searchTerm}`);
        const data = await res.json();
        context.commit("setSearch", data.res);
      } catch (e) {
        console.log("Error");
      }
    },
    async FilterName(context) {
      try {
        const { data } = await axios.get(`${Api}products`);
        context.commit("SortName", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async FilterPrice(context) {
      try {
        const { data } = await axios.get(`${Api}products`);
        context.commit("SortPrice", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
  },
  getters: {
    filteredProducts(state) {
      return state.searchResults;
    },
  },
  modules: {},
});
