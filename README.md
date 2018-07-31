# Salary_Calulator_On_Node_Server

Setup Instructions
Create a new repository on GitHub with a project name (initialize with a README.md)
Clone the repo on to your computer
Create a .gitignore file and ignore node_modules/, .DS_Store and *.log
.gitignore

node_modules/
.DS_Store
*.log
Make a Static Server Steps
Get our folders and files in place
Allow for incoming requests to be accepted
Respond with our assets
Create your folder structure:
salary-calculator-server/
├── server/
│   ├── public/
│   │   ├── scripts/
│   │   │   └── client.js
│   │   ├── vendors/
│   │   │   └── jquery.js
│   │   ├── styles/
│   │   │   └── style.css
│   │   └── index.html
│   └── server.js
├── node_modules/
│   ├── express/
│   └── ...
└── .gitignore
NOTE: The node_modules folder is auto generated.

In the project folder, run npm init --yes
Install express npm install express --save
Install body-parser (for anything with a post) npm install body-parser --save
Don't forget to add app.use(bodyParser.urlencoded({extended: true});
Setup Our Server
Rebooting a Node Server
ctrl-c
server.js

// Require express - gives us a function
var express = require('express');

// Create an instance of express by calling the function returned above - gives us an object
var app = express();
var port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// Start up our server
app.listen(port, function(){
  console.log('listening on port', port);
});
At this point we could start our server using node server/server.js. To simplify things we can add the following line to our package.json file.

package.json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/server.js"
  },
Add HTML, CSS & JavaScript
For this example, use your weekend assignment. Bring in the HTML, CSS, jQuery and JavaScript files to use for testing.

Testing the Server
You should be able to run your code by navigating to http://localhost:5000.

