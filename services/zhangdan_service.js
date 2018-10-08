const ZhangdanDao = require("../dao/zhangdan_dao.js");

const ZhangdanService = {
	//发布职位信息
	publish(req,res,next){
		//
		const{id,shangping,danwei,gys,shuliang,jine,fukuan,shijian} = req.query;
		//保存到数据库
		console.log(req.query);
		ZhangdanDao.save({id,shangping,danwei,gys,shuliang,jine,fukuan,shijian})
		           .then((data)=>{
		           	console.log(data);
		           
		           	res.json({res_code:1,res_error:"",res_body:{data}});
		           	
		           })
		           .catch((err)=>{
		           	res.json({res_code:0,res_error:err,res_body:{}});
		           });
		
	},
	//查询数据库订单数据
	search(req,res,next){
		const{id} = req.query;
		ZhangdanDao.find({id:id})
		           .then((data)=>{
		           	console.log(data);
		           
		           	res.json({res_code:1,res_error:"",res_body:{data}});
		           	
		           })
		           .catch((err)=>{
		           	res.json({res_code:0,res_error:err,res_body:{}});
		           });
	}
}
module.exports = ZhangdanService;