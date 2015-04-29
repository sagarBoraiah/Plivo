var express = require('express');
var app = express();
var plivo = require('plivo-node');
var p = plivo.RestAPI(require('./config.json'));

var response = plivo.Response();
response.addSpeak('Hello World',{loop:2});
console.log(response.toXML());

var flag =1; // 1 for phone call ; 0 for sms
if(!flag)
{
	var params = {
    'src': '+919620788167',
    'dst' : '+919945247441', // User Number to Call
    'text' : "Hi, message from Plivo",
    'type' : "sms",
};
}

if(flag)
{
	var params = {};
	params.from = "+919620788167";
	params.to = "+919900970842";
	params.answer_url = "http://frozen-savannah-9731.herokuapp.com/response/speak/";
}

var quotes = [
  { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
  { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

app.get('/quote/:id',function(req,res){
	if(quotes.length <= req.params.id || req.params.id < 0) {
    	res.statusCode = 404;
    	if(!flag)
    	{
    		params.text = 'Error Code :'+res.statusCode;
    	p.send_message(params, function (status, response) {
    	console.log('Status: ', status);
    	console.log('API Response:\n', response);
		});
    }
    else
    {
      console.log(params);
    	p.make_call(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});
    }
    return res.send('Error 404: No quote found');
	}
	var q = quotes[req.params.id];
  res.json(q);
});
app.listen(4731);