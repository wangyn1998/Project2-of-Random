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

//范开始
//注册
var phonenum='';
router.post('/register',(req,res)=>{
  /**获取请求体数据 */
  let data = req.body;
  let message1 = {success:true};
  let message2 = {success:false};
  console.log(data);
  if(data.pwd != data.repwd){
    console.log('两次输入密码不一致')
    res.send(message2);
  } 
  else{
    con.query("select * from user where userPhone=? or userName=?",[data.phonenum,data.username],function(err,result){
        if(err){
          throw err;
        }else{
          console.log(result);
          if(result==''){
            console.log('该用户不存在');
            con.query("insert into user(userPhone,userPwd,userDay,userName) values(?,?,?,?)",[data.phonenum,data.pwd,new Date(),data.username],(err,result)=>{
                if(err){
                    throw err;
                }
                else{
                    res.send(message1);
                }
            })
            con.query("insert into score(userPhone,userName) values(?,?)",[data.phonenum,data.username],(err,result)=>{
                if(err){
                  throw err;
                }
                else{
                  console.log(result); 
                }
            })
          }
          else{
            console.log('该用户已存在');
            res.send(message2);
          }
        }
    })
  }
})
//登录
var username1='';
router.post('/login', function (req, res) {  //接收POST请求
  /**获取请求体数据 */
  let data = req.body;   //解析body中的信息
  console.log(data);
  let message1 = {success:true}
  let message2 = {success:false}
  /**连接数据库 */
  username1=data.username;
  con.query("select * from user where userName = ? and userPwd = ?",[data.username,data.pwd],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      if(result == false){
        res.send(message2);
      }
      else{           
        res.send(message1);
      }
    }
  })
})
//获取我的页面头像和用户名
router.get('/my',function(req,res,next){
  con.query('select * from user where userName = ?',[username1],(err,result)=>{
      if(err){
          console.log(err);
      }
      else{
          console.log('user');
          console.log(result);
          // aa = result;
          res.send(result);
      }
  })
})
//积分排行榜
router.get('/rank',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select * from score order by sum DESC',[phonenum],(err,result)=>{
      if(err){
          console.log(err);
      }
      else{
          console.log("111111111")
          console.log(result);
          res.send(result);
      }
  })
})
//范结束


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
//张结束


//wang
router.get('/knowledge', function(req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from knowledge ",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  });
});

router.get('/test', function(req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from test ",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  });
});

//wang



module.exports = router;
