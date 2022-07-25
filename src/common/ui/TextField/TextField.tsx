import React, { forwardRef } from 'react';
import { ComponentWithRefProps } from 'common/interfaces';
import styles from './TextField.module.scss';

interface TextFieldProps extends ComponentWithRefProps {
  placeholder?: string,
  value?: string,
}

const TextField = forwardRef(
  ({ placeholder, value }: TextFieldProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <input type="text" ref={ref} defaultValue={value} placeholder={placeholder} className={styles['TextField']} />
    );
  },
);

TextField.displayName = 'TextField';

TextField.defaultProps = {
  placeholder: '',
  value: '',
};

export { TextField };
