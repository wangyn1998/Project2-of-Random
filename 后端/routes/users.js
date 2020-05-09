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

/*box*/
router.get('/record', function(req, res, next) {
  var username='fym'
  con.query("select * from record where userName=?",[username],function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result==[]){
        con.query("insert into record(userName) values(?)",[username],function(err,result){
          if(err){
            console.log(err);
          }else{
            result=[{
              recordDay: 0,
              recordClockIn: 0,
              recordStars: 0,
              recordAchievement: 0
            }]
          }
        })
      }
      res.send(result);
    }
  });
});
router.get('/box', function(req, res, next) {
  var username='fym'
  con.query("select * from box where userName=?",[username],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});
router.post('/addbox', function(req, res, next) {
  var username='fym';
  con.query("insert into box(userName,boxName,boxImg) values(?,?,?)",[username,req.body.text,req.body.img],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({success:true})
    }
  });
});

module.exports = router;
