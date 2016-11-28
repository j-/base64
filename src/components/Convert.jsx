import React from 'react';
import DualText from './DualText';

const Convert = ({
	valueText,
	valueBase64,
	calculatedText,
	calculatedBase64,
	invalidText,
	invalidBase64,
	setText,
	setBase64,
}) => (
	<DualText
		// Text props
		valueLeft={ calculatedText || valueText }
		onChangeLeft={ setText }
		placeholderLeft="Enter text&hellip;"
		primaryLeft={ calculatedBase64 }
		dangerLeft={ invalidText }
		// Base 64 props
		valueRight={ calculatedBase64 || valueBase64 }
		onChangeRight={ setBase64 }
		placeholderRight="Enter base 64&hellip;"
		primaryRight={ calculatedText }
		dangerRight={ invalidBase64 }
	/>
);

export default Convert;
