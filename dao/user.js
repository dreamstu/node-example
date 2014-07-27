var db = require('../db');

function getAllUser(response){
	 db.query('select * from tuser',function(err,rows,fields){
    	if(err){
    		response.writeHead(500,{"Content-Type":"text\html"});
			response.write(err.stack);
			response.end();
    	}else{
    		console.log(rows);
    		response.render('users',{
    			users:rows
    		});
    		/*response.writeHead(200,{"Content-Type":"text\json"});
			response.write(JSON.stringify(rows));
			response.end();*/
    	}
    });
}

function addUser(user,response){
    db.query('insert into tuser set ?',user,function(err,result){
        if(err){
            response.writeHead(500,{"Content-Type":"text\html"});
            response.write(err.stack);
            response.end();
        }else{
            response.render('regSuccess',{
                userId:result.insertId
            });
        }
    });
}

exports.getAllUser = getAllUser;