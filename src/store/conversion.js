import base64 from 'base-64';
import utf8 from 'utf8';

import {
	SET_TEXT,
	SET_BASE64,
	ADD_TEXT,
	ADD_BASE64,
} from './types';

const DEFAULT_STATE = {
	valueText: null,
	valueBase64: null,
	calculatedText: null,
	calculatedBase64: null,
	invalidText: false,
	invalidBase64: false,
};

const setText = (state, valueText) => {
	let calculatedBase64 = null;
	let didError = false;
	try {
		calculatedBase64 = base64.encode(utf8.encode(valueText));
	} catch (err) {
		didError = true;
	}
	return {
		...state,
		valueText: valueText,
		valueBase64: null,
		calculatedText: null,
		calculatedBase64: calculatedBase64,
		invalidText: didError,
		invalidBase64: false,
	};
};

const setBase64 = (state, valueBase64) => {
	let calculatedText = null;
	let didError = false;
	try {
		calculatedText = utf8.decode(base64.decode(valueBase64));
	} catch (err) {
		didError = true;
	}
	return {
		...state,
		valueText: null,
		valueBase64: valueBase64,
		calculatedText: calculatedText,
		calculatedBase64: null,
		invalidText: false,
		invalidBase64: didError,
	};
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_TEXT:
		case ADD_TEXT:
			return setText(state, action.value);
		case SET_BASE64:
		case ADD_BASE64:
			return setBase64(state, action.value);
		default:
			return state;
	}
};
