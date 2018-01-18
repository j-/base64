import base64 from 'base-64';
import utf8 from 'utf8';

import {
	SET_TEXT,
	SET_BASE64,
	SET_UTF8_CONVERSION,
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
	useUtf8Conversion: true,
};

const setText = (state, valueText, convert = true) => {
	let calculatedBase64 = null;
	let didError = false;
	try {
		calculatedBase64 = base64.encode(convert ? utf8.encode(valueText) : valueText);
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
		useUtf8Conversion: convert,
	};
};

const setBase64 = (state, valueBase64, convert = true) => {
	let calculatedText = null;
	let didError = false;
	try {
		calculatedText = convert ? utf8.decode(base64.decode(valueBase64)) : base64.decode(valueBase64);
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
		useUtf8Conversion: convert,
	};
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_TEXT:
		case SET_TEXT:
		return setText(state, action.data.value, action.data.convert);
		case ADD_BASE64:
		case SET_BASE64:
			return setBase64(state, action.data.value, action.data.convert);
		case SET_UTF8_CONVERSION:
			if (state.valueText !== null) {
				return setText(state, state.valueText, action.data.convert);
			} else {
				return setBase64(state, state.valueBase64, action.data.convert);
			}
		default:
			return state;
	}
};
