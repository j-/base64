import {
	isActionSetText,
	isActionSetBase64,
	isActionSetUtf8Conversion,
	isActionAddText,
	isActionAddBase64,
	isActionRemoveListItem,
} from './actions';

import handler from './reducer-conversion';

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
	if (isActionSetText(action) || isActionSetBase64(action) || isActionSetUtf8Conversion(action)) {
		const result = [...state];
		result[action.data.index] = handler(state[action.data.index], action);
		return result;
	}

	if (isActionAddText(action) || isActionAddBase64(action)) {
		return [
			...state,
			handler(null, action),
		];
	}

	if (isActionRemoveListItem(action)) {
		const result = [...state];
		result.splice(action.data.index, 1);
		return result;
	}

	return state;
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

export const useUtf8Conversion = (state, index) => (
	state[index] ? state[index].useUtf8Conversion : true
);
