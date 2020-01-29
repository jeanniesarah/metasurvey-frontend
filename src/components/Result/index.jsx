import React from 'react';
import { get } from 'lodash';
import { Result } from 'antd';
import PoweredBy from '../PoweredBy';
import './ant.result.css';
import styles from './styles.module.css';
import Footer from '../Footer';

const saveSuccessTitle =
  'Successfully saved survey results. Thank you!';
const saveErrorTitle = 'Something went wrong during saving';

export default ({ result, user }) => {
  const { ok: isOk } = result || {};
  return (
    <div className={styles.wrapper}>
      <Result
        status={isOk ? 'success' : 'error'}
        title={isOk ? saveSuccessTitle : saveErrorTitle}
      />
      <Footer user={user} />
    </div>
  );
};
