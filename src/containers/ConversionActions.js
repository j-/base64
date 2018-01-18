import ConversionActions from '../components/ConversionActions';
import { connect } from 'react-redux';

import {
	getValueText,
	getValueBase64,
	getCalculatedText,
	getCalculatedBase64,
	useUtf8Conversion,
} from '../store';

import {
	removeListItem,
	setUtf8Conversion,
} from '../store/actions';

const mapStateToProps = (state, { index }) => ({
	valueText: getValueText(state, index) || getCalculatedText(state, index) || '',
	valueBase64: getValueBase64(state, index) || getCalculatedBase64(state, index) || '',
	useUtf8Conversion: useUtf8Conversion(state, index),
});

const mapDispatchToProps = (dispatch, { index }) => ({
	removeListItem: () => dispatch(removeListItem(index)),
	setUtf8Conversion: (e) => dispatch(setUtf8Conversion(index, e.currentTarget.checked)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConversionActions);
