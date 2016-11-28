import { combineReducers } from 'redux';
import list, * as listModule from './list';

export default combineReducers({
	list,
});

export const getValueText = (state, index) => (
	listModule.getValueText(state.list, index)
);

export const getValueBase64 = (state, index) => (
	listModule.getValueBase64(state.list, index)
);

export const getCalculatedText = (state, index) => (
	listModule.getCalculatedText(state.list, index)
);

export const getCalculatedBase64 = (state, index) => (
	listModule.getCalculatedBase64(state.list, index)
);

export const getInvalidText = (state, index) => (
	listModule.getInvalidText(state.list, index)
);

export const getInvalidBase64 = (state, index) => (
	listModule.getInvalidBase64(state.list, index)
);
