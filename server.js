var Sequelize = require('sequelize');
var express = require('express');
var app = express();

// var sequelize = new Sequelize ('flashcards', 'root', null{
// 	host: 'localhost',
// 	port: '3000'
// });


sequelize.query("SELECT* FROM test")
.success(function (myTableRows){
	console.log(myTableRows);
})
.error(function(error){
	console.log(error);
});

var flashcards = sequelize.define('flashcards',{
	front: Sequelize.TEXT,
	back: Sequelize.TEXT,
	set: Sequelize.TEXT
});

sequelize.sync();

// app.use(express.bodyParser());
app.use(function(err,req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'OPTIONS, GET, POST');
  res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept');
  console.error(err.stack);
  res.send(500, 'Something broke!');
  next();

});

console.log("next")


app.get('/', function(req, res){
  res.type(text/plain);


  res.send('hello world');

});


app.listen(3000);

