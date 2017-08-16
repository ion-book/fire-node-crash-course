var http=require('http');
var url1=process.argv[2];
var url2=process.argv[3];
var url3=process.argv[4];

var string1="";
var string2="";
var string3="";
http.get(url1, function callback(response){
	 response.setEncoding("utf8");
	 response.on("data",function(data){
	 	string1=string1+data;
	 })
	 response.on("end",function(){
	 	console.log(string1);
	 	//End of 1
	 	http.get(url2, function callback(response){
	 		response.setEncoding("utf8");
	 		response.on("data",function(data){
	 			string2=string2+data;
	 		})
	 		response.on("end",function(){
	 			console.log(string2);
	 			http.get(url3, function callback(response){
	 				response.setEncoding("utf8");
	 				response.on("data",function(data){
	 					string3=string3+data;
	 				})
	 				response.on("end",function(){
	 						console.log(string3);

	 				})
				});

	 		})
		});

	 })
});
