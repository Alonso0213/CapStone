<template>
  <div class="main">
    <h2>Edit user</h2>

    <center><form @submit.prevent="EditConfirm">
      <input
        v-model="adduser.userID"
        type="text"
        placeholder="UserID"
        class="form-control"
      /><br />
      <input
        v-model="adduser.firstName"
        type="text"
        placeholder="firstName"
        class="form-control"
      /><br />
      <input
        v-model="adduser.lastName"
        type="text"
        placeholder="lastName"
        class="form-control"
      /><br />
      <input
        v-model="adduser.userAge"
        type="number"
        placeholder="userAge"
        class="form-control"
      /><br />
      <input
        v-model="adduser.userProfile"
        type="text"
        placeholder="userProfile"
        class="form-control"
      /><br />
      <input
        v-model="adduser.userPass"
        type="text"
        placeholder="userPass"
        class="form-control"
      /><br />
      <input
        v-model="adduser.userRole"
        type="text"
        placeholder="userRole"
        class="form-control"
      /><br />
      <input
        v-model="adduser.emailAdd"
        type="text"
        placeholder="Email"
        class="form-control"
      /><br />
      <div>
        <button type="submit" class="btn btn-successbtn btn-success">
          Save
        </button>
        <a href="/admin" class="btn btn-info">Back</a>
      </div>
    </form></center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adduser: {
        userID: this.id,
        firstName: "",
        lastName: "",
        userAge: "",
        userProfile: "",
        userPass: "",
        userRole: "",
        emailAdd: "",
      },
    };
  },
  props: ["id"],
  methods: {
    EditConfirm() {
          this.$store.dispatch("ConfimEditUser", this.adduser);
      alert("user updated")
    },
  },
};
</script>

<style scoped>
.main {
  background-color: rgba(0, 0, 0, 0.893);
 
}
input {
  width: 40%;
}
h2 {
  color: whitesmoke;
}
form div {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
