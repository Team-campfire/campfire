//Express stuff
const express = require('express')
const app = express()
const fetch = require('node-fetch');
var bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose')
var mongodb = require('mongodb');
const port = 3000
const path = require('path')

// app.use(express.static(path.join(__dirname, './lab4/dist/lab4')));
app.use(express.static(path.join(__dirname, './campfire/dist/campfire')));

app.get('/', (req, res) => {
	res.send('Hello world!')
	// console.log(req)
})
// Mongo Connection
const { MongoClient } = require("mongodb");

// atlas connection string                                                                                                                                        
const url = "mongodb+srv://teamCampfire:LqGg9CN0pnjylnOz@campfire.x1fg6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);

// !!!!! BELOW CODE Used to test mongo queries. Leaving this here for easy test acess
MongoClient.connect(url, function (err, db) {
	if (err) throw err;
	var dbo = db.db("campfireApp");
	// var query = { eventName: "Web Sci Demo" };
  var query = "";

	// var newCustomDef = { $set: { customDefinitions: [] } };

	dbo.collection("lab6data").find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
		db.close();

	});
});



app.listen(port, () => { 
  console.log('listening on :3000')
})
