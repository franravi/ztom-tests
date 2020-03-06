const http = require('http');

const server = http.createServer((request, response) => {
  //  The next helps us debug the request data:
  //
  /*
  console.log('headers', request.headers);
  console.log('method', request.method);
  console.log('url', request.url);
  /**/

  //  We will return a response to the user.  We can return an html:
  //
  /*
  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>Hello</h1>');
  /**/
  //  .. or a JSON:
  /**/
  const user = {
	name: 'John',
	hobby: 'Skating',
  }
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(user));
  /**/
})

server.listen(3000);
