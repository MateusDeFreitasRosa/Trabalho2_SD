var mysql = require('mysql');

module.exports = mysql.createConnection({
  host: "localhost",
  user: "falcon",
  password: "123456",
  database: "banco_eventos"
});