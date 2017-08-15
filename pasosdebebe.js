var len=process.argv.length;  //cuantos argumentos ingresan?
var sum=0;
for(var i=2; i<len; i++){
	sum+=Number(process.argv[i]);   
}
console.log(sum); 
