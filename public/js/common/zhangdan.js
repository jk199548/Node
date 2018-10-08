function AddZhangDanModal(){
	this.addListener();
	this.init();
}
$.extend(AddZhangDanModal.prototype,{
	//初始化加载，判断数据库是否存在订单数据
	init() {
		// 加载时，"职位管理" 导航激活
		//$(".position-page").addClass("active").siblings().removeClass("active");
		// 加载第1页数据
		this.loadZhangDan();
	},
	// 按页加载职位信息
	loadZhangDan() {
		
		
		// ajax 访问查询接口
		id = 1;
		$.getJSON("/api/zhangdan/zhangdan",{id},(data)=>{
						
			const curr = data.res_body.data;
			//let html = "";
			console.log(curr);
			const	html = `<tr>
                <td>${curr.id}</td>
                <td>${curr.shangping}</td>
                <td>${curr.danwei}</td>
                <td>${curr.gys}</td>
                <td>${curr.shuliang}</td>
                <td>${curr.jine}</td>
                <td>${curr.fukuan}</td>
                <td>${curr.shijian}/td>
                <td>
                    <a href="#"><img src="../imgs/read.png" alt="查看" title="查看"/></a>
                    <a href="#" data-toggle="modal" data-target="#xiugaiPosModal"><img src="../imgs/xiugai.png" alt="修改" title="修改"/></a>
                    <a href="#" class="removeBill"><img src="../imgs/schu.png" alt="删除" title="删除"/></a>
                </td>
            </tr>`;
			});
			// 显示
			$(".providerTable  tbody").append(html);
		
	},
	//事件监听，添加账单事件监听
	addListener(){
		$(".btn-add-zd").on("click",this.addzdHandler);
	},
	addzdHandler(){
		
		const url = "/api/zhangdan/zhangdan",
		data = $(".add-pos-form").serialize();
		console.log(data);
		$.getJSON(url, data, (data)=>{
			const curr = data.res_body.data;
			console.log(curr);
			//将添加的职位信息追加到表格末尾;
			const html = `<tr>
                <td>${curr.id}</td>
                <td>${curr.shangping}</td>
                <td>${curr.danwei}</td>
                <td>${curr.gys}</td>
                <td>${curr.shuliang}</td>
                <td>${curr.jine}</td>
                <td>${curr.fukuan}</td>
                <td>${curr.shijian}</td>
                <td>
                    <a href="#"><img src="../imgs/read.png" alt="查看" title="查看"/></a>
                    <a href="#" data-toggle="modal" data-target="#xiugaiPosModal"><img src="../imgs/xiugai.png" alt="修改" title="修改"/></a>
                    <a href="#" class="removeBill"><img src="../imgs/schu.png" alt="删除" title="删除"/></a>
                </td>
            </tr>`;
				$(".providerTable tbody").append(html);
				//关闭模态框;
				$("#addzdModal").modal("hide");
		});
	
	}
	
})
new AddZhangDanModal();