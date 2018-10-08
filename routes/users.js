var express = require('express');
var UserService = require("../services/user_service.js");
var router = express.Router();


//登录的路由
router.post("/login",UserService.login);

module.exports = router;
