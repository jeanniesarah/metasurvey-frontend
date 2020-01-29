import React from 'react';
import { get } from 'lodash';
import styles from './Footer.module.css';
import PoweredBy from '../PoweredBy';

const Footer = ({ survey, user }) => {
  const isPro = user ? user.isPro : false;
  const customHTML = get(survey, 'footerHTML') ? (
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
