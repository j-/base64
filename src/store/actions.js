import {
	SET_TEXT,
	SET_BASE64,
	ADD_TEXT,
	ADD_BASE64,
	REMOVE_LIST_ITEM,
	SET_UTF8_CONVERSION,
} from './types';

export const setText = (index, value, convert = false) => ({
	type: SET_TEXT,
	data: {
		index,
		value,
		convert,
	},
});

export const setBase64 = (index, value, convert = false) => ({
	type: SET_BASE64,
	data: {
		index,
		value,
		convert,
	},
});

export const addText = (value) => ({
	type: ADD_TEXT,
	data: {
		value,
	},
});

export const addBase64 = (value) => ({
	type: ADD_BASE64,
	data: {
		value,
	},
});

export const removeListItem = (index) => ({
	type: REMOVE_LIST_ITEM,
	data: {
		index,
	},
});

export const setUtf8Conversion = (index, convert) => ({
	type: SET_UTF8_CONVERSION,
	data: {
		index,
		convert,
	},
});
