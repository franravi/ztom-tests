const express = require('express');

const app = express();

//	This is the simplest http server.  It will recover pages from our public folder and serve them.
//
app.use(express.static(__dirname + '/public'))

app.listen(3000);

