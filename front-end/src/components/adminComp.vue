<template>
  <div>
    <h2>Parking List</h2>
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
            <th scope="col">Edit/Delete:</th>
          </tr>
        </thead>
        <tbody
          v-for="parking in parkings"
          id="display-items"
          :key="parking.parkingID"
        >
          <tr>
            <td>{{ parking.parkingID }}</td>
            <td>{{ parking.parkingNum }}</td>
            <td>
              <img
                class="pic"
                :src="parking.parkingImg"
                alt="img"
                loading="lazy"
              />
            </td>
            <td>R{{ parking.price }}</td>
            <td>
              <router-link
                :to="{ name: 'editparking', params: { id: parking.parkingID } }"
                class="btn btn-info"
                >edit</router-link
              >
              <button
                @click="confirmDelete(parking.parkingID)"
                class="del btn btn-warning"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>User Listing</h2>
    <div class="table table-responsive-xxl">
      <table
        class="table table-warning table-striped table-hover table-bordered border-warning"
      >
        <thead>
          <tr>
            <th scope="col">ID:</th>
            <th scope="col">firstName:</th>
            <th scope="col">lastName:</th>
            <th scope="col">userAge:</th>
            <th scope="col">userRole:</th>
            <th scope="col">userProfile:</th>
            <th scope="col">emailAdd:</th>
            <th scope="col">Edit/Delete:</th>
          </tr>
        </thead>
        <tbody v-for="user in users" id="display-items" :key="user.userID">
          <tr>
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.userRole }}</td>
            <td><img class="pic" :src="user.userProfile" alt="img" /></td>
            <td>{{ user.emailAdd }}</td>
            <td>
              <router-link
                :to="{ name: 'edituser', params: { id: user.userID } }"
                class="del btn btn-info"
                >edit</router-link
              >
              <button
                @click="confirmDeleteU(user.userID)"
                class="btn btn-warning"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  methods: {
    confirmDeleteU(userID) {
      if (confirm("Please confirm")) {
        try {
          this.$store.dispatch("deleteUser", userID);
        } catch (e) {
          console.log("Error deleting user:");
        }
      }
    },
    confirmDelete(prodID) {
      if (confirm("Please confirm")) {
        try {
          this.$store.dispatch("deleteParking", prodID);
        } catch (e) {
          console.log("Error deleting parking:");
        }
      }
    },
  },

  computed: {
    users() {
      return this.$store.state.users;
    },
    parkings() {
      return this.$store.state.parkings;
    },
  },
  mounted() {
    this.$store.dispatch("fetchParkings");
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style scoped>
.pic {
  width: 7rem;
}
h2 {
  color: black;
}

.del:hover {
  background-color: red;
  color: black;
}
.del {
  background-color: rgb(5, 5, 253);
}
</style>
