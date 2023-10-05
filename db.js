const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "11111111",
  database: "lichamhomnay",
});

module.exports = db;
