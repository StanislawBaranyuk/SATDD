/**
 * Created by cktuser on 13.08.2016.
 */

var http = require('http');
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var bodyParser = require("body-parser");
var express = require('express');
var session = require('express-session');
var cookieParser = require("cookie-parser");
var path = require("path");
var connect = require("connect");

var app = express();
var port_number = process.env.PORT || 3000;
var DBurl= "mongodb://Tvolex:Tvolex3913@ds031895.mlab.com:31895/firstappusers";

app.use(cookieParser());
app.use(session({
    secret: 'Stanislaw',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser());

app.use(express.static(path.join(__dirname,"public")));
app.get("/",function (req, res) {

});