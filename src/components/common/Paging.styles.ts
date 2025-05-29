import styled from '@emotion/styled';
import { colors } from '@styles/designSystem';

export const Container = styled.nav`
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 12px 0;
  margin-top: 36px;
`;

export const PageButton = styled.span<{ selected?: boolean }>`
  cursor: pointer;
  padding: 5px 12px;
  border-radius: 4px;
  font-weight: 500;
  color: ${({ selected }) =>
    selected ? colors.primary : colors.text.secondary};
  text-decoration: ${({ selected }) => (selected ? 'underline' : '')};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? `${colors.primary}33` : `${colors.ui.surface}`};
  }
`;

export const NavButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
  background-color: transparent;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  color: ${colors.text.secondary};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  transition: color 0.2s;

  &:hover {
  }
`;
