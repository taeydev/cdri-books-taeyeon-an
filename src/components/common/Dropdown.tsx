import { useState } from 'react';
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import Text from '@components/common/Text';
import arrowDownIcon from '@/assets/icons/ic_arrow_down.svg';
import arrowUpIcon from '@/assets/icons/ic_arrow_up.svg';
import { colors } from '@styles/designSystem';
import type { SerializedStyles } from '@emotion/react';

const DropdownWrapper = styled.div<{ customCss?: SerializedStyles }>`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  ${({ customCss }) => customCss};
`;

const Button = styled.button`
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

const OptionList = styled.ul<{ isOpen: boolean }>`
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

const Option = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  selected: string;
  onSelect: (value: string) => void;
  css?: SerializedStyles;
}

/**
 * 공통 Dropdown 컴포넌트
 */
const Dropdown = ({ options, selected, onSelect, css }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);
  const handleSelect = (value: string) => {
    onSelect(value);
    setOpen(false);
  };

  const selectedLabel =
    options.find((option) => option.value === selected)?.label || '';

  return (
    <DropdownWrapper customCss={css}>
      <Button onClick={toggleDropdown}>
        <Text variant="body2Bold">{selectedLabel}</Text>
        <Image
          src={open ? arrowUpIcon : arrowDownIcon}
          alt="arrow"
          width={11}
          height={6}
        />
      </Button>
      <OptionList isOpen={open}>
        {options
          .filter((item) => item.value !== selected)
          .map((option) => (
            <Option
              key={option.value}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </Option>
          ))}
      </OptionList>
    </DropdownWrapper>
  );
};

export default Dropdown;
