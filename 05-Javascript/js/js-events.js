
/*
 * ============================================================================
 *  "GLOBAL CACHE"
 * ============================================================================
 */

/*
 * 	Store some elements in the global cache, for easy access for everyone.
 */
var list	=	document.getElementById("itemlist");
var button	=	document.getElementById("enter");
var input	=	document.getElementById("userinput");


/*
 * ============================================================================
 *  EVENT LISTENERS
 * ============================================================================
 */

/*
 *	We prepare a function that creates an element, and attach it to bottom of the list.
 *	There is also a function wrapper to handle key press for the same action.
 */
var addAction	=	function ()
{
	if	(input.value.trim().length	>	0)									//	Check that we really have something to add.
	{
		var li	=	document.createElement("li");							//	Create a new li element.

		li.appendChild(document.createTextNode(input.value));				//	Add a text to that li element.
		list.appendChild(li);												//	Add that li element to an ul list.

		setListItemActions(li);												//	Set actions for this item.

		input.value	=	"";													//	Clear out user input.
	}
}
var addActionByEnter	=	function (event)								//	A function wrapper for key presses.
{
	if	(event.keyCode	===	13)												//	We will proceed only on enter key presses.
	{
		addAction();														//	Execute main function.
	}
}

/*
 *	Toggles the done class on triggering element.
 */
var toggleDone	=	function (event)
{
	event.srcElement.classList.toggle('done');
}

/*
 *  Deletes the item that has the button that triggered the element.
 */
var deleteItem	=	function (event)
{
	event.srcElement.parentElement.remove();
}


/*
 * ============================================================================
 *  ELEMENT INITIALIZERS
 * ============================================================================
 */

/*
 *  Function that initializes a list item.
 *	We will add a toggle 'done' class action when clicking the element.
 *	We will add a delete button.
 *	We will add an event to delete the item, when the delete button is pressed.
 */
var	setListItemActions	=	function (item)
{
	item.addEventListener("click", toggleDone);								//	Attach the click element.

	var delBtn	=	document.createElement("button");						//	Create a delete button.

	delBtn.appendChild(document.createTextNode("Delete"));					//	Add label to delete button.
	item.appendChild(delBtn);												//	Attach delete button to element.

	delBtn.addEventListener("click", deleteItem);							//	Adds the delete action for the element.
}


/*
 * ============================================================================
 *  "MAIN"
 * ============================================================================
 */

/*
 *  We add some event listeners.
 *	First two will allow adding new elements to our list, be either by clicking the action button, or by clicking enter while
 *	typing.
 *	Also, initialize any predefined items in the list (those preloaded).
 */
button.addEventListener("click", addAction);
input.addEventListener("keypress", addActionByEnter);


var items	=	list.children;

for (var i=0; i < items.length; i++)
{
	setListItemActions(items[i]);
}


