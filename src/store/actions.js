import {
	SET_TEXT,
	SET_BASE64,
	ADD_TEXT,
	ADD_BASE64,
	REMOVE_LIST_ITEM,
} from './types';

export const setText = (index, value) => ({
	type: SET_TEXT,
	index,
	value,
});

export const setBase64 = (index, value) => ({
	type: SET_BASE64,
	index,
	value,
});

export const addText = (value) => ({
	type: ADD_TEXT,
	value,
});

export const addBase64 = (value) => ({
	type: ADD_BASE64,
	value,
});

export const removeListItem = (index) => ({
	type: REMOVE_LIST_ITEM,
	index,
});
