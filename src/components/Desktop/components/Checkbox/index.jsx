import React from 'react';

const Checkbox = props => {
  const { label, onChange, otherProps } = props;
  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={e => onChange(e.target.checked)}
          {...otherProps}
        />{' '}
        {label}
      </label>
    </li>
  );
};

export default Checkbox;
