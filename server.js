var http = require('http');
var url = require('url');

function startApp(route,handle){

	http.createServer(function(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('Request for '+pathname+' received.');
		//交给路由器处理
		route(handle,pathname,response,request);
	}).listen(8000);
	console.log('Server has Started.');


}

exports.startApp = startApp;