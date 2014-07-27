var mysql = require('mysql');

//连接池
var pool  = mysql.createPool({
	host:'localhost',
	user:'sa',
	password:'123456',
	database:'seatest'
});

query('select 1+1 as result',function(err,rows,fields){
	if(err)
		console.log('test query error');
	else
		console.log('test query success , and result is :'+rows[0].result);
});

function query(sql,callback){
	pool.getConnection(function(err,connection){
		if(err){
			console.log('get connection error：'+err);
			//自动重连
			setTimeout(query, 3000);
		}else{
			connection.query(sql,callback);
			connection.release();
		}
	});
}
exports.query = query;