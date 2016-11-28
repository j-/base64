import Convert from './Convert';
import { connect } from 'react-redux';

import {
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

const mapStateToProps = (state) => ({
	valueText: getValueText(state, 0),
	valueBase64: getValueBase64(state, 0),
	calculatedText: getCalculatedText(state, 0),
	calculatedBase64: getCalculatedBase64(state, 0),
	invalidText: getInvalidText(state, 0),
	invalidBase64: getInvalidBase64(state, 0),
});

const mapDispatchToProps = {
	setText,
	setBase64,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Convert);
