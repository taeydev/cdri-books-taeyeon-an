import styled from '@emotion/styled';
import { colors, typographyStyle } from '@styles/designSystem';

export const Wrapper = styled.div<{ width?: number }>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

export const SearchBarContainer = styled.div<{ isExpanded?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: ${({ isExpanded }) =>
    isExpanded ? '24px 24px 0 0' : '100px'};
  background-color: ${colors.ui.surface};
  padding: 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  margin-left: 11px;
  padding: 0;
  color: ${colors.text.primary};
  ${typographyStyle('caption')};
  &::placeholder {
    ${typographyStyle('caption')};
    color: ${colors.text.tertiary};
  }
  &:focus {
    outline: none;
  }
`;
