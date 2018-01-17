import ConversionActions from '../components/ConversionActions';
import { connect } from 'react-redux';

import {
	getValueText,
	getValueBase64,
	getCalculatedText,
	getCalculatedBase64,
} from '../store';

import {
	removeListItem,
} from '../store/actions';

const mapStateToProps = (state, { index }) => ({
	valueText: getValueText(state, index) || getCalculatedText(state, index) || '',
	valueBase64: getValueBase64(state, index) || getCalculatedBase64(state, index) || '',
});

const mapDispatchToProps = (dispatch, { index }) => ({
	removeListItem: () => dispatch(removeListItem(index)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConversionActions);
