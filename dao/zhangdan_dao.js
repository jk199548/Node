//数据访问层
const {Zhangdan} = require("./model.js");

const ZhangdanDao = {
	save(zhangdanInfo){
		return new Zhangdan(zhangdanInfo).save();
	},
	find(condition){
		//查找订单信息
		return Zhangdan.find(condition).limit(1);
	},
	remove(condition){
		return Zhangdan.find(condition).remove();
	},
	updata(condition,userinfo){
		return Zhangdan.updata(condition,userinfo).updata();
	},
};
module.exports = ZhangdanDao;