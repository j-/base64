import {
	SET_TEXT,
	SET_BASE64,
	REMOVE_LIST_ITEM,
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

export const removeListItem = (index) => ({
	type: REMOVE_LIST_ITEM,
	data: {
		index,
	},
});
