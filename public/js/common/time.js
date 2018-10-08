function Time(){
	this.showTime();
}
$.extend(Time.prototype, {
	showTime(){
		setInterval(function(){
			var myDate = new Date();
			var myYear = myDate.getFullYear();//获取当前年
			var myMonth =  myDate.getMonth()+1;//当前月
			var myDay = myDate.getDate();//当前日
		    var mytime=myDate.toLocaleTimeString(); //当前小时
		    var myWeek = myDate.getDay();//当前星期几
		    //获取当前时间
		    var nowtime = myDate.toLocaleString();
	        $(".time").html(myYear+"年"+myMonth+"月"+myDay+"日"+mytime+"&nbsp"+"星期"+myWeek);
		},1000);
		
	}
	
})

new Time;