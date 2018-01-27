-图片合成功能  
启动  
npm install  
node entry  

api文档
http://127.0.0.1:10086/ get 可以获取测试图片案例  
http://127.0.0.1:10086/ post  
post 参数说明  
{ 
	avatar : ''//头像base64字符串  
	user_name:''//用户名称  
	rank : ''//用户排名  
	quality:'0.5'//质量 默认0.5 该参数在非image/png才生效  
	file_type:"image/png"//默认为image/png,建议使用image/jpeg  
}   