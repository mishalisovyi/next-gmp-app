import React, { memo } from 'react';
import styles from './Logo.module.scss';

function LogoComponent() {
  return (
    <div className={styles['Logo']}>
      <span className={styles['Logo__bold-part']}>netflix</span>
      <span className={styles['Logo__regular-part']}>roulette</span>
    </div>
  );
}

export const Logo = memo(LogoComponent);
