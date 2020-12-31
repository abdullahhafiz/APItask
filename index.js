var express = require('express');
var app = express();
var fs = require('fs');


app.get('/', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })
 var server = app.listen(8001, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
 })

// var user = {
//     "user4" : {
//        "name" : "mohit",
//        "password" : "password4",
//        "profession" : "teacher",
//        "id": 4
//     }
//  }
//  //updating 
//  app.post('/addUser', function (req, res) {
    
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        data = JSON.parse( data );
//        data["user4"] = user["user4"];
//        console.log( data );
//        res.end( JSON.stringify(data));
//     });
//  })
//  //delete user
//  var id = 2;



// app.delete('/deleteUser', function (req, res) {

//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       delete data["user" + 2];
       
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })



 