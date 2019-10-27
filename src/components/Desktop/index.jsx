import React from 'react';
import styles from './Desktop.module.css';
import Survey from './components/Survey';
import PoweredBy from './components/PoweredBy';
import logoSrc from 'components/logo.png';

const Desktop = ({ surveys, onSave }) => {
  if (!surveys) return null;

  const { title, logo } = surveys;

  return (
    <div className={styles.Desktop}>
      <div className={styles.LogoBlock}>
        <img src={logo ? logo : logoSrc} alt="Branding" />
        <h2 className={styles.Title}>{title}</h2>
      </div>
      <Survey surveys={surveys} onSave={onSave} />
      <PoweredBy />
    </div>
  );
};

export default Desktop;
