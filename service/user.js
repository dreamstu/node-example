var dao = require('../dao/user');
var service = {
	get:{
		userList:function userList(response){
			console.log('Request handler "userList-->GET" was called.');
		  	dao.getAllUser(response);
		},
		addUser:function(response){
			console.log('Request handler "addUser-->GET" was called.');
	  		response.render('addUser');
		}
	},
	post:function(){
		addUser:function addUser(request,response){
			console.log('Request handler "addUser-->POST" was called.');
		  	dao.getAllUser(response);
		}
	}
	
}

module.exports = service;