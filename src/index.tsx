import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import './assets/styles/_reset.scss';

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<App />
		</Provider>
	</React.Fragment>,
	document.getElementById('root')
);
