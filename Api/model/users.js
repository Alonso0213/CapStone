//users
const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/authentication");

class Users {
  fetchUsers(req, res) {
    const query = `
        SELECT userID, firstName, lastName, userAge, userRole, emailAdd, userPass, userProfile
        FROM users
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, lastName, userAge, userRole, emailAdd, userPass, userProfile
        FROM users
        WHERE userID = ${req.params.id}
        `;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const query = `
     SELECT userID, firstName, lastName, userAge, userRole, emailAdd, userPass, userProfile
     FROM users
        WHERE emailAdd = ?;
        `;
    db.query(query, [emailAdd], (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "That email does not exist.",
        });
      } else {
        compare(userPass, result[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          const token = createToken({
            emailAdd,
            userPass,
          });
          if (cResult) {
            res.json({
              msg: "you've Logged In",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid password or you are not registered.",
            });
          }
        });
      }
    });
  }
  async register(req, res) {
    const data = req.body;
    data.userPass = await hash(data.userPass, 15);
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    const query = `
        INSERT INTO users
        SET ?;
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      let token = createToken(user);
      res.json({
        status: res.statusCode,
        token,
        msg: "You are registered.",
      });
    });
  }
  updateUser(req, res) {
    const data = req.body;
    if (data.userPass) {
      data.userPass = hashSync(data.userPass, 15);
    }
    const query = `
        UPDATE users
        SET ?
        WHERE userID = ?
        `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "successful update.",
      });
    });
  }
  deleteUser(req, res) {
    const query = `
        DELETE FROM users
        WHERE userID = ${req.params.id}
        `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user has been deleted.",
      });
    });
  }
}

module.exports = Users;