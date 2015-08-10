///////  dependencies ////////
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');

var app = express();
var port = 3033;


app.listen(port, function(){
  console.log("I can see you...", port);
});

///////// MIDDLEWARE////////

app.use(express.static('public'));

// app.use(bodyParser.urlencoded({
//   extend: true
// }));
app.use(bodyParser.json());
app.use(cors());

//////////ENDPOINTS///////////
app.get('/api/message', function(req, res){
  return res.send({"message": "sup yall"})
});
app.post('/api/send_text_message', function(req, res){
  console.log(req.body.message);
  res.send()
});
