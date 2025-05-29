import { useCallback, useEffect, useRef, useState } from 'react';
import { colors } from '@styles/designSystem';
import PageSection from '@layouts/PageSection';
import Text from '@components/common/Text/Text';
import SearchBar from '@components/common/SearchBar/SearchBar';
import Button from '@components/common/Button/Button';
import SearchModal, {
  type AdvancedFilters,
} from '@components/search/SearchModal';

import type { Target } from '@api/bookApi';
import { useBookSearch } from '@hooks/useBookSearch';
import { useSearchHistoryStore } from '@store/useSearchHistoryStore';

import {
  AdvancedContainer,
  ContentWrapper,
  InfoWrapper,
  PageContainer,
  SearchArea,
  StyledText,
} from './Page.styles';
import SearchResult from './SearchResult';

/**
 * 도서 검색 페이지
 */
const SearchPage = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [target, setTarget] = useState<Target | ''>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [advancedFilter, setAdvancedFilter] = useState<AdvancedFilters>({
    category: 'title',
    searchWord: '',
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const { history, addHistory, removeHistory } = useSearchHistoryStore();

  const { data, isLoading, error } = useBookSearch(
    query,
    currentPage,
    target || undefined
  );

  // query나 target이 바뀌었을 때만 totalCount 갱신
  useEffect(() => {
    if (data?.totalCount !== undefined) {
      setTotalCount(data.totalCount);
    }
  }, [data?.totalCount, query, target]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    if (openModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openModal]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    setQuery(searchWord);
    setTarget('');
    addHistory(searchWord);
  };

  const handleClickHistory = useCallback(
    (history: string) => {
      setSearchWord(history);
      setQuery(history);
      addHistory(history);
    },
    [addHistory]
  );

  const handleCloseModal = () => {
    setOpenModal(false);
    setAdvancedFilter({ category: 'title', searchWord: '' }); // 초기화
  };

  const toggleModal = () => {
    if (openModal) {
      handleCloseModal();
    } else {
      setOpenModal(true);
    }
  };

  const handleSearchOnModal = () => {
    setCurrentPage(1);
    setTarget(advancedFilter.category);
    setQuery(advancedFilter.searchWord);
    setSearchWord(''); // 초기화
    handleCloseModal();
  };

  const handleChangePage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <PageContainer>
      <ContentWrapper>
        <PageSection
          title="도서 검색"
          subElement={
            <SearchArea>
              <SearchBar
                value={searchWord}
                onChange={handleChangeInput}
                onSearch={handleSearch}
                placeholder={'검색어를 입력하세요'}
                width={480}
                searchHistory={history}
                onClickHistory={handleClickHistory}
                onDeleteHistory={removeHistory}
              />
              <AdvancedContainer ref={containerRef}>
                <Button
                  variant={'outline'}
                  size={'small'}
                  onClick={toggleModal}
                >
                  상세 검색
                </Button>
                {openModal && (
                  <SearchModal
                    open={openModal}
                    onClose={handleCloseModal}
                    filters={advancedFilter}
                    onChange={setAdvancedFilter}
                    onSearch={handleSearchOnModal}
                  />
                )}
              </AdvancedContainer>
            </SearchArea>
          }
        >
          <InfoWrapper>
            <StyledText variant="caption">도서 검색 결과</StyledText>
            <Text variant="caption">총&nbsp;</Text>
            <Text variant="caption" color={colors.primary}>
              {totalCount}
            </Text>
            <Text variant="caption">건</Text>
          </InfoWrapper>
        </PageSection>
        <SearchResult
          isLoading={isLoading}
          error={error}
          data={data}
          currentPage={currentPage}
          onChangePage={handleChangePage}
        />
      </ContentWrapper>
    </PageContainer>
  );
};

export default SearchPage;
