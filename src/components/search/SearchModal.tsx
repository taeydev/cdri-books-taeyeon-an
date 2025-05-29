import { css } from '@emotion/react';
import closeIcon from '@assets/icons/ic_close.svg';
import Button from '@components/common/Button/Button';
import ImageButton from '@components/common/Button/ImageButton';
import Dropdown from '@components/common/Dropdown/Dropdown';
import {
  FilterWrapper,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
} from './SearchModal.styles';

export type FilterCategory = 'title' | 'person' | 'publisher'; // query target

/**
 * 상세 검색 interface
 */
export interface AdvancedFilters {
  category: FilterCategory;
  searchWord: string;
}

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  filters: AdvancedFilters;
  onChange: (filters: AdvancedFilters) => void;
  onSearch: () => void;
}

const options = [
  {
    label: '제목',
    value: 'title',
  },
  {
    label: '저자명',
    value: 'person',
  },
  {
    label: '출판사',
    value: 'publisher',
  },
];

/**
 * 상세 검색 모달창
 */
const SearchModal = ({
  open,
  onClose,
  filters,
  onChange,
  onSearch,
}: SearchModalProps) => {
  if (!open) return null;

  const handleSelectOption = (value: string) => {
    onChange({ ...filters, category: value as FilterCategory });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, searchWord: e.target.value });
  };

  return (
    <Modal>
      <ModalHeader>
        <ImageButton
          imgSrc={closeIcon}
          imgAlt="close icon"
          imgWidth={20}
          imgHeight={20}
          onClick={onClose}
        />
      </ModalHeader>
      <ModalContent>
        <FilterWrapper>
          <Dropdown
            options={options}
            selected={filters.category}
            onSelect={handleSelectOption}
            css={css`
              width: 100px;
            `}
          />
          <Input
            type="text"
            value={filters.searchWord}
            onChange={handleChangeInput}
            placeholder={'검색어 입력'}
          />
        </FilterWrapper>
        <Button
          variant="primary"
          size="small"
          css={css`
            height: 36px;
          `}
          full
          onClick={onSearch}
        >
          검색하기
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
