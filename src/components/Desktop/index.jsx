import React from 'react';
import styles from './Desktop.module.css';
import { ReactComponent as Illustration } from './illustration.svg';
import Survey from './components/Survey';

const Desktop = ({ surveys, onSave }) => {
  if (!surveys) return null;

  const { title } = surveys;

  return (
    <div className={styles.Desktop}>
      <h1 className={styles.Title}>{title}</h1>
      <div className={styles.Illustration}>
        <Illustration />
      </div>
      <Survey surveys={surveys} onSave={onSave} />
    </div>
  );
};

export default Desktop;
