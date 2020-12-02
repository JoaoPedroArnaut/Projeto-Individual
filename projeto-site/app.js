process.env.NODE_ENV = 'production';

var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var comentariosRouter = require('./routes/comentarios');
const { nextTick } = require('process');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res , netx) => { 
//     res.header("Access-Control-Allow-Origin", "*");
//     app.use(cors());
//     next();
// });

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/comentarios', comentariosRouter);

module.exports = app;
