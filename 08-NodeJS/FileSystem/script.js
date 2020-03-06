const fs = require('fs');

//  Our readFile method will read the selected file, do some validation, and spit the contents in a raw buffer.  We use
//	data.toString() to convert those codes to something readable.  The file uses UTF8 encoding, so we convert it to
//  text using that encoding.  BTW, UTF8 is default, so it is not required to add it as argument for the toString()
//  call, but we keep it for clarity (and as hint that we can change it to other encoding, like ASCII).
//
fs.readFile('./files/hello.txt', (err, data) => {
	if (err) {
		console.log('error');
	}
	console.log('Async', data.toString('utf8'));
})

//  readFile() is asyncronous (this is why it uses a function callback), and readFileSync() is syncronous.  This means
//  that readFile() will allow the rest of the code to execute while processing the file, while readFileSync() will
//  make the app wait until it solves it's task.
//
const file = fs.readFileSync('./files/hello.txt');
console.log('Sync', file.toString());

//  appendFile() will allow us to write at the end of the file.
//
/*
fs.appendFile('./files/hello.txt', ' This is so cool!', err => {
  if (err){
	console.log(err)
  }
})
*/

//  writeFile() will allows us to create a file and write in it.  If the file exists, it will overwrite it.
//
fs.writeFile('./files/bye.txt', 'That\'s all folk', err => {
  if (err){
	console.log(err)
  }
})

//  unlink() will delete the file.
//
fs.unlink('./files/bye.txt', err => {
  if (err){
	console.log(err)
  }
  console.log('Inception')
})
