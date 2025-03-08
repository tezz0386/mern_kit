const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

const dotenv = require('dotenv');
const connectDatabase = require("../config/database");
// setting the config file
dotenv.config();
// connecting to the database 
connectDatabase();


const cors = require('cors');
app.use(express.json());
// import All Routes
const route = require('../routes/route');
app.use(cors());
app.use(route);
app.use(express.static(path.join(__dirname, '../pullic/views')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../pullic/views/', 'index.html'));
});

module.exports = app;
