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

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './campfire/dist/campfire')));

app.get('/', (req, res) => {
	res.send('Hello world!')
	// console.log(req)
})
// Mongo Connection
const { MongoClient } = require("mongodb");

// atlas connection string
const url = "mongodb+srv://teamCampfire:vC1gdZfqcVN7IErS@campfire.x1fg6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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

// Lab 6 stuff
function dbjson2csv(file, query) {
	mongodb.connect(
		url,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		(err, client) => {
			if (err) throw err;
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
// dbjson2csv("test.csv", {});
// Anya's POST requests
app.post("/eventCategories", function (req, res) {
	dbjson2csv("eventCategories.csv", { eventName: 1, eventCategory: 1 });
	console.log("event categories file has been created and is downloading!");
	const file = 'campfire/src/assets/csv-files/eventCategories.csv';
	res.download(file);
});

app.post("/onlineVsOffline", (req, res) => {
	dbjson2csv("onlineVsOffline.csv", { eventName: 1, online: 1 });
	console.log("online vs offline file has been created and is downloading!");
	const file = 'campfire/src/assets/csv-files/onlineVsOffline.csv';
	res.download(file);
});

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

/*Michael's POST requests*/
app.post("/numTasks", (req, res) => {
	dbjson2csv("numTasks.csv", {
		eventName: 1, delegateTasks: {
			$cond: { if: { $isArray: "$delegateTasks" }, then: { $size: "$delegateTasks" }, else: "NA" }
		}
	});
	console.log("number of tasks file has been created and is downloading!");
	const file = 'campfire/src/assets/csv-files/numTasks.csv';
	res.download(file);
});

app.post("/numDrivers", (req, res) => {

	dbjson2csv("numDrivers.csv", {
		eventName: 1, transportation: {
			$cond: { if: { $isArray: "$transportation" }, then: { $size: "$transportation" }, else: "NA" }
		}
	});

	console.log("number of drivers file has been created and is downloading!");
	const file = 'campfire/src/assets/csv-files/numDrivers.csv';
	res.download(file);
});


/*Teddy's POST requests*/
app.post("/inviteFriends", (req, res) => {
	dbjson2csv("inviteFriends.csv", {
		yourName: 1, inviteFriends: {
			$cond: { if: { $isArray: "$inviteFriends" }, then: { $size: "$inviteFriends" }, else: "NA" }
		}
	});
	console.log("invite friends file has been created and is downloading!");
	const file = 'campfire/src/assets/csv-files/inviteFriends.csv';
	res.download(file);
});

app.post("/reqTransportation", (req, res) => {
	dbjson2csv("reqTransportation.csv", { yourName: 1, reqTransportation: 1 });
	console.log("transportation required file has been created and is downloading!");
	const file = 'campfire/src/assets/csv-files/reqTransportation.csv';
	res.download(file);
});

// event basics page
app.post('/submitEventStart', function (req, res) {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("campfireApp");

		dbo.collection("createEvent").insertOne(req.body, function (err) {
			if (err) throw err;
			console.log("data recieved");
			db.close();
		});
		// res.send('Data received:\n' + JSON.stringify(req.body));
		// res.redirect("http://localhost:3000")
	});
});
app.post('/submitEventBasics', function (req, res) {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("campfireApp");
		var query = {eventName: "Demo"};
		var eventBasics = req.body;
		var insert = {  $push:  {eventBasics} };
		// var insert = req.body;
		// db.collection("createEvent").findOne({}, {sort:{$natural:-1}}){
		// dbo.collection("recommendation").findAndModify({}).sort({_id:-1}).limit(1).insertOne(req.body, function (err) {

		// $mergeObjects: {{sort:{$natural:-1}};
		dbo.collection("createEvent").updateOne(query, insert, function (err) {
			// $mergeObjects: {{sort:{$natural:-1}}};
			if (err) throw err;
			console.log("basics update recieved");
			db.close();
			// res.status(200).json(recommendation);
			// res.redirect("http://localhost:3000/")
		});
	});
});
app.post('/submitEventActivities', function (req, res) {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("campfireApp");
		var query = {eventName: "Demo"};
		var eventActivities = req.body;
		var insert = {  $push:  {eventActivities} };
		// var insert = req.body;
		// db.collection("createEvent").findOne({}, {sort:{$natural:-1}}){
		// dbo.collection("recommendation").findAndModify({}).sort({_id:-1}).limit(1).insertOne(req.body, function (err) {

		// $mergeObjects: {{sort:{$natural:-1}};
		dbo.collection("createEvent").updateOne(query, insert, function (err) {
			// $mergeObjects: {{sort:{$natural:-1}}};
			if (err) throw err;
			console.log("activities update recieved");
			db.close();
			// res.status(200).json(recommendation);
			// res.redirect("http://localhost:3000/")
		});
	});
});
app.post('/submitEventTransportation', function (req, res) {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("campfireApp");
		var query = {eventName: "Demo"};
		var eventTransportation = req.body;
		var insert = {  $push:  {eventTransportation} };
		// var insert = req.body;
		// db.collection("createEvent").findOne({}, {sort:{$natural:-1}}){
		// dbo.collection("recommendation").findAndModify({}).sort({_id:-1}).limit(1).insertOne(req.body, function (err) {

		// $mergeObjects: {{sort:{$natural:-1}};
		dbo.collection("createEvent").updateOne(query, insert, function (err) {
			// $mergeObjects: {{sort:{$natural:-1}}};
			if (err) throw err;
			console.log("transportation update recieved");
			db.close();
			// res.status(200).json(recommendation);
			// res.redirect("http://localhost:3000/")
		});
	});
});





app.listen(port, () => {
	console.log('listening on :3000')
})
