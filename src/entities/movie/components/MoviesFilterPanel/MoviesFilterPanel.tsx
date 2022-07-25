import React, { memo, useCallback } from 'react';

import { Divider, FilterSelectList, TabBar } from 'common/ui';
import { MOVIES_SORTING_SELECT_DATA, MOVIES_TABS_DATA } from 'entities/movie/constants';

import styles from './MoviesFilterPanel.module.scss';

interface MoviesFilterPanelProps {
  defaultGenreFilter?: string;
  defaultSortField?: string;
  onSortingPerformed: (selectedValue: string) => void;
  onGenreFilterApplied: (tabLabel: string) => void;
}

function MoviesFilterPanelComponent({
  defaultGenreFilter,
  defaultSortField,
  onGenreFilterApplied,
  onSortingPerformed,
}: MoviesFilterPanelProps) {
  const handleActiveTabChange = useCallback((tabLabel: string) => {
    onGenreFilterApplied(tabLabel);
  }, [onGenreFilterApplied]);

  const handleFilterSelectionChange = useCallback((selectedValue: string) => {
    onSortingPerformed(selectedValue);
  }, [onSortingPerformed]);

  return (
    <>
      <div className={styles['MoviesFilterPanel']}>
        <TabBar
          tabs={MOVIES_TABS_DATA.items}
          defaultActiveTab={defaultGenreFilter as string}
          onActiveTabChanged={handleActiveTabChange}
        />
        <FilterSelectList label="Sort by" options={MOVIES_SORTING_SELECT_DATA.items} defaultValue={defaultSortField as string} onSelectionChanged={handleFilterSelectionChange} />
      </div>
      <Divider />
    </>
  );
}

MoviesFilterPanelComponent.defaultProps = {
  defaultGenreFilter: MOVIES_TABS_DATA.defaultValue,
  defaultSortField: MOVIES_SORTING_SELECT_DATA.defaultValue,
};

export const MoviesFilterPanel = memo(MoviesFilterPanelComponent);
