import '@blueprintjs/core/dist/blueprint';
import './styles';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import App from './containers/App';
import reducer from './store';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
);
