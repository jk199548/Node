//数据访问层
const {Zhangdan} = require("./model.js");

const ZhangdanDao = {
	save(zhangdanInfo){
		return new Zhangdan(zhangdanInfo).save();
	}
};
module.exports = ZhangdanDao;