
/*
 *	First, we create a database of users.
 */
var database	=
	[	{	username:	"fran"
		,	password:	"qwerty"
		}
	,	{	username:	"master"
		,	password:	"apprentice"
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
 *	isUserValid()	-	Checks db to confirm if provided user and password are valid.
 */
function	isUserValid(user, pass)
{
	for (var i=0; i < database.length; i++)
	{
		if	(	(user	===	database[i].username)
			&&	(pass	=== database[i].password)
			)
		{
			return	true;
		}
	}
	return	false;
}

/*
 *	signIn()	-	Signs in the user.
 */
function	signIn(user, pass)
{
	if	(isUserValid(user, pass))
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