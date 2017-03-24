var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');





//app is an instance of express
var app = express();



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//set public folder for stylesheets/images
app.use(express.static(path.join(__dirname, 'public')));






app.use('/', express.static('public'));


app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
    console.log("Server started on port "+ app.get('port'));
    console.log(new Date());
});

