import styled from '@emotion/styled';
import { colors, typographyStyle } from '@styles/designSystem';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Ul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 56px;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledLink = styled(Link)<{ selected: boolean }>`
  ${typographyStyle('body1')};
  color: ${colors.text.primary};
  border-bottom: ${({ selected }) =>
    selected ? `1px solid ${colors.primary}` : 'none'};
  text-decoration: none;
  height: 26px;
  &:hover {
    color: ${colors.primary};
  }
`;
