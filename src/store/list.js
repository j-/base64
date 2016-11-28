import {
	SET_TEXT,
	SET_BASE64,
	REMOVE_LIST_ITEM,
} from './types';

import handler from './conversion';

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_TEXT:
		case SET_BASE64: {
			const result = [...state];
			result[action.index] = handler(state[action.index], action);
			return result;
		}
		case REMOVE_LIST_ITEM: {
			const result = [...state];
			result.splice(action.index, 1);
			return result;
		}
		default:
			return state;
	}
};

export const getListLength = (state) => (
	state.length
);

export const getValueText = (state, index) => (
	state[index] && state[index].valueText || null
);

export const getValueBase64 = (state, index) => (
	state[index] && state[index].valueBase64 || null
);

export const getCalculatedText = (state, index) => (
	state[index] && state[index].calculatedText || false
);

export const getCalculatedBase64 = (state, index) => (
	state[index] && state[index].calculatedBase64 || false
);

export const getInvalidText = (state, index) => (
	state[index] && state[index].invalidText || false
);

export const getInvalidBase64 = (state, index) => (
	state[index] && state[index].invalidBase64 || false
);
