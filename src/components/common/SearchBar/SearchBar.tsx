import { useCallback, useEffect, useRef, useState } from 'react';
import Image from '@components/common/Image/Image';
import searchIcon from '@assets/icons/ic_search.svg';
import SearchHistoryDropdown from '@components/common/SearchBar/SearchHistoryDropdown';
import { Input, SearchBarContainer, Wrapper } from './SearchBar.styles';

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

  const handleClickHistory = useCallback(
    (item: string) => {
      onClickHistory?.(item);
      setIsFocused(false);
    },
    [onClickHistory]
  );

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
      {isFocused &&
        searchHistory?.length > 0 &&
        onClickHistory &&
        onDeleteHistory && (
          <SearchHistoryDropdown
            searchHistory={searchHistory}
            onClickHistory={handleClickHistory}
            onDeleteHistory={onDeleteHistory}
          />
        )}
    </Wrapper>
  );
};

export default SearchBar;
