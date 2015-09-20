var fs = require('fs');

function mergeValues(values, contents) {
	for (var key in values) {
		contents = contents.replace('{{'+key+'}}', values[key]);
	}
	return contents;
}

function view(templateName, values, response) {
	// Read the contents from the relevant file
	var fileContents = fs.readFileSync('./'+templateName+'.html', {encoding:'utf8'});

	// Replace placeholders with values
	fileContents = mergeValues(values, fileContents);

	// Write back to the response object
	response.write(fileContents);
}

module.exports.view = view;