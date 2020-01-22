import React from 'react';
import styles from './Footer.module.css';
import PoweredBy from '../PoweredBy';

const Footer = ({ survey, user }) => {
  const isPro = user ? user.isPro : false;
  const customHTML = survey.footerHTML ? (
    <div
      dangerouslySetInnerHTML={{ __html: survey.footerHTML }}
    ></div>
  ) : null;

  return (
    <div className={styles.footer}>
      {customHTML}
      {!isPro && <PoweredBy />}
    </div>
  );
};

export default Footer;
