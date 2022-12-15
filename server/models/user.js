const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    userFname VARCHAR(255),
    userLname VARCHAR(255),
    Email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();

// grabbing all users in database
async function getAllUsers() {
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users)
}
// Create  User - Registering
async function register(user) {
  console.log(user)
  let cUser = await getUser(user);
  if(cUser.length > 0) throw Error("User already in use");

  const sql = `INSERT INTO users (userFname,userLname,Email,password)
    VALUES ("${user.firstName}","${user.lastName}","${user.email}", "${user.password}");
  `;
  await con.query(sql);
  return await login(user);
}
// Read User -- login user
async function login(user) { // {userName: "sda", password: "gsdhjsga"}
  let cUser = await getUser(user); //[{userName: "cathy123", password: "icecream"}]
  
  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

// Update User function
async function editUser(user) {
  let sql = `UPDATE users 
    SET Email = "${user.email}"
    WHERE userID = ${user.userID}
  `;

  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

// Delete User function
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
}

// Useful Functions
async function getUser(user) {
  let sql;

  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE Email = "${user.email}"
  `;
  }
  console.log("user::::::::::::::::::",user,"::::::::::::sql:::::::::",sql)
  return await con.query(sql);  
}
module.exports = { getAllUsers, login, register, editUser, deleteUser};
