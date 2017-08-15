var http=require('http');
var urlPath=process.argv[2];
http.get(urlPath, function callback(response){
	 response.setEncoding("utf8");
	 response.on("data",function(data){
	 console.log(data);
	 })
});
