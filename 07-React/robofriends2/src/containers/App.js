import	React, { Component} 	from	'react'
import	CardList 				from 	'../components/CardList'
import	SearchBox				from	'../components/SearchBox'
import	Scroll					from	'../components/Scroll'

//	Next import no longer used, as we will replace it with an external feed.
//
//import	{ robots }				from 	'./robots'

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

		//	Our first change in this version is to set robots to empty array, as instead of pre-filling it
		//  hardcoded, we will instead access a REST service.
		//
		this.state	=	{
			robots: 		[],
			searchfield: 	''
		}
	}

	/*
	**	componentDidMount()	-	Mounting method invoked after component was inserted in the tree.
	**							Here we will feed robots with data.
	*/
	componentDidMount() {
		//	The version here grabs data from our hardcoded file, but it is just for testing, we will use a json
		//  feed from a service.
		//
		//this.setState({ robots: robots})

		fetch('http://jsonplaceholder.typicode.com/users')
			.then(response	=>	{
				return	response.json();
			})
			.then(users	=>	{
				this.setState({ robots: users})
			})
		
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
		//	Added some variables for cleaning around.
		//
		const 	{ robots, searchfield	}	=	this.state;

		//	Copied over from onSearchChange(), so that we can update the render.
		//
		const filteredRobots	=	robots.filter(robots	=>{
			return	robots.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		if (!robots.length)	{
			return	<h1>Loading</h1>
		}

		//	Also, we originally had <CardList robots={robots}/>, but now we will change it to
		//	pass a reference to our state robots storage.
		//
		//	Next, we set a callback on searchbox, tied to onSearchChange.
		//
		//	Then, as we now have the code that sets filteredRobots here in render(), we can
		//	access it.  So instead of using <CardList robots={this.state.robots}/>, we will
		//	directly use filteredRobots there.
		//
		//	We now use children to pass CardList to Scroll and set it as children.
		//
		return	(
			<div className="tc">
				<h1 className="f2">Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}

export	default	App