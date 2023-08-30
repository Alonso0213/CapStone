const express = require("express");
const bodyParser = require("body-parser")
const routes = express.Router()
const { users, parking, bookings } = require("../model")
const {verifyAToken} = require("../middleware/authentication")

routes.get("/parkings", (req, res)=>{
    parking.fetchParkings(req, res)
})
routes.get("/parking/:id", (req, res)=>{
    parking.fetchParking(req, res)
})
routes.post("/parking", bodyParser.json(), 
(req, res)=>{
    parking.register(req, res)
})
routes.put("/parking/:id", bodyParser.json(), 
(req, res)=>{
    parking.updateParking(req, res)
})
routes.patch("/parking/:id", bodyParser.json(), 
(req, res)=>{
    parking.updateParking(req, res)
})
routes.delete("/parking/:id", bodyParser.json(), 
(req, res)=>{
    parking.deleteParking(req, res)
})

routes.get("/users", (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get("/user/:id", (req, res)=>{
    users.fetchUser(req, res)
})
routes.post("/user", bodyParser.json(), (req, res)=>{ 
    users.register(req, res)
})
routes.put("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
    users.deleteUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
    users.login(req, res);
  });
  

routes.get("/bookings", (req, res)=>{
    bookings.fetchBookings(req, res)
})
routes.get("/booking/:id", (req, res)=>{
    bookings.fetchBooking(req, res)
})
routes.post("/booking", bodyParser.json(), (req, res)=>{ 
    bookings.register(req, res)
})
routes.put("/booking/:id", bodyParser.json(), (req, res) => {
    bookings.updateBookings(req, res);
});
routes.patch("/booking/:id", bodyParser.json(), (req, res) => {
    bookings.updateBooking(req, res);
});
routes.delete("/booking/:id", (req, res) => {
    bookings.deleteBookings(req, res);
});

module.exports = {
    express,
    routes
};