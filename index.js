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
 //add 
 app.post('/addUser', function (req, res) {
    console.log("_________incoming_______", req.body);
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
        data["user4"] = {
            name: req.body.name,
            password: req.body.password,
            profession: req.body.profession,
            id: req.body.id

        };
       console.log( data );
       fs.writeFile('./users.json' , JSON.stringify(data), function (err) {
        if (err) return console.log(err);
        
      });
       res.end( JSON.stringify(data));

       
    });
 })
 //delete user
//  var id = 4;
app.delete('/deleteUser/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log(req.params.id)
      data = JSON.parse( data );
     
      delete data[`user${req.params.id}`];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });

})
//update 

app.put('/update/:id', async (req, res) => { 
    const id = req.params.id 
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(req.params.id)
       data = JSON.parse( data );
       console.log(`before: ${data['user1'].name}`);
       data[`user${id}`] = {
        name: req.body.name,
        password: req.body.password,
        profession: req.body.profession,
        id: req.body.id
    };
    console.log(`after:\n ${JSON.stringify(data)}`);

    fs.writeFile('./users.json' , JSON.stringify(data), function (err) {
        if (err) return console.log(err);
        
      });
    
    })

    
   
    res.send('Record Updated') 
  }) 

  app.listen(8001, function () {
    // var host = server.address().address
    // var port = server.address().port
    console.log("App listening at ",  8001)
 })

// app.post('/:id',function(req,res){

//     fs.readFile(__dirname + '/'+ 'users.json', 'utf8', function(err, data){
//         data = JSON.parse(data);
//         const id = req.params.id;
//         // const name = req.params.name;
//         // const profession = req.params.profession;
//         // const password = req.params.password;
//         post.updatePost(id, req.body);
//         res.json({
//             updated: `the post ${id} has been updated `
//         })
//     })
        
        
// })


