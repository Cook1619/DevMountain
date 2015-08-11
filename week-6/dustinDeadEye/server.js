///////  dependencies ////////


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio')

var accountSid = 'AC8938f34f2c45c96a2078c340db516c86';
var authToken = '4d7f110b701bc741c6a93978ebc687d1';

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
	  to: "4357044800",
	  from: "+14352384913",
	  body: req.body.message,
}, function(err, message) {
	   console.log(message.sid);
});
  res.send()
});
