//Bookings
const db = require("../config");

class Booking {
  fetchBookings(req, res) {
    const query = `
        SELECT bookingID, userID_bookings, parkingID_bookings, orderDate
        FROM bookings;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchBooking(req, res) {
    const query = `
    SELECT bookingID, userID_bookings, parkingID_bookings, orderDate
    FROM bookings;
    WHERE bookingID = ${req.params.id};
    `;
    db.query(query, [req.body, req.params.id], (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  register(req, res) {
    const data = req.body
    const query = `
    INSERT INTO bookings
    SET ?;
    `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New booking has been made.",
      });
    });
  }
  updateBooking(req, res) {
    const query = `
    UPDATE bookings
    SET ?
    WHERE bookingID = ?;
    `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The booking has been updated.",
      });
    });
  }
  deleteBookings(req, res) {
    const query = `
    DELETE FROM bookings
    WHERE bookingID = ${req.params.id};
    `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The booking has been deleted",
      });
    });
  }
}
module.exports = Booking;