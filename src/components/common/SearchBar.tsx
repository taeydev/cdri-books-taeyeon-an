import Image from '@components/common/Image';
import deleteIcon from '@/assets/icons/ic_delete.svg';
import searchIcon from '@/assets/icons/ic_search.svg';
import { useEffect, useRef, useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  Input,
  SearchBarContainer,
  Wrapper,
} from './SearchBar.styles';
import ImageButton from './ImageButton';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  placeholder?: string;
  width?: number;
  searchHistory?: string[];
  onClickHistory?: (keyword: string) => void;
  onDeleteHistory?: (keyword: string) => void;
}

/**
 * 검색바 컴포넌트
 */
export const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder,
  width,
  searchHistory = [],
  onClickHistory,
  onDeleteHistory,
}: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Wrapper ref={containerRef} width={width}>
      <SearchBarContainer isExpanded={isFocused}>
        <Image src={searchIcon} alt="search icon" width={30} height={30} />
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
        />
      </SearchBarContainer>
      {isFocused && searchHistory.length > 0 && (
        <Dropdown>
          {searchHistory.map((item) => (
            <DropdownItem key={item}>
              <span
                onClick={() => {
                  onClickHistory?.(item);
                  setIsFocused(false);
                }}
              >
                {item}
              </span>
              <ImageButton
                imgSrc={deleteIcon}
                imgAlt={'delete icon'}
                imgWidth={24}
                imgHeight={24}
                onClick={() => onDeleteHistory?.(item)}
              />
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default SearchBar;
