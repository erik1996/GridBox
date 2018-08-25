const mongoose = require('mongoose');
const mongoDB = 'mongodb://username:pass123456@ds123372.mlab.com:23372/task';
const dbOpts = { useNewUrlParser: true };

mongoose.connect(mongoDB, dbOpts);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));