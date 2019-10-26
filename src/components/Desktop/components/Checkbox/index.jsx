import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = props => {
  const { label, onChange, otherProps } = props;
  return (
    <li>
      <label>
        <input
          className={styles.Checkbox}
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
