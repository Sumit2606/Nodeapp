var express = require('express');
var app = express();//Respond with "hello god" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('Welcome to my world');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
module.exports = app;
