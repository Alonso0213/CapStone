const Parking = require("./parking")
const Users = require("./users")

module.exports = {
    Parking: new Parking(),
    users: new Users()
}