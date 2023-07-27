// Create web server with Express


// Import modules
const express = require('express'); 
const app = express();

// Import routes
const commentsRoutes = require('./routes/comments');

// Import body-parser
const bodyParser = require('body-parser');

// Import mongoose
const mongoose = require('mongoose');
