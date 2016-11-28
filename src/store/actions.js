import {
	SET_TEXT,
	SET_BASE64,
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

export const removeListItem = (index) => ({
	type: REMOVE_LIST_ITEM,
	index,
});
