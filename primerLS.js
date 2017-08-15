var fs =require('fs');
var path=require('path');
var dir= process.argv[2];
var ext= process.argv[3];

fs.readdir(dir, function(err,data){
	if(err)
		return error;
	callback(data);
} );



function callback(data){
	
	var list= data.length;

	for(var i=0;i<list;i++){
		if(path.extname(data[i])== "."+ext)
		console.log(data[i]);
	}
}
