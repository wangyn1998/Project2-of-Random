var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var dbconfig=require('../config/dbconfig.json');
var con = mysql.createConnection(dbconfig);
con.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
