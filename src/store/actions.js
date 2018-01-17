import {
	SET_TEXT,
	SET_BASE64,
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

export const removeListItem = (index) => ({
	type: REMOVE_LIST_ITEM,
	data: {
		index,
	},
});
