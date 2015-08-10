///////  dependencies ////////


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio')

var accountSid = '';
var authToken = '';

var client = require('twilio')(accountSid, authToken);



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
  // request.post('https://' + accountSid + ':' + authToken + '@api.twilio.com/2010-04-01/Accounts/')
  client.messages.create({
	  to: "4355311845",
	  from: "+14352384913",
	  body: "Wasssss up?!",
}, function(err, message) {
	   console.log(message.sid);
});
  res.send()
});
