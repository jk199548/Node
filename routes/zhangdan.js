var express = require('express');
var ZhangdanService = require("../services/zhangdan_service.js");
var router = express.Router();


//账单的发布的路由
router.get("/zhangdan",ZhangdanService.publish);
//账单的查找的路由
router.get("/searchzhangdan",ZhangdanService.search);

//删除订单数据的路由

router.get("/deletezhangdan",ZhangdanService.remove);
//修改账单信息
router.get("/updatezhangdan",ZhangdanService.update);

module.exports = router;
