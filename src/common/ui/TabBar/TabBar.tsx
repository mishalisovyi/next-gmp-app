import React, { memo, useCallback, useState } from 'react';

import { TabDataItem } from 'common/interfaces';
import { Tab } from 'common/ui';

import styles from './TabBar.module.scss';

interface TabBarProps {
  tabs: TabDataItem[];
  defaultActiveTab: string;
  onActiveTabChanged: (tabLabel: string) => void;
}

const getDefaultActiveTabIndex = (tabs: TabDataItem[], defaultActiveTabLabel: string) => {
  return tabs.findIndex((item) => item.value === defaultActiveTabLabel);
};

function TabBarComponent({ tabs, defaultActiveTab, onActiveTabChanged }: TabBarProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(
    getDefaultActiveTabIndex(tabs, defaultActiveTab),
  );

  const handleTabClick = useCallback((tabIndex: number, tabLabel: string) => {
    setActiveTabIndex(tabIndex);
    onActiveTabChanged(tabLabel);
  }, [onActiveTabChanged]);

  return (
    <div className={styles['TabBar']}>
      {tabs.map((tab, index) => {
        return (
          <Tab
            label={tab.title}
            value={tab.value}
            key={tab.value}
            index={index}
            isActive={index === activeTabIndex}
            onClick={handleTabClick}
          />
        );
      })}
    </div>
  );
}

export const TabBar = memo(TabBarComponent);
