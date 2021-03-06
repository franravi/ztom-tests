import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

//	We set a tag <Hello> that is the section where our Hello.js component will work in.
//	The "greeting" part will send properties (props) to the component (think of it like an argument).
//
ReactDOM.render(<Hello greeting={'Hello' + 'React Ninja'} />, document.getElementById('root'));
serviceWorker.register();
