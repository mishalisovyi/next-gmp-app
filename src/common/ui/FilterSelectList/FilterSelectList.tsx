import React, { ChangeEvent } from 'react';
import { SelectListValue, SelectOptionDataItem } from 'common/interfaces';
import styles from './FilterSelectList.module.scss';

interface FilterSelectListProps {
  label: string;
  options: SelectOptionDataItem[];
  defaultValue: SelectListValue
  onSelectionChanged: (item: string) => void;
}

export function FilterSelectList({
  label,
  options,
  defaultValue,
  onSelectionChanged,
}: FilterSelectListProps) {
  const onSelectValueChanged = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    onSelectionChanged(value);
  };

  return (
    <div className={styles['FilterSelectList']}>
      <label className={styles['FilterSelectList__label']}>{label}</label>

      <select className={styles['FilterSelectList__control']} defaultValue={defaultValue} onChange={onSelectValueChanged}>
        {options.map((item) => {
          return <option className={styles['control__option']} key={`${item.title}_${item.value}`} value={item.value}>{item.title}</option>;
        })}
      </select>
    </div>
  );
}
