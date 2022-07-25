import React from 'react';
import styles from './LabelPrimary.module.scss';

interface LabelPrimaryProps {
  value: string | number;
}

export function LabelPrimary({ value }: LabelPrimaryProps) {
  return <span className={styles['LabelPrimary']}>{value}</span>;
}
