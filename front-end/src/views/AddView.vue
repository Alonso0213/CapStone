<template>
    <div  class="main">
        <h2>ADD Parkings</h2>
        <center><form @submit.prevent="ConfimAdd">
            <input v-model="addparking.parkingNum" type="number" placeholder="Parking number" class="form-control"><br>
            <input v-model="addparking.parkingImg" type="text" placeholder="Image URL" class="form-control"><br>
            <input v-model="addparking.price" type="number" placeholder="Price" class="form-control"><br>
            <div>
             <button type="submit" class="btn btn-info">Add</button> 
                <a href="/admin"  class="btn btn-successbtn btn-success">Back</a>
            </div>
        </form></center>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                addparking: {
                    parkingNum: "",
                    parkingImg: "",
                    price: "",
                }
            }
        },
        methods: {
            ConfimAdd() {
                this.$store.dispatch("ConfimAddparking", this.addparking)
                alert("New parking added")
            }
        }
    }
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
