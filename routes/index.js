const express = require('express');
const router = express.Router();
const MySQL = require('mysql');
const MySQLConfig = require('../config/mysql');
const connection = MySQL.createConnection(MySQLConfig);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/add', (req, res) => {
  console.log(req);
  console.log(req.payload);

  connection.query('insert into token(token) values (?)', req.payload.token, (err, result) => {
    connection.end();
  });
})

module.exports = router;
