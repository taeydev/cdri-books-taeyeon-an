import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, NavItem, StyledLink, Ul } from './TabBar.styles';

export interface Tab {
  tabId: string;
  path: string;
  label: string;
  defaultTab?: boolean;
}

interface BottomTabBarProps {
  tabs: Tab[];
}

/**
 * 상단 NavigationBar 컴포넌트
 */
const TabBar = ({ tabs }: BottomTabBarProps) => {
  const location = useLocation();

  const defaultTabId =
    tabs.find((tab) => tab.defaultTab)?.tabId || tabs[0].tabId;
  const [selectedTab, setSelectedTab] = useState<string>(defaultTabId);

  useEffect(() => {
    const tabFromPath = tabs.find(
      (tab) => tab.path === location.pathname
    )?.tabId;
    if (tabFromPath) {
      setSelectedTab(tabFromPath);
    }
  }, [location.pathname, tabs]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <Nav>
      <Ul>
        {tabs.map((tab) => (
          <NavItem key={tab.tabId} onClick={() => handleTabClick(tab.tabId)}>
            <StyledLink selected={selectedTab === tab.tabId} to={tab.path}>
              {tab.label}
            </StyledLink>
          </NavItem>
        ))}
      </Ul>
    </Nav>
  );
};

export default TabBar;
