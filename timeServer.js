var net=require('net');
var port =process.argv[2];
var d= new Date();

var year=d.getFullYear();
var month=d.getMonth()+1;
if(month<10)
	month='0'+month;
var date=d.getDate()
if(date<10)
	date='0'+date;
var hour=d.getHours();
if(hour<10)
	hour='0'+hour;
var min=d.getMinutes();
if(min<10)
	min='0'+min;
var fullDate=year+'-'+month+'-'+date+" "+hour+':'+min+"\n";

var server=net.createServer(function listener(socket){
	//Socket handling logic
	socket.end(fullDate);
})
server.listen(port)
