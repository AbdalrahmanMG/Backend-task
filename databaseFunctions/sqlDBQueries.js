const db = require("../config/sqlDB.js");

function getAllUsers(startIndex, pageSize,callback) {
  const q = "SELECT id, fullName, email, phone FROM users LIMIT ? OFFSET ?";
  db.query(q,[pageSize, startIndex],  callback);
}

function addUser(user, callback) {
  const { fullName, email, password, phone } = user;
  const q =
    "INSERT INTO users ( `fullName`, `email`, `password`, `phone`) VALUES (?,?,?,?)";
  db.query(q, [fullName, email, password, phone], callback);
}

function getUserDetials(userId, callback) {
  const q = "SELECT id, fullName, email, phone FROM users WHERE id = ?";
  db.query(q, [userId], callback);
}

function deleteUser(userId, callback) {
  const q = "DELETE FROM users WHERE id = ?";
  db.query(q, [userId], callback);
}

function updateUser(userId, userData, callback) {
  const { fullName, email, password, phone } = userData;
  const newData = [fullName, email, password, phone, userId];
  let q =
    "UPDATE users SET `fullName` = ?, `email` = ?, `password`= ? , `phone` = ? WHERE id = ?";
  db.query(q, newData, callback);
}

function findOne(email,callback){
  const q = "SELECT * FROM users WHERE email = ?"
  db.query(q, [email], callback)
}

module.exports = {
  getAllUsers,
  addUser,
  getUserDetials,
  deleteUser,
  updateUser,
  findOne
};
