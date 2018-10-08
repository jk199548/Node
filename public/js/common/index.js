function Index(){
	this.createDom();
	this.loadUser();
	this.addListener();
	this.ulCilckListener();
}
//创建导航的DOM节点;
Index.navTemplate = `<nav class="navbar navbar-default ">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand">超市账单管理系统</a>
	    </div>

	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      
	      
	      <ul class="nav navbar-nav navbar-right reg-login-link  ">
	        <li data-toggle="modal" data-target="#loginModal" class="login_btn"><a href="/html/login.html" >登录</a></li>
	        
	      </ul>
	      <ul class="nav navbar-nav navbar-right hidden welcome-logout-link">
	        <li ><a href="#">欢迎:</a></li>
	        <li ><a href="#" class="logout-link">注销</a></li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
	
	<div class="box" style="width: 100%;height: 30px;background:#F8F8F8 url(/imgs/time.png) no-repeat 75px 10px;border-bottom: 1px solid #C0C0C0;">
		
			<div class="time" style="padding-left: 100px;margin-top: 10px;"></div>
				
			
			<p style="margin-top: 10px;">温馨提示：为了能正常浏览，请使用高版本浏览器!（IE10+）</p>
		
	</div>`;
$.extend(Index.prototype, {
	//创建导航DOM节点
	createDom() {
		//将导航追加到<header>元素内部;
		$(Index.navTemplate).appendTo("header");
	},
	/*loadModal(){
		//加载注册、登录模块;
		new RegisterModal();
		new LoginModal();
	},*/
	//加载用户登录信息;
	loadUser(){
		//从sessionStorage中获取登录成功的用户信息;
		let user = sessionStorage.loginUser;
        if(!user)//
        return;
        
        user = JSON.parse(user);
        //console.log(user);
        $(".reg-login-link").hide()
                            .next(".welcome-logout-link")
                            .removeClass("hidden")
                            .find("a:first").text("欢迎:"+user.username);
        $(".text").text("欢迎"+user.username+"来到超市账单管理系统");
	},
	
	//注销事件监听
	addListener(){
		$(".logout-link").on("click",this.logoutHandler);
	},
	logoutHandler(){
		sessionStorage.removeItem("loginUser");
		
		//页面重新加载
		window.location.reload();
	},
	//列表点击事件的绑定
	ulCilckListener(){
		$(".left-nav ul li a").on("click",function() {
			$(this).parent().addClass("beijing").siblings().removeClass("beijing");
			//location = "/html/zhangdan.html";
		});
	},
	
	
})

new Index();