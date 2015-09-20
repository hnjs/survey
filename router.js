var renderer = require('./renderer');
var queryStr = require('querystring');
var transacter = require('./transacter');

function home(request, response) {
	if (request.url == '/') {
		// when home page is requested, show a small html page with survey link
		renderer.view('index', {}, response);
		response.end();
	} else if (request.url == '/survey') {
		// show the content of survey.html
		renderer.view('survey', {}, response);
		response.end();
	} else if (request.url == '/surveyfinish') {
		// show the content of surveyfinish.html
		if (request.method.toLowerCase() == 'post') {
			var body = '';
			request.on('data', function(postBody) {
				body = queryStr.parse(postBody.toString());
			});
			request.on('end', function(){
				transacter.insertRow(body, response, renderer);
			});
		}
	}
}

module.exports.home = home;