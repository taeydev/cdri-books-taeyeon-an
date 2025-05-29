import React from 'react';
import deleteIcon from '@assets/icons/ic_delete.svg';
import ImageButton from '@components/common/Button/ImageButton';
import { Dropdown, DropdownItem } from './SearchHistoryDropdown.styles';

interface SearchHistoryDropdown {
  searchHistory: string[];
  onClickHistory: (keyword: string) => void;
  onDeleteHistory: (keyword: string) => void;
}

/**
 * 검색어 히스토리 Dropdown 컴포넌트
 */
const SearchHistoryDropdown = ({
  searchHistory,
  onClickHistory,
  onDeleteHistory,
}: SearchHistoryDropdown) => {
  return (
    <Dropdown>
      {searchHistory.map((item) => (
        <DropdownItem key={item}>
          <span onClick={() => onClickHistory(item)}>{item}</span>
          <ImageButton
            imgSrc={deleteIcon}
            imgAlt={'delete icon'}
            imgWidth={24}
            imgHeight={24}
            onClick={() => onDeleteHistory(item)}
          />
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

export default React.memo(SearchHistoryDropdown);
