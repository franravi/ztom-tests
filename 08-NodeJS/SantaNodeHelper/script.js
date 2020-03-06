const fs = require('fs');


function	mySolution1() {
	//  Our readFile method will read the selected file, do some validation, and spit the contents in a raw buffer.  We use
	//	data.toString() to convert those codes to something readable.  The file uses UTF8 encoding, so we convert it to
	//  text using that encoding.  BTW, UTF8 is default, so it is not required to add it as argument for the toString()
	//  call, but we keep it for clarity (and as hint that we can change it to other encoding, like ASCII).
	//
	fs.readFile('./files/Santa\'s Instructions.txt', (err, data) => {
		let ups		=	0;
		let downs	=	0;
		let others	=	0;
		let final	=	0;

		console.time('My Solution 1')
		if (err) {
			console.log('error');
		}
		else
		{
			//	Version 1.
			//	We go character by character, without decoding (we know the codes), and we will use a for() with an if/else
			//
			/*
			for (const ch of data)
			{
				if (41 == ch)		downs++;
				else if (40 == ch)	ups++;
				else				others++;
			}
			/**/

			//	Version 2.	-	Fastest from my versions !!!
			//	We will use a forEach() this time, but also with an if/else
			//
			/**/
			data.forEach(ch => {
				if (41 == ch)		downs++;
				else if (40 == ch)	ups++;
				else				others++;
			});
			/**/

			//	Version 3.
			//  We use a map() instead.  Keeping if/else.
			//
			/*
			data.map(ch => {
				if (41 == ch)		downs++;
				else if (40 == ch)	ups++;
				else				others++;
			});
			/**/

			//	Version 4.
			//  We go back to our fastest so far (forEach), and try with a switch instead of if/else.
			//
			/*
			data.forEach(ch => {
				switch (ch)
				{
					case 40:		ups++;		break;
					case 41:		downs++;	break;
					default:		others++;
				}
			});
			/**/

			final	=	ups - downs;
		}

		console.timeEnd('My Solution 1')
	//	console.log('Async', data.toString('utf8'));
		console.log('Count of ups', ups);
		console.log('Count of downs', downs);
		console.log('Count of others', others);
		console.log('Final level', final, '\n');
	})
}

function	mySolution2() {
	fs.readFile('./files/Santa\'s Instructions.txt', (err, data) => {
		const BreakException	=	{};
		let ups		=	0;
		let downs	=	0;
		let others	=	0;
		let final	=	0;

		console.time('My Solution 2')
		if (err) {
			console.log('error');
		}
		else
		{
			try
			{
				data.forEach(ch => {
					if (41 == ch)		downs++;
					else if (40 == ch)	ups++;
					else				others++;

					if	(ups < downs)
					{
						final	=	ups + downs;

						throw	BreakException;
					}
				});
			} catch (e) {
				if	(e !== BreakException)	throw e;
			}
		}

		console.timeEnd('My Solution 2')
	//	console.log('Async', data.toString('utf8'));
		console.log('Count of ups', ups);
		console.log('Count of downs', downs);
		console.log('Count of others', others);
		console.log('Basement entered at', final, '\n');
	})
}

/*
**	UDEMY solution
*/
function question1() {
	fs.readFile('./files/Santa\'s Instructions.txt', (err, data) => {
		console.time('UDEMY Solution 1')

		const directions = data.toString();
		const directionsArray = directions.split('');
		const answer = directionsArray.reduce((acc, currentValue) => {
			if	(currentValue === '(') {
				return	acc += 1
			}
			else if (currentValue === ')') {
				return	acc -= 1
			}
			return	acc;
		}, 0)

		console.timeEnd('UDEMY Solution 1')
		console.log('Final level', answer, '\n');
	})
}

/*
**  UDEMY adds another question, when does Santa first enter the basement.
*/
function question2() {
	fs.readFile('./files/Santa\'s Instructions.txt', (err, data) => {
		console.time('UDEMY Solution 2')

		const directions = data.toString();
		const directionsArray = directions.split('');
		let accumulator =	0
		let counter		=	0
		const answer = directionsArray.some((currentItem) => {
			if	(currentItem === '(') {
				accumulator += 1
			}
			else if (currentItem === ')') {
				accumulator -= 1
			}
			counter ++;
			return	accumulator < 0;
		})

		console.timeEnd('UDEMY Solution 2')
		console.log('Basement entered at', counter, '\n');
	})
}


mySolution1();
mySolution2();
question1();
question2();
