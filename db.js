const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "11111111",
  database: "lichamhomnay",
});

module.exports = db;
