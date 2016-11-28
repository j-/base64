import {
	SET_TEXT,
	SET_BASE64,
} from './types';

export const setText = (value) => ({
	type: SET_TEXT,
	index: 0,
	value,
});

export const setBase64 = (value) => ({
	type: SET_BASE64,
	index: 0,
	value,
});
