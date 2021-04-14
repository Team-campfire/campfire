//Express stuff
const express = require('express')
const app = express()
const fetch = require('node-fetch');
var bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose')
const stream = require('stream')
const port = 3000
const path = require('path')

const mongodb = require("mongodb").MongoClient;
const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");

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

/*// !!!!! BELOW CODE Used to test mongo queries. Leaving this here for easy test acess
MongoClient.connect(url, function (err, db) {
	if (err) throw err;
	var dbo = db.db("campfireApp");
	// var query = { eventName: "Web Sci Demo" };
	//var query = ({}, {eventName:1, _id:0}); // update for the keys you are querying

	// var newCustomDef = { $set: { customDefinitions: [] } };
	var lab6data = dbo.collection("lab6data");
	lab6data.find({}).project({ eventName: 1 }).toArray(function (err, result) {
		if (err) throw err;
		console.log(result);
		db.close();

	});
});*/
// generalized mongodb query -> json -> csv code
// file: file name you're wr
function dbjson2csv(file, query) {
	mongodb.connect(
		url,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		(err, client) => {
			if (err) throw err;
			/*Update file for the file you're writing to */
			//var file = "test.csv";
			//var query = { eventName: 1, clubName: 1 }; 
			/*update "query" for the keys you are querying: 1 means return this field. id is auto returned, if you don't want
			id, include "_id:0"*/
			client
				.db("campfireApp")
				.collection("lab6data")
				.find({}).project(query)
				.toArray((err, data) => {

					if (err) throw err;

					console.log(data);
					const json2csvParser = new Json2csvParser({ header: true });
					const csvData = json2csvParser.parse(data);

					fs.writeFile("campfire/src/assets/csv-files/" + file, csvData, function (error) {
						if (error) throw error;
						console.log("Write to " + file + " successfully!");
					});

					client.close();
				});
		}
	);
}
// dbjson2csv("test.csv", { eventName: 1, clubName: 1 });

// Anya's POST requests
app.post("/eventCategories", function (req, res) {
	dbjson2csv("eventCategories.csv", { eventName: 1, eventCategory: 1 });
	console.log("event categories file has been created and is downloading!");
	const file = 'campfire/src/assets/csv-files/eventCategories.csv';
	res.download(file);
	// Different ways of updating front-end
	//var pathEventCategoryBarplot = '/campfire/src/assets/data-viz/eventCategoryBarplot.png'
	//res.sendFile(__dirname + pathEventCategoryBarplot)

	// res.redirect('localhost:3000/dataviz');
	// console.log("test");
	// $("#data-viz-image").html('<img src="/campfire/src/assets/data-viz/eventCategoryBarplot.png" alt="event categories data viz">');
});

app.post("/onlineVsOffline", (req, res) => {
	dbjson2csv("onlineVsOffline.csv", { eventName: 1, online: 1 });
	console.log("online vs offline file has been created and is downloading!");
	const file = 'campfire/src/assets/csv-files/onlineVsOffline.csv';
	res.download(file);
});

/*Testing dbjson2csv function */
//dbjson2csv("eventDates.csv", { eventName: 1, date: 1 });
//dbjson2csv("clubCategories.csv", { eventName: 1, clubCategory: 1 });

/* Rachel's POST requests*/
app.post("/clubCategories", (req, res) => {
	dbjson2csv("clubCategories.csv", { eventName: 1, clubCategory: 1 });
	console.log("club categories file has been created and is downloading!");
	const file = 'campfire/src/assets/csv-files/clubCategories.csv';
	res.download(file);
});

app.post("/eventDates", (req, res) => {
	dbjson2csv("eventDates.csv", { eventName: 1, date: 1 });
	console.log("event dates file has been created and is downloading!");
	const file = 'campfire/src/assets/csv-files/eventDates.csv';
	res.download(file);
});


app.listen(port, () => {
	console.log('listening on :3000')
})
