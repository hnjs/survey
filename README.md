# A Simple Feedback/Survey Page
A simple html page that takes user feedback and inserts into mySQL database using Node.js

## Pre-requisites

1. Install mySQL, create a database named `dev` (collation - utf8mb4_generic_ci)
2. Create a table named `survey` with the below structure

  \#	Name	    Type         Null

	1.	firstname	varchar(50)		No
	2.	lastname	varchar(50)		No
	3.	email	varchar(50)			  No
	4.	feedback	text	        No

3. Before you execute the code, ensure the database is up and running 


## How to run the code

1. Download the zip file from the repository page and unzip to a folder
2. In terminal, navigate to `survey` folder
3. Execute `node app.js` at the prompt
4. Open the browser and type `http://localhost:8000`
5. Follow the hyperlink on the homepage to the survey page
6. Type in the values and click submit
7. Check your table for the new record created with your feedback data

###Note 1:
I created this code to play around with interaction between JavaScript and mySQL using node.js. Hence I haven't handled every database operation in this. In addition, the styling data is included in the HTML file itself rather a separate CSS file. The HTML form doesn't handle any client side validation such as required values, invalid email, etc.

###Note 2:
Since Node.js is a event driven asynchronous framework, I couldn't achieve perfect modularization especially while handling data insertion and displaying the confirmation page. Hence I passed the relevant variables (renderer, response) to the calling function and further processing was handled inside that.

However, I welcome any suggestions on how better to handle this.
