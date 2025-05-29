import styled from '@emotion/styled';
import { colors, typographyStyle } from '@styles/designSystem';

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  background-color: ${colors.ui.surface};
  border-radius: 0 0 24px 24px;
  padding: 8px 0;
  z-index: 10;
`;

export const DropdownItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 25px 16px 51px;
  cursor: pointer;
  color: ${colors.text.tertiary};
  &:hover {
    color: ${colors.text.secondary};
  }

  span {
    flex: 1;
    ${typographyStyle('caption')};
  }
`;
