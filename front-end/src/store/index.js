import { createStore } from "vuex";
import axios from "axios";
const Api = "https://capstone-swpm.onrender.com/";
import router from "@/router";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
import authUser from "@/services/AuthenticateUser";
const { cookies } = useCookies();

export default createStore({
  state: {
    users: null,
    user: null,
    parkings: null,
    parking: null,
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
    setParkings(state, parkings) {
      state.parkings = parkings;
    },
    setParking(state, parking) {
      state.parking = parking;
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
      state.parkings.sort((a, b) => a.parkingNum - b.parkingNum);
    },
    SortPrice(state) {
      state.parkings.sort((a, b) => a.price - b.price);
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
    async fetchParkings(context) {
      try {
        const { data } = await axios.get(`${Api}parkings`);
        context.commit("setParkings", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async fetchParkings(context) {
      try {
        const { data } = await axios.get(`${Api}parkings`);
        context.commit("setParkings", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async deleteParking(context, prodID) {
      try {
        const { data } = await axios.delete(`${Api}parking/${prodID}`);
        if (data.msg) {
          context.dispatch("fetchParkings");
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
    async ConfimAddparking({ commit }, addprod) {
      try {
        const res = await axios.post(`${Api}parking`, addprod);
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
    async ConfimEditParking(context, editparking) {
      try {
        const res = await axios.patch(
          `${Api}parking/${editparking.parkingID}`,
          editparking
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
    async searchParkings(context, searchTerm) {
      try {
        const res = await fetch(`${Api}parkings/${prodName}=${searchTerm}`);
        const data = await res.json();
        context.commit("setSearch", data.res);
      } catch (e) {
        console.log("Error");
      }
    },
    async FilterName(context) {
      try {
        const { data } = await axios.get(`${Api}parkings`);
        context.commit("SortName", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async FilterPrice(context) {
      try {
        const { data } = await axios.get(`${Api}parkings`);
        context.commit("SortPrice", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async RegisterUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${Api}user`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 5000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 5000,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async LoginUser(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${Api}login`, payload)
        ).data;
        if (result) {
          context.commit(`setUsers`, { result, msg });
          localStorage.setItem("user", JSON.stringify(result));
          cookies.set("LegitUser", { token, msg, result });
          authUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName}
            ${result?.lastName}`,
            icon: "success",
            timer: 5000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 5000,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
    Logout(context) {
      context.commit("setUser");
      cookies.remove("LegitUser");
      localStorage.removeItem("user");
    },
  },
  getters: {
    filteredParkings(state) {
      return state.searchResults;
    },
  },
  modules: {},
});
