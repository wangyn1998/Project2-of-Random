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
router.post('/register',(req,res)=>{
  /**获取请求体数据 */
  let data = req.body;
  let message1 = {success:true};
  let message2 = {success:false};
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
            con.query("insert into record(recordDay,recordClockIn,recordStars,recordAchievement,userName) values(?,?,?,?,?)",[0,0,0,1,data.username],function(err,result){
              if(err){
                console.log(err);
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
var img='';
router.get('/my',function(req,res,next){
  con.query('select * from user where userName = ?',[username1],(err,result)=>{
      if(err){
          console.log(err);
      }
      else{
          console.log('user');
          console.log(result);
          // aa = result;
          img=result[0].userImage;
          res.send(result);
      }
  })
})
//积分排行榜
router.get('/rank',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select * from score order by sum DESC',[username1],(err,result)=>{
      if(err){
          console.log(err);
      }
      else{
          console.log("111111111")
          res.send(result);
      }
  })
})
/**编辑资料 */
router.post('/updateuser',(req,res)=>{
  /**获取请求体数据 */
  let data = req.body;
  let message1 = {success:true};
  let message2 = {success:false};
  con.query("update user set userName=?,userImage=?,userSex=?,userBir=?,userSign=?,userStudy=? where userName = ?",[data.username,data.userImage,data.sex,data.birthday,data.sign,data.class,username1],(err,result)=>{
      if(err){
          throw err;
      }
      else{
          if(result == false){
            res.send(message2);
          }else{
            res.send(message1);
          }
          
      }
  })
  con.query("update score set userImage=? where userName = ?",[data.userImage,username1],(err,result)=>{
      if(err){
          throw err;
      }
      else{
          if(result == false){
              console.log(message2);
          }else{
              console.log(message1);
          }
          
      }
  })
  con.query("update post set userImage=? where userName = ?",[data.userImage,username1],(err,result)=>{
    if(err){
        throw err;
    }
    else{
        if(result == false){
            console.log(message2);
        }else{
            console.log(message1);
        }
    }
  })
})
//获取积分sum
router.get('/fen',function(req,res,next){
  con.query('select * from score where userName = ?',[username1],(err,result)=>{
      if(err){
          console.log(err);
      }
      else{
          console.log('user');
          // aa = result;
          res.send(result);
      }
  })
})
//获取盒子数
router.get('/hezi',function(req,res,next){
  let message1 = {success:true};
  let message2 = {success:false};
  con.query('select * from box where userName = ?',[username1],(err,result)=>{
      if(err){
        console.log(err);
        res.send(message2)
      }
      else{
        if(result.length == 0){
          res.send(message2)
        }else{
          console.log('user');
          res.send(result);
        }
        
      }
  })
})
//积分增加
router.post('/getscore', function (req, res) {  //接收POST请求
  /**获取请求体数据 */
  let data = req.body;   //解析body中的信息
  let message1 = {success:true}
  let message2 = {success:false}
  if(data.taskContent == '签到'){
    con.query("select * from record where userName=?",[username1],function(err,result){
      if(err){
        console.log(err);
      }else{
        var num=result[0].recordClockIn+1;
        con.query("update record set recordClockIn=? where userName=?",[num,username1],function(err,result){
          if(err){
            console.log(err);
          }else{
            
          }
        })
      }
    });
  }
  con.query("insert into sList(taskScore,updateTime,taskId,taskContent,userName,userPhone) values(?,?,?,?,?,?)",[data.taskScore,data.updateTime,data.taskId,data.taskContent,data.userName,data.hone],function(err,result){
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
  con.query("select SUM(taskScore) sumsum,userName from slist where userName=?",[data.userName],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        //显示到页面--渲染方法--render,
          con.query("update score set sum=?,updateTime=? where userName=?",[result[0].sumsum,new Date(),data.userName],function(err,result){
          if(err){
            console.log(err);
          }
          else{
            console.log("success");
          }
        });      
      }
    })
})
//修改密码
router.post('/alterpwd', function (req, res) {  //接收POST请求
  /**获取请求体数据 */
  let data = req.body;   //解析body中的信息
  let message1 = {success:true}
  let message2 = {success:false}
  con.query('select * from user where userName = ?',[username1],(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
      console.log(result[0].userPwd);
      var rb = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/g;
      if(result[0].userPwd == data.oldpwd && rb.test(data.newpwd)){
        con.query("update user set userPwd=? where userName=?",[data.newpwd,username1],function(err,result){
          if(err){
            console.log(err);
            res.send(message2);
          }
          else{
            res.send(message1);
          }
        })
      }
      else{           
          res.send(message2);
      }
    }
  })
})
//退出登录
router.post('/logout', function (req, res) {  //接收POST请求
  /**获取请求体数据 */
  let data = req.body;   //解析body中的信息
  let message1 = {success:true};
  let message2 = {success:false};
  console.log(typeof(data.logout));
  if(data.logout){
    username1='';
    console.log(username1);
    res.send(message1);
  }
  else{
    res.send(message2);
  }
})
//获取卡片
router.get('/kapian',function(req,res,next){
  let message1 = {success:true};
  let message2 = {success:false};
  con.query('select * from box,card where card.boxId=box.boxId and box.userName = ?;',[username1],(err,result)=>{
      if(err){
        console.log(err);
        res.send(message2)
      }
      else{
          console.log('user');
          res.send(result);
      }
  })
})
//范结束
/*box*/
router.get('/record', function(req, res, next) {
  con.query("select * from record where userName=?",[username1],function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result==[]){
        con.query("insert into record(userName) values(?)",[username1],function(err,result){
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
  con.query("select * from box where userName=? order by boxId desc",[username1],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});
router.post('/addbox', function(req, res, next) {
  con.query("insert into box(userName,boxName,boxImg) values(?,?,?)",[username1,req.body.text,req.body.img],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({success:true})
    }
  });
});
var boxid=0,cardid=0;
router.post('/boxId',function(req,res,next){
  boxid=req.body.id;
  console.log(boxid);
})
router.get('/allcard', function(req, res, next) {
  var username='fym'
  con.query("select * from card where boxId=? order by cardId desc",[boxid],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});
router.post('/addcard', function(req, res, next) {
  con.query("insert into card(boxId,cardQues,cardAns) values(?,?,?)",[boxid,req.body.que,req.body.ans],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({success:true})
    }
  });
});
router.post('/delcard', function(req, res, next) {
  console.log(req.body);
  con.query("delete from card where cardId=?",[req.body.id],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({success:true})
    }
  });
});
router.post('/updatecard', function(req, res, next) {
  con.query("update card set cardQues=?,cardAns=? where cardId=?",[req.body.que,req.body.ans,req.body.id],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({success:true})
    }
  });
});

router.post('/cardid',function(req,res,next){
  cardid=req.body.cardid;
  console.log(cardid);
})
router.get('/selcard', function(req, res, next) {
  con.query("select * from card where cardId=?",[cardid],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});
router.post('/addstar',function(req,res,next){
  con.query("select * from record where userName=?",[username1],function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      var num=result[0].recordStars+1;
      con.query("update record set recordStars=? where userName=?",[num,username1],function(err,result){
        if(err){
          console.log(err);
        }else{

        }
      })
    }
  });
})

var clickid=0;
router.post('/clicknum',function(req,res,next){
    clickid=req.body.postId;
    console.log(clickid);
})
router.get('/reply',function(req,res,next){
    con.query('select * from reply where postId=?',[clickid],function(err,result){
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
router.post('/postreply', function(req, res, next) {
  console.log(img)
  con.query("insert into reply(userName,postId,replyContent,userImage) values(?,?,?,?)",[username1,clickid,req.body.text,req.body.user.userImage],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({success:true})
    }
  });
});
router.post('/postPoint', function(req, res, next) {
  con.query("update reply set replyPoint=? where replyId=?",[req.body.point,req.body.id],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({success:true})
    }
  });
});
router.post('/postday',function(req,res,next){
  let userDay;
  let now=new Date();
  let day;
  console.log(req.body.username);
  con.query("select userDay from user where userName=?",[req.body.username],function (err,result) {
        if(err){
          console.log(err);
        }else{
          userDay=result;
          day= Math.floor((now-userDay[0].userDay)/(24*3600*1000));
          con.query("update record set recordDay=? where userName=?",[day,req.body.username],function(err,result){
            if(err){
              console.log(err);
            }else{
        
            }
          })
        }
  });
  con.query("select recordStars from record where userName=?",[req.body.username],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result[0].recordStars);
      var num=1;
      var star=result[0].recordStars;
      switch(true){
        case star<30:
            num=1;
            break;
        case star>29&&star<60:
            num=2;
            break;
        case star>59&&star<90:
            num=3;
            break;
        case star>89&&star<120:
            num=4;
            break;
        case star>119&&star<150:
            num=5;
            break;
        case star>149:
            num=6;
            break;
      }
      con.query("update record set recordAchievement=? where username=?",[num,req.body.username],function (err,result) {
        if(err){
          console.log(err);
        }else{
           
        }
      })
    }
  })

})
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

//论坛开始
//所有帖子
router.get('/block',function(req,res,next){
  con.query("select * from post order by postId desc",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  });
})
//我发出的
router.get('/sended',function(req,res,next){
  con.query("select * from post where userName=?",[username1],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  });
})
//block点赞
router.post('/zan', function (req, res) {  //接收POST请求
  /**获取请求体数据 */
  let data = req.body;   //解析body中的信息
  console.log(data);
  let message1 = {success:true};
  let message2 = {success:false};
  con.query("select * from post where postId=?",[req.body.postId],function(err,result){
    if(err){
      console.log(err);
      res.send(message2);
    }else{
      con.query("update post set postPointNumber=? where postId=?",[req.body.postPointNumber,req.body.postId],function(err,result){
        if(err){
          console.log(err);
          res.send(message2);
        }else{
          res.send(message1);
        }
      })
    }
  });
})

//发布帖子
router.post('/addpost', function(req, res, next) {
  var data = req.body;
  let now='';
  var time=new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  now = year + '-' + conver(month) + "-" + conver(date);
  function conver(s) {
      return s < 10 ? '0' + s : s;
  }
  console.log(data);
  con.query("insert into post(postContent,userName,userImage,postTime,postPointNumber,postReplyNum,postRepostNum,postImage) values(?,?,?,?,?,?,?,?)",
            [data.content,data.user.userName,data.user.userImage,now,0,0,0,data.imgUrl],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({success:true})
    }
  });
});

//论坛结束


module.exports = router;
