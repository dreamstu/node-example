var querystring = require('querystring'),
	formidable = require('formidable'),
	fs = require('fs');
	
function upload(request,response){
	console.log('Request handler "upload" was called.');
	response.writeHead(200,{"Content-Type":"text\plain"});
	var form = new formidable.IncomingForm();
	form.uploadDir = "tmp";
	console.log('about to parse');
	form.parse(request,function(err,fileds,files){
		console.log('parsing done.');
		try{
			fs.renameSync(files.upload.path,'./tmp/test.png');	
		}catch(err){
			console.log('file rename error :'+err);
		}
		response.writeHead(200,{'Content-Type':'text/html'});
		response.write('received image:<br/>');
		response.write('<img src="/show" />');
		response.end();
	});
}

function show(response){
	console.log('Request handler "show" was called.');
	fs.readFile('./tmp/test.png','binary',function(err,file){
		if(err){
			response.writeHead('500',{'Content-Type':'text/plain'});
			response.write(err+"\n");
			response.end();
		}else{
			response.writeHead('200',{'Content-Type':'image/png'});
			response.write(file,'binary');
			response.end();
		}
	});
}