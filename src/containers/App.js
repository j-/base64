import App from '../components/App';
import { connect } from 'react-redux';

import {
	addText,
} from '../store/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
	onPaste: (value) => dispatch(addText(value)),
	onKeyPress: (value) => dispatch(addText(value)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
