import styled from '@emotion/styled';
import Text from '@components/common/Text';
import PageSection from '@layouts/PageSection';
import SearchBar from '@components/common/SearchBar';
import { useEffect, useRef, useState } from 'react';
import Button from '@components/common/Button';
import SearchModal, {
  type AdvancedFilters,
} from '@components/search/SearchModal';
import BookAccordionList from '@components/book/BookAccordionList';
import { useBookSearch } from '@hooks/useBookSearch';
import type { Target } from '@api/bookApi';
import { colors } from '@styles/designSystem';
import NoResult from '@components/common/NoResult';
import { useSearchHistoryStore } from '@store/useSearchHistoryStore';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
`;

const ContentWrapper = styled.div`
  width: 960px;
`;

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AdvancedContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const InfoWrapper = styled.div`
  display: flex;
`;

const StyledText = styled(Text)`
  margin-right: 16px;
`;

/**
 * 도서 검색 페이지
 */
const SearchPage = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [target, setTarget] = useState<Target | ''>('');

  const containerRef = useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [advancedFilter, setAdvancedFilter] = useState<AdvancedFilters>({
    category: 'title',
    searchWord: '',
  });

  // query 상태가 바뀌면 useBookSearch 호출됨
  const { data, isLoading, error } = useBookSearch(query, target || undefined);

  const { history, addHistory, removeHistory } = useSearchHistoryStore();

  const handleClickHistory = (history: string) => {
    setSearchWord(history);
    setQuery(history);
    addHistory(history);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleSearch = () => {
    setQuery(searchWord);
    addHistory(searchWord);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setAdvancedFilter({ category: 'title', searchWord: '' }); // 초기화
    setTarget('');
  };

  const toggleModal = () => {
    if (openModal) {
      handleCloseModal();
    } else {
      setOpenModal(true);
    }
  };

  const handleSearchOnModal = () => {
    setTarget(advancedFilter.category);
    setQuery(advancedFilter.searchWord);
    setSearchWord(''); // 초기화
    handleCloseModal();
  };

  useEffect(() => {
    // 바깥 영역 클릭 시 모달 꺼지도록
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
              {data?.totalCount ?? 0}
            </Text>
            <Text variant="caption">건</Text>
          </InfoWrapper>
        </PageSection>
        {isLoading && <p>검색 중...</p>}
        {error && <p>에러 발생: {error.message}</p>}
        {data && data.books.length > 0 ? (
          <BookAccordionList books={data.books} />
        ) : (
          <NoResult message={'검색된 결과가 없습니다.'} />
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default SearchPage;
