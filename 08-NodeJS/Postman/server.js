const express = require('express');
//const bodyParser = require('body-parser');	//	No longer required.

const app = express();

//  We will use a middleware named bodyParser.
//	Update:  As per Express 4.16+, we can use express for this task.
//
/*
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
*/
app.use(express.urlencoded({extended:false}))								//	Allows us to read form-data in body.
app.use(express.json());													//	Allows us to read JSON in body.


app.get('/', (req, res) => {
  res.send('getting root');
});

app.get('/profile', (req, res) => {
  res.send('getting profile');
});

//  To test this one, use postman with POST to localhost:3000/profile and raw body as {"user":"Jenny","hobby":"tennis"}
//
app.post('/profile', (req, res) => {

  //  This line here will not work, unless we implement a middleware for this using "app.use()".
  //
  console.log(req.body)

  res.send('success')
});

app.listen(3000);
