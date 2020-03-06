const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}))				    			//  Allows us to read form-data in body.
app.use(express.json());						    						//	Allows us to read JSON in body.

//  Here, we can call a GET method (using Postman).  It will display query, body, header, and params on console, and
//  answer 404 to the browser.
//  Be sure to call GET on 'localhost:3000/test?var=something' with:
//    - Body as raw with for example the json: '{"user":"Jenny","hobby":"tennis"}'
//    - Header with a 'Content-Type' set to 'application/x-www-form-urlencoded'
//    - Params with a test param, for example: key='var', value='something'.
//
app.get('/:id', (req, res) => {
  console.log('query', req.query);
  console.log('body', req.body);
  console.log('header', req.header);
  console.log('params', req.params);
  res.status(404).send("not found");
});

app.listen(3000);

