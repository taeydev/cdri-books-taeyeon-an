import styled from '@emotion/styled';
import { colors, typographyStyle } from '@styles/designSystem';
import closeIcon from '@/assets/icons/ic_close.svg';
import Button from '@components/common/Button';
import ImageButton from '@components/common/ImageButton';
import Dropdown from '@components/common/Dropdown';
import { css } from '@emotion/react';

const Modal = styled.div`
  position: absolute;
  top: calc(100% + 15px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  border-radius: 8px;
  background-color: ${colors.white};
  width: 360px;
  height: 160px;
  box-shadow: 0px 4px 14px 6px rgba(151, 151, 151, 0.15);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 36px;
  padding-right: 8px;
`;

const ModalContent = styled.div`
  padding: 0 24px;
`;

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.primary};
  flex: 1;
  margin-left: 11px;
  padding: 5px 9.45px;
  color: ${colors.text.primary};
  ${typographyStyle('captionMedium')};
  &::placeholder {
    ${typographyStyle('captionMedium')};
    color: ${colors.text.tertiary};
  }
  &:focus {
    outline: none;
  }
`;

export type FilterCategory = 'title' | 'authors' | 'publisher';

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
    value: 'authors',
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
