// /*
// ============================================
// ; Title:  app.js
// ; Author: Gunner Bradley
// ; Date:   March 23rd, 2022
// ; Description: main application server file
// ;===========================================
// */

/**
 * Require statements
 */
require('dotenv').config()
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

// Required API's
const employeeAPI = require('./routes/employee-routes');
const taskAPI = require('./routes/task-routes');


/**
 * App configurations
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/nodebucket'))); //sends static app
app.use('/', express.static(path.join(__dirname, '../dist/nodebucket'))); //sends static app

const port = process.env.PORT || 3000 ; // server port

// hidden DB creds
const DB_USERNAME = process.env.DB_USERNAME; //hidden db username
const DB_PASSWORD = process.env.DB_PASSWORD; //hidden db password
const DB_CLUSTER = process.env.DB_CLUSTER; //hidden db cluster

// DB connection string
const conn = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.mlnw2.mongodb.net/${DB_CLUSTER}?retryWrites=true&w=majority`; //db atlas connection string

// Database connection
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)
}); // end mongoose connection


// API's
app.use("/api", employeeAPI, taskAPI);

// Create and start server
http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`)
});
