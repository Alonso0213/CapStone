<template>
    <div class="main">
      <h2>Edit Product</h2>
      
     <center><form @submit.prevent="EditParking">
        <input v-model="editparking.parkingID" type="text" placeholder="ParkingID" class="form-control" /><br>
        <input v-model="editparking.parkingNum" type="text" placeholder="Parking number" class="form-control" /><br>
        <input v-model="editparking.parkingImg" type="text" placeholder="Image URL" class="form-control"/><br>
        <input v-model="editparking.price" type="number" placeholder="Price" class="form-control"/><br>
        <div>
            <button type="submit" class="btn btn-successbtn btn-success">Save</button>
         <a href="/admin" class="btn btn-info">Back</a>
        </div>
      </form></center>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        editparking: {
          parkingID: this.id,
          parkingNum: "",
          parkingImg: "",
          price: "",
        },
      };
    },
    props: ["id"],
    methods: {
      EditParking() {
        this.$store.dispatch("ConfimEditParking", this.editparking);
      },
    },
  };
  </script>
  
  <style scoped>
  .main{
    background-color:rgba(0, 0, 0, 0.893);
    height: 55vh;
}
input{
    width: 40%;
}
h2{
    color: whitesmoke;
}
form div{
    display: flex;
    justify-content: center;
    gap: 1rem;
}
</style>