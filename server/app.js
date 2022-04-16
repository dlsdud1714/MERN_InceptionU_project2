var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const dataRouter = require('./routes/data')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/data', dataRouter);

module.exports = app;
