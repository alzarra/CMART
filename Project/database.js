var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: 'csci427',
  database: 'mysql'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM mrTable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});