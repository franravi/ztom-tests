
/*
 * ============================================================================
 *  "GLOBAL CACHE"
 * ============================================================================
 */

var css	=	document.querySelector("h3");
var color1	=	document.querySelector(".color1");
var color2	=	document.querySelector(".color2");
var randbtn	=	document.querySelector(".random");
var body	=	document.getElementById("gradient");


/*
 * ============================================================================
 *  UTILITY FUNCTIONS
 * ============================================================================
 */

/*
 *	Returns a random number between min and max (integers).
 */
var rand	=	function (min, max)
{
	return	Math.floor(Math.random()	*	(max	-	min	+	1))	+	min;
}

/*
 *	Returns a random color in #rrggbb format.
 */
var colorRandom	=	function ()
{
	var letters	=	"0123456789ABCDEF";
	var color	=	"#";

	for (var i = 0; i < 6; i++)
	{
		color	+=	letters[rand(0,15)];
	}

	return	color;
}


/*
 * ============================================================================
 *  EVENT LISTENERS
 * ============================================================================
 */

var setGradient	=	function ()
{
	body.style.background	=	"linear-gradient(to right, "
							+	color1.value
							+	", "
							+	color2.value
							+	")"
							;

	//	We are adding the current style as a text in the site.
	//
	css.textContent	=	body.style.background	+	";";
}

var setRandom	=	function ()
{
	color1.value	=	colorRandom();
	color2.value	=	colorRandom();

	setGradient();
}


/*
 * ============================================================================
 *  ELEMENT INITIALIZERS
 * ============================================================================
 */



/*
 * ============================================================================
 *  "MAIN"
 * ============================================================================
 */

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randbtn.addEventListener("click", setRandom);
