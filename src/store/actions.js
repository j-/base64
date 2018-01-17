import {
	SET_TEXT,
	SET_BASE64,
	ADD_TEXT,
	ADD_BASE64,
	REMOVE_LIST_ITEM,
} from './types';

export const setText = (index, value) => ({
	type: SET_TEXT,
	data: {
		index,
		value,
	},
});

export const setBase64 = (index, value) => ({
	type: SET_BASE64,
	data: {
		index,
		value,
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
