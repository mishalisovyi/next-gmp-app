import React, { memo, useCallback, useState } from 'react';

import { Icon } from 'common/constants';
import { ButtonType } from 'common/enums';
import { Button } from 'common/ui';

import styles from './DropdownMenu.module.scss';

interface DropdownMenuProps {
  children: React.ReactNode,
  items: string[],
  onOptionClicked: (option: string) => void;
}

function DropdownMenuComponent({ children, items, onOptionClicked }: DropdownMenuProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleMenuTargetClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    setIsOpened(true);
  };

  const handleMenuOptionClick = useCallback((option: string) => {
    return (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      setIsOpened(false);
      onOptionClicked(option);
    };
  }, [onOptionClicked]);

  const handleCloseButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setIsOpened(false);
  };

  return (
    <>
      {!isOpened && (
        <div onClick={handleMenuTargetClick}>{children}</div>
      )}

      {isOpened && (
        <div className={styles['DropdownMenu']}>
          <div className={styles['DropdownMenu__close-button']}>
            <Button
              type={ButtonType.Transparent}
              text={Icon.MULTIPLICATION_X}
              onClick={handleCloseButtonClick}
            />
          </div>
          {items.map((item) => <div className={styles['DropdownMenu__item']} onClick={handleMenuOptionClick(item)} key={item}>{item}</div>)}
        </div>
      )}
    </>
  );
}

export const DropdownMenu = memo(DropdownMenuComponent);
