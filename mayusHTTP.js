var http=require('http');
var fs=require('fs');
var map=require('through2-map');
var port=process.argv[2];

var server=http.createServer(function callback(request,response){
	if(request.method=='POST'){
		response.writeHead(200, {"Content-type": "text/html"});
		request.pipe(map(function(chunk){
			return chunk.toString().toUpperCase()
		})).pipe(response);
	}
})
server.listen(port);