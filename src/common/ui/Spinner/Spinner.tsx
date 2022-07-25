import React from 'react';
import styles from './Spinner.module.scss';

export function Spinner() {
  return (
    <div className={styles['Spinner']}>
      <div className={styles['Spinner__element']}>Loading...</div>
    </div>
  );
}
