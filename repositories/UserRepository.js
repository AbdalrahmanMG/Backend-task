const sqlDBQueries = require("../databaseFunctions/sqlDBQueries.js");
const CustomError = require("../errors/customError.js");

class UserRepository {
  async getAllUsers(startIndex, pageSize) {
    const data = await new Promise((resolve, reject) => {
      sqlDBQueries.getAllUsers(startIndex, pageSize, (err, data) => {
        if (err) {
          return reject(new CustomError(400, "Bad Request!!"))
        }
        return resolve(data);
      });
    });
    return data
  }

  async getUserDetials(userId) {
    const data = await new Promise((resolve, reject) => {
      sqlDBQueries.getUserDetials(userId, (err, data) => {
        if (err) {
          return reject(new CustomError(400, "Bad Request!!"))
        }
        console.log(data.length);
        if (data.length === 0) {
          return reject(new CustomError(404, "User not found"))
        }
        return resolve(...data);
      });
    });
    return data
  }

  async deleteUser(userId) {
    const data = await new Promise((resolve, reject) => {
      sqlDBQueries.deleteUser(userId, (err, data) => {
        console.log(data.affectedRows);
        if (err) {
          return reject(new CustomError(400, "Bad Request!!"))
        }

        if (data.affectedRows == 0) {
          return reject(new CustomError(404, "No user found!"))
        }
        return resolve(data);
      });
    });
    return data
  }

  async updateUser(userId, userData, email) {
    const existingUser = await new Promise((resolve, reject) => {
      sqlDBQueries.findOne(email, (err, data) => {
        if (err) {
          return reject(new CustomError(400, "Bad Request!!"));
        }
        resolve(data);
      });
    });


    const user = existingUser[0]
    if (existingUser.length !== 0 && user.id != userId) {
      throw new CustomError(400, "Email is already taken")
    }

    const data = await new Promise((resolve, reject) => {
      sqlDBQueries.updateUser(userId, userData, (err, data) => {
        if (err) {
          return reject(new CustomError(400, "Bad Request!!"))
        }
        if (data?.affectedRows == 0) {
          return reject(new CustomError(404, "No user found!"))
        }
        return resolve(data);
      });
    });
    return data
  }
}


module.exports = new UserRepository();
