//parking
const db = require("../config");

class Parking {
  fetchParkings(req, res) {
    const query = `
        SELECT parkingID, parkingNum, price, parkingImg
        From parking;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchParking(req, res) {
    const query = `
    SELECT parkingID, parkingNum, price, parkingImg
    FROM parking
    WHERE parkingID = ${req.params.id};
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
    INSERT INTO parking
    SET ?;
    `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New parking spot has been added.",
      });
    });
  }
  updateParking(req, res) {
    const query = `
    UPDATE parking
    SET ?
    WHERE parkingID = ?;
    `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The parking has been updated.",
      });
    });
  }
  deleteParking(req, res) {
    const query = `
    DELETE FROM parking
    WHERE parkingID = ${req.params.id};
    `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The parking spot has been deleted",
      });
    }); 
  }
}
module.exports = Parking;