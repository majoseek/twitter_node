const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@majodb-s49pv.mongodb.net/Nodeapp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
var collection;
module.exports= function(){
	connect_base = function()
	{
		client.connect(err => {
			if(err)throw err;
			collection=client.db("Nodeapp").collection("Users");
			console.log("Connected to database");
		});
	}
	disconnect_base = function()
	{
		client.close();
		console.log("Disconnected");
	}
	dodaj = function(login,password)
	{
		collection.insertOne({Login:login,Password:password});
		console.log(login+" "+password+" added to database");
	}
	verify_user = function(login,password,callb)
	{
		collection.findOne({Login:login,Password:password},function(err,res){
			if(err)	throw err;
			if(res)	callb(true);
			else callb(false);
		});
	}
};