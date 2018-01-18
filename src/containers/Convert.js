import Convert from '../components/Convert';
import { connect } from 'react-redux';

import {
	getListLength,
	getValueText,
	getValueBase64,
	getCalculatedText,
	getCalculatedBase64,
	getInvalidText,
	getInvalidBase64,
	useUtf8Conversion,
} from '../store';

import {
	setText,
	setBase64,
} from '../store/actions';

const mapStateToProps = (state, { index }) => {
	const listLength = getListLength(state);
	return {
		valueText: getValueText(state, index),
		valueBase64: getValueBase64(state, index),
		calculatedText: getCalculatedText(state, index),
		calculatedBase64: getCalculatedBase64(state, index),
		invalidText: getInvalidText(state, index),
		invalidBase64: getInvalidBase64(state, index),
		autoFocus: index < listLength || listLength === 0,
		useUtf8Conversion: useUtf8Conversion(state, index),
	};
};

const mapDispatchToProps = (dispatch, { index }) => ({
	setText: (value, convert) => dispatch(setText(index, value, convert)),
	setBase64: (value, convert) => dispatch(setBase64(index, value, convert)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Convert);
