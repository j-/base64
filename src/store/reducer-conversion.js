import base64 from 'base-64';
import utf8 from 'utf8';

import {
	SET_TEXT,
	SET_BASE64,
} from './types';

const DEFAULT_STATE = {
	valueText: null,
	valueBase64: null,
	calculatedText: null,
	calculatedBase64: null,
	invalidText: false,
	invalidBase64: false,
	useUtf8Conversion: true,
};

const setText = (state, valueText, convert) => {
	let calculatedBase64 = null;
	let didError = false;
	if (convert) {
		valueText = utf8.encode(valueText);
	}
	try {
		calculatedBase64 = base64.encode(valueText);
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

const setBase64 = (state, valueBase64, convert) => {
	let calculatedText = null;
	let didError = false;
	try {
		calculatedText = base64.decode(valueBase64);
	} catch (err) {
		didError = true;
	}
	if (convert) {
		calculatedText = utf8.decode(calculatedText);
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
			return setText(state, action.data.value, action.data.convert);
		case SET_BASE64:
			return setBase64(state, action.data.value, action.data.convert);
		default:
			return state;
	}
};
