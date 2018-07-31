// required
const express = require('express');
const app = express();

/* uses  (folder to hold static files) */
app.use(express.static('server/public'));



// global variables
let port = 5000;

// spin up server
app.listen(port, () => {
    console.log('server is up on:', port);
}) //end spin up server