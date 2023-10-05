const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "153.92.222.161",
  password: "11111111",
  database: "lichamhomnay",
});

module.exports = db;
