import React, { MouseEventHandler } from 'react';

import { ModalWindow } from 'common/hoc';

import styles from './PopupInfo.module.scss';

interface PopupInfoProps {
  title: string;
  message: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export function PopupInfo({ title, message, onClose }: PopupInfoProps) {
  return (
    <ModalWindow onClose={onClose}>
      <div className={styles['PopupInfo']}>
        <div className={styles['PopupInfo__check-mark']}>&#10003;</div>
        <h1 className="typography-heading">{title}</h1>
        <p className="typography-body">{message}</p>
      </div>
    </ModalWindow>
  );
}
