
/*
 *	First, we create a database of users.
 */
var database	=
	[	{	username:	"fran"
		,	password:	"qwerty"
		}
	];

/*
 *	Second, we create a database of newsfeeds.
 */
var newsFeed	=
	[	{	username:	"Bobby"
		,	timeline:	"Something here."
		}
	,	{	username:	"Sally"
		,	timeline:	"Testing here also."
		}
	];

/*
 *	signIn()	-	Checks db to confirm if provided user and password are valid.
 *	TODO:	Currently, it validates only the first user in db, should validate all list until user is found, or whole list was
 *			tested.
 */
function	signIn(user, pass)
{
	if	(	(user	===	database[0].username)
		&&	(pass	=== database[0].password)
		)
	{
		console.log(newsFeed);
	}
	else
	{
		alert("Sorry, wrong username and password!");
	}
}

/*
 *	Main section.
 */

var usernamePrompt	=	prompt("What's your username?");
var passwordPrompt	=	prompt("What's your password?");

signIn(usernamePrompt, passwordPrompt);