import	React 				from	'react'
import	ReactDOM 			from	'react-dom'
import	'./index.css'
import	App					from	'./App'
import	* as serviceWorker	from	'./serviceWorker'
import	'tachyons'

//	We set a tag <Hello> that is the section where our Hello.js component will work in.
//	The "greeting" part will send properties (props) to the component (think of it like an argument).
//
ReactDOM.render(
		<App />
	,	document.getElementById('root')
	);
serviceWorker.register();
