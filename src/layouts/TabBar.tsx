import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors, typographyStyle } from '@styles/designSystem';

export interface Tab {
  tabId: string;
  path: string;
  label: string;
  defaultTab?: boolean;
}

interface BottomTabBarProps {
  tabs: Tab[];
}

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Ul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 56px;
  list-style: none;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledLink = styled(Link)<{ selected: boolean }>`
  ${typographyStyle('body1')};
  color: ${colors.text.primary};
  border-bottom: ${({ selected }) =>
    selected ? `1px solid ${colors.primary}` : 'none'};
  text-decoration: none;
  height: 26px;
`;

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
          <Li key={tab.tabId} onClick={() => handleTabClick(tab.tabId)}>
            <StyledLink selected={selectedTab === tab.tabId} to={tab.path}>
              {tab.label}
            </StyledLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export default TabBar;
