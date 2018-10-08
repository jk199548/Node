//用户Dao数据访问
const {User} = require("./model.js");
const UserDao = {
	save(userinfo){
		//保存用户信息
		//userinfo.level = "VIP0";
		//userinfo.reg_time = new Date();
		return new User(userinfo).save();
		//new一个User模块实例，将用户信息（userinfo）作为参数传入,在调用save方法实现保存;
	},
	updata(condition,userinfo){
		
	},
	remove(condition){
		
	},
	find(condition){
		//查找订单信息
		
	}
};


module.exports = UserDao;