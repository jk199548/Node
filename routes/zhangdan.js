var express = require('express');
var ZhangdanService = require("../services/zhangdan_service.js");
var router = express.Router();


//登录的路由
router.get("/zhangdan",ZhangdanService.publish);
router.get("/zhangdan",ZhangdanService.search);

module.exports = router;
