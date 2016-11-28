import ConversionList from './ConversionList';
import { connect } from 'react-redux';

import {
	getListLength,
} from '../store';

import {
	removeListItem,
} from '../store/actions';

const mapStateToProps = (state) => ({
	count: getListLength(state),
});

const mapDispatchToProps = {
	removeListItem,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConversionList);
