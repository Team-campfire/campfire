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
	var query = { eventName: "Web Sci Demo" };
	// var newCustomDef = { $set: { customDefinitions: [] } };

	dbo.collection("allEvents").find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
		db.close();

	});
});

app.listen(port, () => { 
  console.log('listening on :3000')
})


/*
function css (request, response) {
  if (request.url.indexOf(".css") !== -1){
    var file = fs.readFileSync(`${request.url}`, {'encoding' : 'utf8'});
    response.writeHead(200, {'Content-Type' : 'text/css'});
    response.write(file);
    response.end();
  }
}
*/


/*
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})


server.listen(process.env.PORT || 3000)
*/
