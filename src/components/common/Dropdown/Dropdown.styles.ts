import type { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/designSystem';

export const DropdownWrapper = styled.div<{ customCss?: SerializedStyles }>`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  ${({ customCss }) => customCss};
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${colors.ui.borderStrong};
  padding: 6px 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.text.primary};
  cursor: pointer;
`;

export const OptionList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  background-color: white;
  list-style: none;
  margin: 0;
  padding: 4px 0;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-6px)')};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  z-index: 10;
`;

export const Option = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f5f5f5;
  }
`;
