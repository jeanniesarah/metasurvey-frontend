import React from 'react';

const Checkbox = (props) => {
	const { label, otherProps } = props;
	return  <>
		<input type="checkbox" {...otherProps} /> {label}
	</>;
};

export default Checkbox;