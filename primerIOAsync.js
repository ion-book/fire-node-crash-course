var fs=require('fs');
var num=0;
function printing(callback){
fs.readFile(process.argv[2], function(err,data){
	var str=data.toString();
	str=str.split('\n');
	num=str.length-1;
	callback();

})
}
function printresult(){
	console.log(num);
}

printing(printresult);
