var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var dbconfig=require('../config/dbconfig.json');
var manager = '';
var login = false;
var con = mysql.createConnection(dbconfig);
con.connect();
  
/*登录页*/
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});
//验证身份
router.post('/home', function(req, res, next) {
  var data = req.body;
  var username = data.adminUsername;
  var pwd = data.adminPwd;
  var code = data.code;
  var getcode = data.getcode; 
  manager = username;
  con.query("select * from alist",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i=0;i<result.length;i++){
        if(username == result[i].adminUsername && pwd == result[i].adminPwd){
          login = true;
          if(code == getcode){
            res.end('success');
          }
          else{
            res.end('code-error');
          }
          break;
        }
        else{
          continue;
        }
      }
      if(login == false){
        res.end('error');
      }
    }
  });
});
//首页
router.get('/home', function(req, res, next) {
  let now='';
  var time=new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  now = year + '-' + conver(month) + "-" + conver(date);
  function conver(s) {
      return s < 10 ? '0' + s : s;
  }
  con.query("select * from user;select * from user where userDay =?;select * from post",[now],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result[1]);
        res.render('home',{userListall:result[0],userListnew:result[1],postList:result[2]});
      }
    })
}); 
//用户管理
/**获取用户--升序（默认） */
router.get('/user', function(req, res, next) {
  con.query("select * from user order by userId asc",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("User/user",{userList:result});
    }
  })
});
/**获取用户--降序 */
router.get('/userdesc', function(req, res, next) {
  con.query("select * from user order by userId desc",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("User/user",{userList:result});
    }
  })
});
/**删除用户 */
router.get('/deleteuser', function(req, res, next) {
  var userId=req.query.userId;
  con.query("delete from user where userId=?",[userId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('User/deleteUser', { title: 'deleteuser' });
    }
  })
});
/**搜索用户 */
router.post('/searchuser', function(req, res, next) {
  var userName=req.body.userName;
  con.query("select * from user where userName=?",[userName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('User/searchUser', { userList:result,userName:userName });
    }
  })
});
/*盒塘管理*/
router.get('/block', function(req, res, next) {
  res.render('Block/block', { title: 'block' });
});
//搜索帖子
router.post('/searchpost', function(req, res, next) {
  res.render('Block/searchpost', { title: 'searchpost' });
});
//删除帖子
router.get('/deletepost', function(req, res, next) {
  res.render('Block/delpost', { title: 'deletepost' });
});
//帖子回复
router.get('/block/reply', function(req, res, next) {
  res.render('Block/reply', { title: 'reply' });
});
// 帖子详情
router.get('/block/detail', function(req, res, next) {
  res.render('Block/postDetail', { title: 'postDetail' });
});
// 删除回复
router.get('/delreply', function(req, res, next) {
  res.render('Block/delreply', { title: 'delReply' });
});
//积分管理
router.get('/score', function(req, res, next) {
  res.render('Score/score', { title: 'score' });
});
//积分表管理
/**获取积分总表 */
router.get('/score/list', function(req, res, next) {
  con.query("select * from score order by sum desc",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Score/list",{scoreList:result});
    }
  })
});
/**获取个人积分明细表 */
router.get('/score/slist', function(req, res, next) {
  sum=[];
  var sum0=0;
  var userPhone=req.query.userPhone;
  var userName=req.query.userName;
  con.query("select * from slist where userPhone=?",[userPhone],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i = 0 ; i < result.length; i++) {
        if(i==0){
          sum[i]=parseInt(result[i].taskScore)
        }
        else{
          sum[i]=parseInt(result[i].taskScore)+sum[i-1]
        }
      }
      res.render("Score/listIn",{slistList:result,userName:userName,userPhone:userPhone,sum:sum});
    }
  })
});
/**搜索用户积分 */
router.post('/searchuserscore', function(req, res, next) {
  var userName=req.body.userName;
  con.query("select * from score where userName=?",[userName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Score/searchUserScore', { scoreList:result,userName:userName,});
    }
  })
});
//积分任务管理
/**获取任务 */
router.get('/score/task', function(req, res, next) {
   con.query("select * from task",function(err,result){
     if(err){
       console.log(err);
     }
     else{
       res.render('Score/task', {taskList:result});
      }
   })
});
/**删除任务 */
router.get('/score/deletetask', function(req, res, next) {
  var taskId=req.query.taskId;
  con.query("delete from task where taskId=?",[taskId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Score/deleteTask', { title: 'task' });
    }
  })
});
/**搜索任务 */
router.post('/searchtask', function(req, res, next) {
  var taskId=req.body.taskId;
  con.query("select * from task where taskId=?",[taskId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Score/searchtask",{taskList:result});
    }
  })
});
/**添加任务 */
router.post('/addtask', function(req, res, next) {
  var score=req.body.score;
  var content=req.body.content;
  console.log(score);
  console.log(content);
  con.query("insert into task(taskContent,taskScore) values(?,?)",[content,score],function (err,result) {
    if(err){
      console.log(err);
    }else{  
      res.render('Score/addTask', { title: 'user'});
    }
  });
});
let taskId=0;
/**编辑任务 */
router.post('/edit', function(req, res, next) {
  taskId=req.body.task;
  console.log(taskId);
  con.query("select * from task",function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Score/editTask",{taskList:result});
    }
  });
});
/**编辑搜索任务 */
router.post('/edit1', function(req, res, next) {
  taskId=req.body.task;
  console.log(taskId);
  con.query("select * from task where taskId=?",[taskId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      console.log(result)
      res.render("Score/editTask1",{taskList:result});
    }
  });
});
/**更新任务 */
router.post('/updatetask', function(req, res, next) {
  var taskContent=req.body.content1;
  var taskScore=req.body.score1;
  con.query("update task set taskContent=?,taskScore=? where taskId=?",[taskContent,taskScore,taskId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render('Score/updateTask', { title: 'updatetask'});
    }
  });
});
//成就管理
/**获取成就 */
router.get('/score/achievement', function(req, res, next) {
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from achieve",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Score/achievement', { achieveList:result });
     }
  })
});
/**删除成就 */
router.get('/score/deletestar', function(req, res, next) {
  var achieveId=req.query.achieveId;
  con.query("delete from achieve where achieveId=?",[achieveId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Score/deleteStar', { title: 'star' });
    }
  })
});
let achieveStarNum='';
/**搜索成就 */
router.post('/searchstar', function(req, res, next) {
  achieveStarNum=req.body.achieveStarNum;
  con.query("select * from achieve where achieveStarNum=?",[achieveStarNum],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Score/searchStar",{achieveList:result});
    }
  })
});
/**添加成就 */
router.post('/addstar', function(req, res, next) {
  var score=req.body.score;
  var content=req.body.content;
  console.log(score);
  console.log(content);
  con.query("insert into achieve(achieveName,achieveStarNum) values(?,?)",[content,score],function (err,result) {
    if(err){
      console.log(err);
    }else{  
      res.render('Score/addStar', { title: 'star'});
    }
  });
});
let achieveId=0;
/**编辑成就 */
router.post('/editstar', function(req, res, next) {
  achieveId=req.body.achieve;
  con.query("select * from achieve",function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Score/editStar",{achieveList:result});
    }
  });
});
/**编辑搜索成就 */
router.post('/editstar1', function(req, res, next) {
  achieveId=req.body.achieve;
  con.query("select * from achieve where achieveStarNum=?",[achieveStarNum],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Score/editStar1",{achieveList:result});
    }
  });
});
/** 更新成就*/
router.post('/updatestar', function(req, res, next) {
  var achieveName=req.body.content1;
  var achieveStarNum=req.body.score1;
  console.log(achieveName);
  console.log(achieveStarNum)
  con.query("update achieve set achieveName=?,achieveStarNum=? where achieveId=?",[achieveName,achieveStarNum, achieveId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render('Score/updateStar', { title: 'updatestar'});
    }
  });
});
/* 盒子管理*/
// 获取盒子用户列表
router.get('/box', function(req, res, next) {
  con.query("select * from user",function (err,result) {
    if(err){
      console.log(err);
    }else{
      res.render("Box/box",{uList:result});
    }
  }); 
});
// 搜索盒子用户
router.post('/searchboxuser', function(req, res, next) {
  var userName=req.body.userName;
  console.log(userName);
  con.query("select * from user where userName=?",[userName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Box/boxuserSearch', { uList:result,userName:userName });
    }
  })
});
// 盒子
let boxuserName;
router.get('/box/person', function(req, res, next) {
  boxuserName=req.query.userName;
  con.query("select * from box where userName=?",[boxuserName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("Box/personBox",{boxList:result,userName:boxuserName});
    }
  })
});
// 搜索盒子
router.post('/searchbox', function(req, res, next) {
  var boxName=req.body.boxName;
  con.query("select * from box where boxName=? and userName=?",[boxName,boxuserName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Box/boxSearch', {boxList:result});
    }
  })
});
// 卡片详情
let boxId;
router.get('/box/card', function(req, res, next) {
  boxId=req.query.boxId;
  con.query("select * from card where boxId=?",[boxId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
     res.render("Box/card",{cardList:result,boxuserName:boxuserName});
    }
  })
});
// 问题详情
router.get('/box/question', function(req, res, next) {
  var userName=req.body.userName;
  console.log(userName);
  con.query("select * from user where userName=?",[userName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Box/question',{cardList:result,userName:userName });
    }
  })
});
// 答案详情
router.get('/box/answer', function(req, res, next) {
  res.render('Box/answer', { title: 'deletegame' });
});
// 删除卡片
router.get('/box/deletecard', function(req, res, next) {
  var cardId=req.query.cardId;
  con.query("delete from card where cardId=?",[cardId],function (err,result) {
    if(err){
      console.log(err);
    }else{
      console.log("boxid"+boxId)
      res.render("Box/deleteCard",{boxId:boxId});
    }
  });
});
// 学习记录
router.get('/box/record', function(req, res, next) {
  var userName=req.query.userName;
  console.log(userName);
  con.query("select * from record where userName=?",[userName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
     res.render("Box/record",{recordList:result,userName:userName});
    }
  })
});
// 成就
router.get('/box/achievementdetail', function(req, res, next) {
  res.render('Box/achievementDetail', { title: 'card' });
});
/**发现管理*/
router.get('/discovery', function(req, res, next) {
  res.render('Discovery/discovery', { title: 'discovery' });
});
/*游戏管理*/
router.get('/discovery/game', function(req, res, next) {
  con.query("select * from game",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Game/game', { game: result });   
    }
  });
});
//添加游戏
router.post('/discovery/addgame', function(req, res, next) {
  var gameName= req.body.gameName;
  var gameContent= req.body.gameContent;
  con.query("insert into game(gameName,gameContent) values(?,?)",[gameName,gameContent],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end('success'); 
    }
  });
});
//搜索游戏
router.post('/discovery/searchgame', function(req, res, next) {
  var game = req.body.game;
  con.query("select * from game where gameName=?",[game],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Game/searchgame', { game: result });   
    }
  });
});
//删除游戏
router.get('/discovery/deletegame', function(req, res, next) {
  var gameId = req.query.gameId;
  console.log(gameId);
  con.query("delete from game where gameId=?",[gameId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Game/delgame', { title: 'deletegame' });
    }
  });
});
//编辑游戏
router.get('/discovery/editgame', function(req, res, next) {
  res.render('Discovery/Game/editgame', { title: 'editgame' });
});
/*知识管理*/
router.get('/discovery/knowledge', function(req, res, next) {
  con.query("select * from knowledge",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Knowledge/knowledge', { knowledge: result });   
    }
  });
});
//添加知识
router.post('/discovery/addknowledge', function(req, res, next) {
  var title = req.body.title;
  var content = req.body.content;
  con.query("insert into knowledge(knowledgeTitle,knowledgeContent) values(?,?)",[title,content],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end('success');  
    }
  });
});
//搜索知识
router.post('/discovery/searchknowledge', function(req, res, next) {
  var title = req.body.knowledge;
  con.query("select * from knowledge where knowledgeTitle=?",[title],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Knowledge/findknowledge', { knowledge: result });   
    }
  });
});
//删除知识
router.get('/discovery/deleteknowledge', function(req, res, next) {
  var knowledgeId = req.query.knowledgeId;
  con.query("delete from knowledge where knowledgeId=?",[knowledgeId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Knowledge/delknowledge', { title: 'deleteknowledge' }); 
    }
  });
});
//编辑知识
router.get('/discovery/editknowledge', function(req, res, next) {
  res.render('Discovery/Knowledge/editknowledge', { title: 'editknowledge' });
});
/*每日推荐管理*/
router.get('/discovery/recommend', function(req, res, next) {
  con.query("select * from recommend",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Recommend/recommend', { recommend: result });   
    }
  });
});
//添加每日推荐
router.post('/discovery/addrecommend', function(req, res, next) {
  var time = req.body.time;
  var content = req.body.content;
  con.query("insert into recommend(recommendTime,recommendContent) values(?,?)",[time,content],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end('success');
    }
  });
});
//搜索每日推荐
router.post('/discovery/searchrecommend', function(req, res, next) {
  var time = req.body.recommend;
  con.query("select * from recommend where recommendTime=?",[time],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Recommend/findrecommend', { recommend: result });  
    }
  });
});
//删除每日推荐
router.get('/discovery/deleterecommend', function(req, res, next) {
  var recommendId = req.query.recommendId;
  con.query("delete from recommend where recommendId=?",[recommendId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Recommend/delrecommend', { title: 'deleterecommend' });  
    }
  });
  
});
//编辑每日推荐
router.get('/discovery/editrecommend', function(req, res, next) {
  res.render('Discovery/Recommend/editrecommend', { title: 'editrecommend' });
});
/*考试信息管理*/
router.get('/discovery/test', function(req, res, next) {
  con.query("select * from test",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Test/test', { test: result });  
    }
  });
});
//添加考试信息
router.post('/discovery/addtest', function(req, res, next) {
  var title = req.body.title;
  var content = req.body.content;
  con.query("insert into test(testTitle,testContent) values(?,?)",[title,content],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end('success');  
    }
  });
});
//搜索考试信息
router.post('/discovery/searchtest', function(req, res, next) {
  var title = req.body.test;
  con.query("select * from test where testTitle=?",[title],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Test/searchtest', { test: result });  
    }
  });
});
// 删除考试信息
router.get('/discovery/deletetest', function(req, res, next) {
  var testId = req.query.testId;
  con.query("delete from test where testId=?",[testId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Discovery/Test/deltest', { title: 'deletetest' });   
    }
  });
});
//编辑考试信息
router.get('/discovery/edittest', function(req, res, next) {
  res.render('Discovery/Test/edittest', { title: 'edittest' });
});
/*系统管理*/
//显示管理员信息
router.get('/system', function(req, res, next) {
  con.query("select * from ainflist where adminUsername=?",[manager],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('System/system', { manager: result[0] });   
    }
  });
});
//编辑管理员信息
router.post('/system', function(req, res, next) {
  var data = req.body; 
  var sex = data.sex;
  var phone = data.phone;
  var email = data.email;
  var position = data.position;
  console.log(data);
  con.query("update ainflist set adminSex=?,adminTel=?,adminEmail=?,adminPosition=? where adminUsername=?",[sex,phone,email,position,manager],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      con.query("select * from ainflist where adminUsername=?",[manager],function(err,result){
        if(err){
          console.log(err);
        }
        else{
          res.render('System/system', { manager: result[0] });   
        }
      });   
    }
  });
});

module.exports = router;
