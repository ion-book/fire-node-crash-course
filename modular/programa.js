var dir= process.argv[2];
var ext= process.argv[3];
var mymodule=require('./modulo');

var callback=function(err,data){
	if(err)
		return console.error("There was an error");
	for(var j=0;j<data.length;j++)
	{
		console.log(data[j]);
	}
}
mymodule(dir,ext,callback);
