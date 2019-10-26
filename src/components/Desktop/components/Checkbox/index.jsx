import React from 'react';

const Checkbox = props => {
  const { label, otherProps } = props;

  return (
    <li>
      <input type="checkbox" {...otherProps} />
      {label}
    </li>
  );
};

export default Checkbox;
