var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var slackUrls = {
	
	"webhook" : {
		"orders" : "https://hooks.slack.com/services/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",
		"shipment" : "https://hooks.slack.com/services/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"
	}
};

// Defining root endpoint
app.get('/', function(req, res) {
	var content = "<h1>Welcome to Slack Integration</h1>" +
'<a href="https://github.com/VenkataDevi/SlackInterview/blob/master/README.md" target="_blank">Please visit the documentation here</a>';
  res.send(content);
});

// Defining endpoint to call Slack incoming webhook
app.get('/callwebhook', function(req, res) {
	postMessageToWebHook(slackUrls.webhook.orders,req.query.data,function(body){
		res.send("Response from Slack webhook API :"+ body); 
	});  
});

// Defining endpoint for Slack slashcommand callback
app.post('/wishme', function(req, res) {
	var response = {
	    "text": "Hi Hello !!! How are you?"
	}
	res.send(response); 
});

// Defining endpoint for Slack event subscription
app.post('/callmeslack', function(req, res) {
	console.log("event from slack : "+JSON.stringify(req.body));
	if(req.body && req.body.event && req.body.event.text == "order made") {
		postMessageToWebHook(slackUrls.webhook.shipment,"An order has been placed in other channel",function(body){
			console.log(body);
		});  
	}
	// For call back verification
	res.send(req.body.challenge); 
});


// Start app server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



var postMessageToWebHook = function(url,message,callback){

	var options = {
	  	uri: url,
	  	method: 'POST',
	  	json: {
	    	"text": message
	  	}
	};

	request(options, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	callback(body);
	  }
	});

}
