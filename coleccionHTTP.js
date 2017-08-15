var http=require('http');
var urlPath=process.argv[2];
var dataString="";
http.get(urlPath, function callback(response){
	 response.setEncoding("utf8");
	 response.on("data",function(data){
	 	dataString=dataString+data;
	 })
	 response.on("end",function(){
	 	console.log(dataString.length);
	 	console.log(dataString);
	 })
});
