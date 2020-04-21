var express = require('express');
var router = express.Router();

//登录页
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});
//首页
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});
//用户管理
router.get('/user', function(req, res, next) {
  res.render('User/user', { title: 'user' });
});
/**删除用户 */
router.get('/deleteuser', function(req, res, next) {
  res.render('User/deleteUser', { title: 'user' });
});
/**搜索用户 */
router.post('/searchuser', function(req, res, next) {
  var userName=req.body.userName;
  res.render('User/searchUser', { title: 'user',userName:userName });
});
/*盒塘管理*/
router.get('/block', function(req, res, next) {
  res.render('Block/block', { title: 'block' });
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
router.get('/score/list', function(req, res, next) {
  res.render('Score/list', { title: 'list' });
});
router.get('/score/slist', function(req, res, next) {
  res.render('Score/listIn', { title: 'listIn' });
});
router.post('/searchuserscore', function(req, res, next) {
  var userName=req.body.userName;
  res.render('Score/searchUserScore', { title: 'user',userName:userName });
});
//积分任务管理
router.get('/score/task', function(req, res, next) {
  res.render('Score/task', { title: 'task' });
});
router.get('/score/deletetask', function(req, res, next) {
  res.render('Score/deleteTask', { title: 'task' });
});
router.post('/searchtask', function(req, res, next) {
  var taskId=taskId;
  res.render('Score/searchTask', { title: 'user',taskId:taskId });
});
router.post('/addtask', function(req, res, next) {
  var taskId=taskId;
  res.render('Score/addTask', { title: 'user',taskId:taskId });
});
router.post('/edit', function(req, res, next) {
  var taskId=taskId;
  res.render('Score/editTask', { title: 'user',taskId:taskId });
});
router.post('/edit1', function(req, res, next) {
  var taskId=taskId;
  res.render('Score/editTask1', { title: 'user',taskId:taskId });
});
router.post('/updatetask', function(req, res, next) {
  var taskId=taskId;
  res.render('Score/updateTask', { title: 'user',taskId:taskId });
});
//成就管理
router.get('/score/achievement', function(req, res, next) {
  res.render('Score/achievement', { title: 'task' });
});
router.get('/score/deletestar', function(req, res, next) {
  res.render('Score/deleteStar', { title: 'task' });
});
router.post('/searchstar', function(req, res, next) {
  var taskId=taskId;
  res.render('Score/searchStar', { title: 'user',taskId:taskId });
});
router.post('/addstar', function(req, res, next) {
  var taskId=taskId;
  res.render('Score/addStar', { title: 'user',taskId:taskId });
});
router.post('/editstar', function(req, res, next) {
  var taskId=taskId;
  res.render('Score/editStar', { title: 'user',taskId:taskId });
});
router.post('/editstar1', function(req, res, next) {
  var taskId=taskId;
  res.render('Score/editStar1', { title: 'user',taskId:taskId });
});
router.post('/updatestar', function(req, res, next) {
  var taskId=taskId;
  res.render('Score/updateStar', { title: 'user',taskId:taskId });
});
//盒子管理
router.get('/box', function(req, res, next) {
  res.render('Box/box', { title: 'box' });
});
router.get('/box/person', function(req, res, next) {
  res.render('Box/personBox', { title: 'personBox' });
});
router.get('/box/card', function(req, res, next) {
  res.render('Box/card', { title: 'card' });
});
router.get('/box/record', function(req, res, next) {
  res.render('Box/record', { title: 'card' });
});
router.get('/box/achievementdetail', function(req, res, next) {
  res.render('Box/achievementDetail', { title: 'card' });
});
router.get('/box/deletecard', function(req, res, next) {
  res.render('Box/deleteCard', { title: 'deletegame' });
});
router.get('/box/question', function(req, res, next) {
  res.render('Box/question', { title: 'deletegame' });
});
router.get('/box/answer', function(req, res, next) {
  res.render('Box/answer', { title: 'deletegame' });
});
/**发现管理*/
router.get('/discovery', function(req, res, next) {
  res.render('Discovery/discovery', { title: 'discovery' });
});
/*游戏管理*/
router.get('/discovery/game', function(req, res, next) {
  res.render('Discovery/Game/game', { title: 'game' });
});
//搜索游戏
router.post('/searchgame', function(req, res, next) {
  res.render('Discovery/Game/searchgame', { title: 'searchgame' });
});
//编辑游戏
router.get('/discovery/editgame', function(req, res, next) {
  res.render('Discovery/Game/editgame', { title: 'editgame' });
});
//删除游戏
router.get('/discovery/deletegame', function(req, res, next) {
  res.render('Discovery/Game/delgame', { title: 'deletegame' });
});
/*知识管理*/
router.get('/discovery/knowledge', function(req, res, next) {
  res.render('Discovery/Knowledge/knowledge', { title: 'knowledge' });
});
//搜索知识
router.post('/searchknowledge', function(req, res, next) {
  res.render('Discovery/Knowledge/findknowledge', { title: 'searchknowledge' });
});
//编辑知识
router.get('/discovery/editknowledge', function(req, res, next) {
  res.render('Discovery/Knowledge/editknowledge', { title: 'editknowledge' });
});
//删除知识
router.get('/discovery/deleteknowledge', function(req, res, next) {
  res.render('Discovery/Knowledge/delknowledge', { title: 'deleteknowledge' });
});
/*每日推荐管理*/
router.get('/discovery/recommend', function(req, res, next) {
  res.render('Discovery/Recommend/recommend', { title: 'recommend' });
});
//搜索每日推荐
router.post('/searchrecommend', function(req, res, next) {
  res.render('Discovery/Recommend/findrecommend', { title: 'searchrecommend' });
});
//编辑每日推荐
router.get('/discovery/editrecommend', function(req, res, next) {
  res.render('Discovery/Recommend/editrecommend', { title: 'editrecommend' });
});
//删除每日推荐
router.get('/discovery/deleterecommend', function(req, res, next) {
  res.render('Discovery/Recommend/delrecommend', { title: 'deleterecommend' });
});
/*考试信息管理*/
router.get('/discovery/test', function(req, res, next) {
  res.render('Discovery/Test/test', { title: 'test' });
});
//搜索考试信息
router.post('/searchtest', function(req, res, next) {
  res.render('Discovery/Test/searchtest', { title: 'searchtest' });
});
//编辑考试信息
router.get('/discovery/edittest', function(req, res, next) {
  res.render('Discovery/Test/edittest', { title: 'edittest' });
});
// 删除考试信息
router.get('/discovery/deletetest', function(req, res, next) {
  res.render('Discovery/Test/deltest', { title: 'deletetest' });
});
/*系统管理*/
router.get('/system', function(req, res, next) {
  res.render('System/system', { title: 'system' });
});

module.exports = router;
