const Booking = require("./bookings")
const Parking = require("./parking")
const Users = require("./users")

module.exports = {
    parking: new Parking(),
    users: new Users(),
    bookings: new Booking()
}