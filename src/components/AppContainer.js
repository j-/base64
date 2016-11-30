import App from './App';
import { connect } from 'react-redux';

import {
	addText,
} from '../store/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
	onPaste: () => dispatch(addText()),
	onKeyPress: () => dispatch(addText()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
