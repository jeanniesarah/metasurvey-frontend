import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = props => {
  const { label, onChange, otherProps } = props;
  return (
    <li className={styles.listItem}>
      <label className={styles.label}>
        <input
          className={styles.Checkbox}
          type="checkbox"
          onChange={e => onChange(e.target.checked)}
          {...otherProps}
        />
        <div className={styles.CustomCheckbox}></div>
        <span>{label}</span>
      </label>
    </li>
  );
};

export default Checkbox;
