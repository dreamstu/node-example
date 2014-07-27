var express = require('express');
var cons = require('consolidate');
var requestHandlers = require('./requestHandlers');

var app = express();

/*app.get('/',function(req,res){
	res.send('hello world!');
});*/

/*app.use(function(req,res,next){
	console.log('%s %s %s',new Date,req.method,req.url);
	next();
});*/

app.enable('trust proxy');
app.engine('html',cons.ejs);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/static',express.static(__dirname+'/public'));

app.get('/user/:op',function(req,res){
	var op = req.params.op;
	if(op=="list"){
		requestHandlers.user.get.userList(res);
	}else if(op=="addUser"){
		requestHandlers.user.get.addUser(res);
	}
});

app.post('/user/:op',function(req,res){
	var op = req.params.op;
	if(op=="addUser"){
		console.log(req.body.user);
		res.set('Content-Type', 'application/json');
		res.send({'state':1,'msg':''});
		//requestHandlers.user.post.addUser(res);
	}
});

app.get('/upload',function(req,res){
	requestHandlers.index.upload(req,res);
});
app.get('/show',function(req,res){
	requestHandlers.index.show(res);
});



console.log(app.get('env'));

app.listen(3000);