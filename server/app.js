var express = require('express');
var logger = require('morgan');
const session = require('express-session')
const passport = require('passport')
const path = require('path')

var indexRouter = require('./routes/index');
const dataRouter = require('./routes/data');
const authRouter = require('./routes/authRoutes');
var app = express();
app.use(express.json());
app.use(session({ secret: "apple", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname+'/postdata')))
app.use('/', indexRouter);
app.use('/data', dataRouter);
app.use('/auth', authRouter)

module.exports = app;
