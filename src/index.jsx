import '@blueprintjs/core/dist/blueprint';
import './styles';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/AppContainer';
import reducer from './store';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
);
