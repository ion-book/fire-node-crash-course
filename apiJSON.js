var http = require('http');
var fs = require('fs');
var url=require('url');
var port=process.argv[2];

//Handle a user request
function onRequest(request,response){
	if(request.method=='GET'){
		//parse url
		var pUrl=url.parse(request.url, true);
		var dat = new Date(pUrl.query.iso);
		var path=pUrl.path;
		//check path for api/parsetime
		if(path.indexOf("api/parsetime")>=0){
			//send json obj with hr and min
			var time={
				hour: dat.getHours(),
				minute:dat.getMinutes(),
				second:dat.getSeconds()
			}
			response.writeHead(200, {"Content-type": "text/html"});
			response.end(JSON.stringify(time));
		}
		
		//check path for api/unixtime
		if(path.indexOf("api/unixtime")>=0){
			//send json obj with unixtime
			var time={
				"unixtime":dat.getTime()
			}
			response.writeHead(200, {"Content-type": "text/html"});
			response.end(JSON.stringify(time));
		}
	}
};

http.createServer(onRequest).listen(port);