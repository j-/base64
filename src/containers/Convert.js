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
	};
};

const mapDispatchToProps = (dispatch, { index }) => ({
	setText: (value) => dispatch(setText(index, value)),
	setBase64: (value) => dispatch(setBase64(index, value)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Convert);
