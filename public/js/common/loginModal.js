function LoginModal(){
	this.addListener();
};


$.extend(LoginModal.prototype,{
	addListener() {
		// 登录
		$(".login").on("click", this.loginHandler);		
	},
	loginHandler(){
		const url = "/api/users/login";
		data=$(".login-form").serialize();
		//console.log(data);
		$.post(url,data,(data)=>{
			//console.log(data);
			if(data.res_code === 1){
				//登录成功;
				//将登录成功的用户信息保存到sessionStorage中;
				sessionStorage.loginUser=JSON.stringify(data.res_body.data);
				//console.log(sessionStorage.loginUser);
				//登录成功刷新页面
				location = "/index.html";
			}else{
				$(".login-error").removeClass("hidden");
			}
		},"json");
		//sessionStorage.loginUser=JSON.stringify(username);
		
	}
	});

new LoginModal();
