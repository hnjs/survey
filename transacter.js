var mysql = require('mysql');

function init() {
	var connection = mysql.createConnection({
		//host		: 'localhost',
		//port 		: 3308,
		socketPath	: '/var/mysql/mysql.sock',
		user		: 'dev',
		password	: 'dev1234',
		database	: 'dev'
	});
	return connection;
}

function insertRow(data, response, renderer) {
	var connection = init();
	connection.connect(function(err) {
		if (!err) {
			connection.query('insert into survey set ?', data, function(err, result) {
				if (!err) {
					renderer.view('surveyfinish', data, response);
				} else {
					renderer.view('error', {}, response);
				}
				response.end();
			});
		} else {
			renderer.view('error', {}, response);
			response.end();
		}
	});
}

module.exports.insertRow = insertRow;
