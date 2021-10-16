const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'devsteam_master',
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Database is connected. <DevsTeamMaster>');
  }
});

module.exports = mysqlConnection;
