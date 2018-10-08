/*用户业务逻辑处理*/
const UserDao = require("../dao/user_dao.js");
//const bcrypt = require("bcryptjs");
const UserService = {
	
	login(req,res,next){
		//获取get请求中传递的登录用户名与密码;
		const {username} = req.body;
		//从数据库中查询出用户名对应的用户信息;
		//console.log(req.body);
		UserDao.find({username:username}).then((data)=>{
			//data是一个数组，存放了所在查找到的满足条件的数据;
			//console.log(data);
			if(data.length === 1){
				//用户信息
				const user = data[0];
				console.log(user);
				//比较从请求中获取到的用户的密码与实际保存的密码是否匹配;
				const user1 = username;
				const user2 = user.username;
				if(user1==user2){
					//登录成功
					res.json({res_code:1,res_error:"",res_body:{data:{username:user.username}}});
				}else{
					res.json({res_code:0,res_error:"",res_body:{}});
				}
				
			}else{
				res.json({res_code:0,res_error:"",res_body:{}});
			}
		})
		/*.catch((err)=>{
			res.json({res_code:-1});
		});*/
		
		
	},
	
}
module.exports = UserService;