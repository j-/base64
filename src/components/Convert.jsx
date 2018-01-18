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
	autoFocus,
	useUtf8Conversion,
}) => (
	<DualText
		autoFocus={ autoFocus }
		// Text props
		valueLeft={ calculatedText || valueText }
		onChangeLeft={ (value) => setText(value, useUtf8Conversion) }
		placeholderLeft="Enter text&hellip;"
		primaryLeft={ calculatedBase64 }
		dangerLeft={ invalidText }
		// Base 64 props
		valueRight={ calculatedBase64 || valueBase64 }
		onChangeRight={ (value) => setBase64(value, useUtf8Conversion) }
		placeholderRight="Enter base 64&hellip;"
		primaryRight={ calculatedText }
		dangerRight={ invalidBase64 }
	/>
);

export default Convert;
