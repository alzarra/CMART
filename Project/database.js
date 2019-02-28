var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(app.router);
app.use(express.static('/public/'));


var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: 'csci427',
  database: 'mysql'
});

con.connect();

app.get('/',function(req,res){
  res.sendFile(__dirname + '/signup.html');
})

  app.post('/data',function(req,res){
 
    con.query("INSERT INTO 'mrTable'(userName,password) Values(?)",userName.toString(), password.toString(), function(err,result){
      if(err) throw err;
      console.log("Recorded worked");
    });
    res.send(userName,password);
  });


app.listen(3000,function(){
  console.log('Example app listening on port 3000');
});

