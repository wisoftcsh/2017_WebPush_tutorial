const express = require('express');
const router = express.Router();
const MySQL = require('promise-mysql');
const MySQLConfig = require('../config/mysql');
let connection;
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.put('/add', (req, res) => {
  connection.query('insert into token(token) values (?)', req.body.token, (err, result) => {
    connection.end();
  });
});

module.exports = router;
