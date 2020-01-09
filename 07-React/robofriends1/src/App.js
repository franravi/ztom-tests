import	React, { Component} 	from	'react'
import	CardList 				from 	'./CardList'
import	SearchBox				from	'./SearchBox'
import	{ robots }				from 	'./robots'
import	'./App.css';

//	To enable the search, we need to create a state.
//	So we will no longer use the const App definition, and instead extend React component
//	class, and create a state for storage.
//
/*
const	App	=	()	=>	{
	return	(
		<div className="tc">
			<h1>Robofriends</h1>
			<SearchBox />
			<CardList robots={robots}/>
		</div>
	);
}
*/

class	App	extends	Component
{
	constructor()
	{
		super()
		this.state	=	{
			robots: 		robots,
			searchfield: 	''
		}
	}

	/*
	**	onSearchChange()	-	Event callback; Takes action when searchbox content changes.
	*/
	//	We got an error due to a confusion of what means 'this'.  The problem is with the
	//  callback definition, so we have to change it, from:
	//onSearchChange(event)	//	<== this (bad call where 'this' means the search box)
	//	to something that correctly associate this to App class:
	onSearchChange	=	(event)	=>
	{
		//	Here we update searchfield to what the user typed in the searchbox.
		//	Using react, for updating states, we don't use this.state.searchfield = someval.
		//	Instead, we call setState as the next line:
		//
		this.setState({ searchfield: event.target.value });

		//	The next code here allows us to test filtering as we type, but does not updates
		//  the render.  We will move this to render() in order to allow it access the data
		//	to update the display.
		/*
		const filteredRobots	=	this.state.robots.filter(robots	=>{
			return	robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		console.log(filteredRobots, event.target.value);
		*/
	}

	/*
	**
	*/
	render()
	{
		//	Copied over from onSearchChange(), so that we can update the render.
		//
		const filteredRobots	=	this.state.robots.filter(robots	=>{
			return	robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		//	Also, we originally had <CardList robots={robots}/>, but now we will change it to
		//	pass a reference to our state robots storage.
		//
		//	Next, we set a callback on searchbox, tied to onSearchChange.
		//
		//	Then, as we now have the code that sets filteredRobots here in render(), we can
		//	access it.  So instead of using <CardList robots={this.state.robots}/>, we will
		//	directly use filteredRobots there.
		//
		return	(
			<div className="tc">
				<h1 className="f2">Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots}/>
			</div>
		);
	}
}

export	default	App