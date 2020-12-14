window.onload=function(){
	
	var lan =document.getElementById("Landing");
	
	
	
	lan.onclick=function(){
		
		
		
	var zhanghao = document.getElementById("zhanghao").value
	var mima =document.getElementById("mima").value
	var mimacuowu =document.getElementById("mimacuowu")
	
	
	if(zhanghao&&mima){
		
		if(zhanghao=="2547721127@qq.com"&&mima=="zzj10113014"){
			window.location.href="html/home.html"
		}else{
			mimacuowu.innerHTML="账号或密码不正确"
			
			mimacuowu.style.display="inline"
			document.getElementById("mima").value=""
		}
		
		
	}else{
		
		mimacuowu.innerHTML="未输入账号或密码"
		mimacuowu.style.display="inline"
		
	}
	
	
	
	
	
	
	
	
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}