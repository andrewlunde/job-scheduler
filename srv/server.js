/*eslint no-console: 0*/
"use strict";

var xsenv = require("@sap/xsenv");
var xssec = require("@sap/xssec");
var hdbext = require("@sap/hdbext");
var express = require("express");
var passport = require("passport");
var stringifyObj = require("stringify-object");
var bodyParser = require("body-parser");

var app = express();

var server = require("http").createServer();
var port = process.env.PORT || 3000;

app.get("/", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>ConcileTime</title></head><body><h1>job-sched-srv</h1><h2>SUCCESS!</h2><br />";
	responseStr += "<a href=\"/job-sched_srv_route/links\">The Links page.</a><br />";
	responseStr += "<a href=\"/\">Return to home page.</a><br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});

app.get("/job-sched_srv_route", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>ConcileTime</title></head><body><h1>job-sched-srv</h1><h2>SUCCESS!</h2><br />";
	responseStr += "<a href=\"/job-sched_srv_route/links\">The Links page.</a><br />";
	responseStr += "<a href=\"/\">Return to home page.</a><br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});

app.get("/job-sched_srv_route/links", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>ConcileTime</title></head><body><h1>job-sched-srv</h1><h2>SUCCESS!</h2><br />";
	responseStr += "<a href=\"/job-sched_srv_route/links\">Back to Links page.</a><br />";
	responseStr += "<a href=\"/\">Return to home page.</a><br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});

server.on("request", app);

server.listen(port, function () {
	console.info("Backend: " + server.address().port);
});
