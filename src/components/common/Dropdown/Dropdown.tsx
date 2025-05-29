import { useState } from 'react';
import type { SerializedStyles } from '@emotion/react';
import arrowDownIcon from '@/assets/icons/ic_arrow_down.svg';
import arrowUpIcon from '@/assets/icons/ic_arrow_up.svg';
import Image from '@components/common/Image/Image';
import Text from '@components/common/Text/Text';
import { Button, DropdownWrapper, OptionList, Option } from './Dropdown.styles';

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
