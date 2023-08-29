const express = require("express");
const bodyParser = require("body-parser")
const routes = express.Router()
const { users, products } = require("../model")
const {verifyAToken} = require("../middleware/authentication")

routes.get("/parkings", (req, res)=>{
    products.fetchParkings(req, res)
})
routes.get("/parking/:id", (req, res)=>{
    products.fetchParking(req, res)
})
routes.post("/parking", bodyParser.json(), 
(req, res)=>{
    products.register(req, res)
})
routes.put("/parking/:id", bodyParser.json(), 
(req, res)=>{
    products.updateParking(req, res)
})
routes.patch("/parking/:id", bodyParser.json(), 
(req, res)=>{
    products.updateParking(req, res)
})
routes.delete("/parking/:id", bodyParser.json(), 
(req, res)=>{
    products.deleteParking(req, res)
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

module.exports = {
    express,
    routes
};