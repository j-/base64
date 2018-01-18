import base64 from 'base-64';
import utf8 from 'utf8';

import {
	isActionSetText,
	isActionSetBase64,
	isActionSetUtf8Conversion,
	isActionAddText,
	isActionAddBase64,
} from './actions';

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
	if (isActionAddText(action) || isActionSetText(action)) {
		return setText(state, action.data.value, action.data.convert);
	}

	if (isActionAddBase64(action) || isActionSetBase64(action)) {
		return setBase64(state, action.data.value, action.data.convert);
	}

	if (isActionSetUtf8Conversion(action)) {
		if (state.valueText !== null) {
			return setText(state, state.valueText, action.data.convert);
		} else {
			return setBase64(state, state.valueBase64, action.data.convert);
		}
	}

	return state;
};
