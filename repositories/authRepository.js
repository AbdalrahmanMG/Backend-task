const sqlDBQueries = require("../databaseFunctions/sqlDBQueries.js");
const bcryptjs = require("bcryptjs");
const CustomError = require("../errors/customError.js");

class AuthRepository {
  async login(email, password) {
      const data = await new Promise((resolve, reject) => {
        sqlDBQueries.findOne(email, (err, data) => {
        console.log(err?.sqlMessage);
          if (err) return reject(err);
          resolve(data)
        });
      });

      if (!data.length) {
        throw new CustomError(404, "User not found!")
      }

      const storedPasswordHash = data[0].password;
      const result = await bcryptjs.compare(password, storedPasswordHash)
      if (!result) {
        throw new CustomError(401, "invalid password or email")
      }
      return data
  }

  async addUser(user,email) {
    const existingUser = await new Promise((resolve, reject) => {
      sqlDBQueries.findOne(email, (err, data) => {
        if (err) {
          return reject(new CustomError(400, "Bad Request!!"));
        }
        resolve(data);
      });
    });

    if (existingUser.length !== 0) {
      throw new CustomError(400, "Email is already taken")
    }
    
    const data = await new Promise((resolve, reject) => {
      sqlDBQueries.addUser(user, (err, data) => {
        console.log(err?.sqlMessage);
        if (err) {
          return reject(new CustomError(400, "Bad Request!"))
        }
        return resolve(data);
      });
    });
    return data
  }
}

module.exports = new AuthRepository();
