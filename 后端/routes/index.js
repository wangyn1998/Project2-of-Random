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
//发现管理
router.get('/discovery', function(req, res, next) {
  res.render('Discovery/discovery', { title: 'discovery' });
});
//游戏管理
router.get('/discovery/game', function(req, res, next) {
  res.render('Discovery/game', { title: 'game' });
});
//知识管理
router.get('/discovery/knowledge', function(req, res, next) {
  res.render('Discovery/knowledge', { title: 'knowledge' });
});
//每日推荐管理
router.get('/discovery/recommend', function(req, res, next) {
  res.render('Discovery/recommend', { title: 'recommend' });
});
//考试信息管理
router.get('/discovery/test', function(req, res, next) {
  res.render('Discovery/test', { title: 'test' });
});
//系统管理
router.get('/system', function(req, res, next) {
  res.render('System/system', { title: 'system' });
});

module.exports = router;
