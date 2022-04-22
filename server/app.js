var express = require('express');
var logger = require('morgan');
const path = require('path')

var indexRouter = require('./routes/index');
const dataRouter = require('./routes/data');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname+'/postdata')))


app.use('/', indexRouter);
app.use('/data', dataRouter);

module.exports = app;
