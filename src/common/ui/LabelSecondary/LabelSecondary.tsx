import React, { memo } from 'react';
import styles from './LabelSecondary.module.scss';

interface LabelSecondaryProps {
  value: string | number;
}

function LabelSecondaryComponent({ value }: LabelSecondaryProps) {
  return <span className={styles['LabelSecondary']}>{value}</span>;
}

export const LabelSecondary = memo(LabelSecondaryComponent);
