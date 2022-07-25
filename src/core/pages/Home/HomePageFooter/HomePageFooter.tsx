import React, { memo } from 'react';
import { Logo } from 'common/ui';
import styles from './HomePageFooter.module.scss';

function HomePageFooterComponent() {
  return (
    <footer className={styles['HomePageFooter']}>
      <Logo />
    </footer>
  );
}

export const HomePageFooter = memo(HomePageFooterComponent);
