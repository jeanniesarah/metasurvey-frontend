import React from 'react';
import styles from './PoweredBy.module.css';
import logoSrc from 'components/logo.png';

const PoweredBy = () => {
  return (
    <div className={styles.poweredBy}>
      <p className={styles.logoText}>Powered&nbsp;by</p>
      <img src={logoSrc} className={styles.logo} alt="Logo" />
    </div>
  );
};

export default PoweredBy;
