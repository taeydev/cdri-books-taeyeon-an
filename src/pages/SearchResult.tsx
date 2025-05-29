import React from 'react';
import type { SearchBooksResult } from '@api/bookApi';
import BookAccordionList from '@components/book/BookAccordionList';
import BookAccordionSkeletonList from '@components/book/BookAccordionSkeletonList';
import Paging from '@components/common/Paging/Paging';
import ErrorResult from '@components/common/ResultMessage/ErrorResult';
import NoResult from '@components/common/ResultMessage/NoResult';

/**
 * 도서 검색 결과 컴포넌트
 */
const SearchResult = ({
  isLoading,
  error,
  data,
  currentPage,
  onChangePage,
}: {
  isLoading: boolean;
  error: unknown;
  data: SearchBooksResult | undefined;
  currentPage: number;
  onChangePage: (page: number) => void;
}) => {
  if (isLoading) return <BookAccordionSkeletonList count={10} />;
  if (error)
    return (
      <ErrorResult message="문제가 발생했습니다. 잠시 후 다시 시도해주세요." />
    );
  if (!data || data.books.length === 0)
    return <NoResult message="검색된 결과가 없습니다." />;

  return (
    <>
      <BookAccordionList books={data.books} />
      <Paging
        currentPage={currentPage}
        totalPages={Math.ceil((data.totalCount ?? 0) / 10)}
        onPageChange={onChangePage}
      />
    </>
  );
};

export default React.memo(SearchResult);
