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
//盒塘管理
router.get('/block', function(req, res, next) {
  res.render('Block/block', { title: 'block' });
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

/*发现管理*/
router.get('/discovery', function(req, res, next) {
  res.render('Discovery/discovery', { title: 'discovery' });
});
//游戏管理
router.get('/discovery/game', function(req, res, next) {
  res.render('Discovery/Game/game', { title: 'game' });
});
//编辑游戏
router.get('/discovery/editgame', function(req, res, next) {
  res.render('Discovery/Game/editgame', { title: 'editgame' });
});
//删除游戏
router.get('/discovery/deletegame', function(req, res, next) {
  res.render('Discovery/Game/delgame', { title: 'deletegame' });
});
//知识管理
router.get('/discovery/knowledge', function(req, res, next) {
  res.render('Discovery/Knowledge/knowledge', { title: 'knowledge' });
});
//编辑知识
router.get('/discovery/editknowledge', function(req, res, next) {
  res.render('Discovery/Knowledge/editknowledge', { title: 'editknowledge' });
});
//删除知识
router.get('/discovery/deleteknowledge', function(req, res, next) {
  res.render('Discovery/Knowledge/delknowledge', { title: 'deleteknowledge' });
});
//每日推荐管理
router.get('/discovery/recommend', function(req, res, next) {
  res.render('Discovery/Recommend/recommend', { title: 'recommend' });
});
//编辑每日推荐
router.get('/discovery/editrecommend', function(req, res, next) {
  res.render('Discovery/Recommend/editrecommend', { title: 'editrecommend' });
});
//删除每日推荐
router.get('/discovery/deleterecommend', function(req, res, next) {
  res.render('Discovery/Recommend/delrecommend', { title: 'deleterecommend' });
});
//考试信息管理
router.get('/discovery/test', function(req, res, next) {
  res.render('Discovery/Test/test', { title: 'test' });
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
