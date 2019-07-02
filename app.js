var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride=require('method-override')
var indexRouter = require('./routes/api/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
/**
 * @description Application cors rule setup
 * @description Allow Method content PATCH and OPTIONS and HEAD, where HEAD is used to check whether the file metadata is same or not
 * HEAD is a similar to GET but without a response body so it is light weighted, OPTIONS is used before any HTTP request send
 */
 app.use(function(req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS,HEAD');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type','Tus-Resumable','Upload-Offset','Upload-Length','Upload-Metadata','Tus-Extension','x-http-method-override');
   next();
 });
//  app.use(methodOverride('X-HTTP-Method-Override'))
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
