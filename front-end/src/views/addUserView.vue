<template>
    <div class="main">
        <h2>ADD User</h2>
       
        <center><form @submit.prevent="ConfimAddU">
            <input v-model="adduser.firstName" type="text" placeholder="FirstName" class="form-control">
            <br>
            <input v-model="adduser.lastName" type="text" placeholder="LastName" class="form-control"> 
            <br>
            <input v-model="adduser.userAge" type="number" placeholder="Age" class="form-control">
            <br>
            <input v-model="adduser.userProfile" type="text" placeholder="Profile-URL" class="form-control">
            <br>
            <input v-model="adduser.userPass" type="text" placeholder="Password" class="form-control">
            <br>
            <input v-model="adduser.emailAdd" type="text" placeholder="Email" class="form-control">
           <div> <button type="submit" class="btn btn-info">Add</button>
            <a href="/admin" class="btn btn-successbtn btn-success">Back</a>
        </div>
        </form></center>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                adduser: {
                    firstName: "",
                    lastName: "",
                    userAge: "",
                    userProfile: "",
                    userPass: "",
                    emailAdd: ""
                }
            }
        },
        methods: {
            ConfimAddU() {
                this.$store.dispatch("ConfimAdduser", this.adduser)
                alert("New user has been added")
            }
        }
        
    }
</script>

<style scoped>
.main{
    background-color:rgba(0, 0, 0, 0.893);
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