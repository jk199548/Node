//引入mongoose模块;
const mongoose = require("mongoose");

//连接mongodb数据库
mongoose.connect('mongodb://localhost/chaoshi');

//创建用户Schema  职位Schema

const userSchema = new mongoose.Schema({
	username:String,
	//password:String,
	//email:String,
	//level:String,
	//reg_time:Date
});

const positionSchema = new mongoose.Schema({
	name:String,
	company:String,
    salary:String,
	logo:String,
	address:String
});

const zhangdanSchema = new mongoose.Schema({
	id:Number,
	shangping:String,
	danwei:String,
	gys:String,
	shuliang:Number,
	jine:String,
	
	fukuan:String,
	shijian:String
})


//根据用户Schema创建用户模型
const User = mongoose.model("user",userSchema);

//根据职位Schema创建用户模型
const Position = mongoose.model("position",positionSchema);
//根据订单Schema创建订单模型;
const Zhangdan = mongoose.model("zhangdan",zhangdanSchema);


module.exports = {User,Position,Zhangdan};

