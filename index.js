var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })


// var user = {
//     "user4" : {
//        "name" : "mohit",
//        "password" : "password4",
//        "profession" : "teacher",
//        "id": 4
//     }
//  }
 //updating 
 app.post('/addUser', function (req, res) {
    console.log("_________incoming_______", req.body);
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
    //    data["user4"] = user["user4"];
    //    console.log( data );
       res.end( JSON.stringify(data));
    });
 })
 //delete user
 var id = 2;



app.delete('/deleteUser', function (req, res) {

   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})



app.listen(8001, function () {
    // var host = server.address().address
    // var port = server.address().port
    console.log("App listening at ",  8001)
 })