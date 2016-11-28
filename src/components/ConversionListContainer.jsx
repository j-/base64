import ConversionList from './ConversionList';
import { connect } from 'react-redux';

import {
	getListLength,
} from '../store';

const mapStateToProps = (state) => ({
	count: getListLength(state),
});

export default connect(
	mapStateToProps
)(ConversionList);
