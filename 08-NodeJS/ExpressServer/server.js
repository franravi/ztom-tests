const express = require('express');

const app = express();

//  Middleware:  We have some tool here that gets the request, is able to do some process, and later, continue the response.
//
app.use((req, res, next) => {
  console.log('<h1>Helooo!</h1>');
  next();
})

//  We will implement a GET that reads root '/'.  We can implement a post(), a delete(), or a get() that reads other path, like '/profile'.
//  A multiple set of them can build us a menu router system.
//
app.get('/', (req, res) => {
  //  As with pure Node.JS server, we can send HTML:
  //
  /*
  res.send("<h1>Hello</h1>");
  /**/

  //  or JSON:
  //
  /*
  const user = {
	name: 'Sally',
	hobby: 'soccer',
  }
  res.send(user);
  /**/

  //  just that it will be easier, as we don't have to set headers for it.

  res.send('test with app.use');
});

app.listen(3000);
