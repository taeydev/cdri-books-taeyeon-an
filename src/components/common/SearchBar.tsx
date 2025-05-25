import styled from '@emotion/styled';
import { colors, typographyStyle } from '@styles/designSystem';
import Image from '@components/common/Image';
import searchIcon from '@/assets/icons/ic_search.svg';

const SearchBarContainer = styled.div<{ width?: number }>`
  display: flex;
  align-items: center;
  border-radius: 100px;
  background-color: ${colors.ui.surface};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  padding: 10px;
`;

const Input = styled.input`
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

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  placeholder?: string;
  width?: number;
}

/**
 * 검색바 컴포넌트
 */
const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder,
  width,
}: SearchBarProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <SearchBarContainer width={width}>
      <Image src={searchIcon} alt="search icon" width={30} height={30} />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
