export const setText = (index, value, convert = false) => ({
	type: 'SET_TEXT',
	data: {
		index,
		value,
		convert,
	},
});

export const isActionSetText = (action) => (
	action.type === 'SET_TEXT'
);

export const setBase64 = (index, value, convert = false) => ({
	type: 'SET_BASE64',
	data: {
		index,
		value,
		convert,
	},
});

export const isActionSetBase64 = (action) => (
	action.type === 'SET_BASE64'
);

export const addText = (value) => ({
	type: 'ADD_TEXT',
	data: {
		value,
	},
});

export const isActionAddText = (action) => (
	action.type === 'ADD_TEXT'
);

export const addBase64 = (value) => ({
	type: 'ADD_BASE64',
	data: {
		value,
	},
});

export const isActionAddBase64 = (action) => (
	action.type === 'ADD_BASE64'
);

export const removeListItem = (index) => ({
	type: 'REMOVE_LIST_ITEM',
	data: {
		index,
	},
});

export const isActionRemoveListItem = (action) => (
	action.type === 'REMOVE_LIST_ITEM'
);

export const setUtf8Conversion = (index, convert) => ({
	type: 'SET_UTF8_CONVERSION',
	data: {
		index,
		convert,
	},
});

export const isActionSetUtf8Conversion = (action) => (
	action.type === 'SET_UTF8_CONVERSION'
);
