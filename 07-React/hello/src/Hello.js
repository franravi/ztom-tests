import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
	render() {

		//	We actually write JSX.  We are not really writting HTML, just something alike.  This is the reason why we
		//  do not use 'class', in JS, class is a js reserved name, so we use className instead.
		//  In React, separation of concerns is not a problem when writting HTML, as we are writting components, small
		//  pieces.
		//	The this.props grabs parameters we passed to the component, in the call (in this case at index.js).
		//
		return (
			<div id="hello" className="f1 tc">
				<h1>Hello World</h1>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}

/*
**	As a function, the component above could be defined like the version below.
**  Notice the use of "props".
*//*
const Hello = (props) => {
	return (
			<div id="hello" className="f1 tc">
				<h1>Hello World</h1>
				<p>{props.greeting}</p>
			</div>
		);
}
/**/

export default Hello;														//	Export for others to use.