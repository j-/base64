import React, { PropTypes } from 'react';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';
import SingleText from './SingleText';

const DualText = ({
	valueLeft,
	valueRight,
	placeholderLeft,
	placeholderRight,
	onChangeLeft,
	onChangeRight,
	primaryLeft,
	primaryRight,
	dangerLeft,
	dangerRight,
	...props
}) => {
	return (
		<FlexContainer alignContent="space-between" alignItems="stretch" style={{ height: 150 }} { ...props }>
			<FlexItem flexGrow={ 20 }>
				<SingleText
					value={ valueLeft }
					onChange={ onChangeLeft }
					primary={ primaryLeft }
					danger={ dangerLeft }
					placeholder={ placeholderLeft }
					style={{ width: '100%', height: '100%', resize: 'none' }}
				/>
			</FlexItem>
			<FlexItem flexGrow={ 1 } />
			<FlexItem flexGrow={ 20 }>
				<SingleText
					value={ valueRight }
					onChange={ onChangeRight }
					primary={ primaryRight }
					danger={ dangerRight }
					placeholder={ placeholderRight }
					style={{ width: '100%', height: '100%', resize: 'none' }}
				/>
			</FlexItem>
		</FlexContainer>
	);
};

DualText.propTypes = {
	valueLeft: PropTypes.string,
	valueRight: PropTypes.string,
	placeholderLeft: PropTypes.string,
	placeholderRight: PropTypes.string,
	onChangeLeft: PropTypes.func,
	onChangeRight: PropTypes.func,
	primaryLeft: PropTypes.bool,
	primaryRight: PropTypes.bool,
	dangerLeft: PropTypes.bool,
	dangerRight: PropTypes.bool,
};

export default DualText;
