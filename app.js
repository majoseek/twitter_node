var express=require('express');
var app=express();
var path=require('path');
require('./controller.js')();
var bodyParser = require('body-parser');

app.use(express.session({
	secret:'jj#@9gajsg912gJG#',
	resave:false,
	saveUnitialized:true,
	cookie:{secure:true}
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static(__dirname+'/public'));
connect_base();

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'public','index.html'));
});
app.post('/login',(req,res)=>{
	verify_user(req.body.login,req.body.password,function(resp){
		if(resp)	//poprawne dane
		{
			req.session.login=req.body.login;
		}
		else
		{
			
		}
	});
});
app.listen(3000,()=>{
	console.log("Listening on port 3000");
});