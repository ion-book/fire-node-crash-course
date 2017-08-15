module.exports=function(dir,ext,cb){
	var data2=[];
	var fs =require('fs');
	var path=require('path');

	fs.readdir(dir, function cb2(err,data){
		if(err)
    	    return cb(err);
		var list= data.length;

		for(var i=0;i<list;i++){
			if(path.extname(data[i])== "."+ext)
			 	data2.push(data[i]);
		}
		cb(null,data2);
	} );
}

