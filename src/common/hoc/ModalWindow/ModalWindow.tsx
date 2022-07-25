import React, { useMemo } from 'react';

import { Icon } from 'common/constants';
import { ButtonType } from 'common/enums';
import { ModalWindowProps } from 'common/interfaces';
import { Button } from 'common/ui';

import styles from './ModalWindow.module.scss';

const defaultActionButtonAttributes = {
  show: false,
  text: '',
  onClick: () => { },
};

export function ModalWindow({
  title = '',
  primaryButton = defaultActionButtonAttributes,
  secondaryButton = defaultActionButtonAttributes,
  onClose,
  children,
}: ModalWindowProps) {
  const primaryButtonElement = useMemo(() => {
    return primaryButton.show
      ? (
        <Button
          type={ButtonType.Primary}
          text={primaryButton.text}
          onClick={primaryButton.onClick}
        />
      )
      : null;
  }, [primaryButton.show, primaryButton.text, primaryButton.onClick]);

  const secondaryButtonElement = useMemo(() => {
    return secondaryButton.show
      ? (
        <Button
          type={ButtonType.Secondary}
          text={secondaryButton.text}
          onClick={secondaryButton.onClick}
        />
      )
      : null;
  }, [secondaryButton.show, secondaryButton.text, secondaryButton.onClick]);

  return (
    <div className={styles['ModalWindow__container']}>
      <div className={styles['ModalWindow__backdrop']} />
      <div className={styles['ModalWindow__window']}>
        <div className={styles['window__close-button-wrapper']}>
          <Button type={ButtonType.Transparent} text={Icon.MULTIPLICATION_X} onClick={onClose} />
        </div>
        {title && <header className={styles['window__title']}>{title}</header>}
        <div className={styles['window__body']}>{children}</div>
        <div className={styles['window__action-buttons']}>
          {secondaryButtonElement}
          {primaryButtonElement}
        </div>
      </div>
    </div>
  );
}
