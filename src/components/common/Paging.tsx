import React from 'react';
import { Container, NavButton, PageButton } from './Paging.styles';
import ChevronLeftIcon from '@components/icon/ChevronLeftIcon';
import ChevronRightIcon from '@components/icon/ChevronRightIcon';
import ChevronsLeftIcon from '@components/icon/ChevronsLeftIcon';
import ChevronsRightIcon from '@components/icon/ChevronsRightIcon';

interface PagingProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const MAX_PAGE_BUTTONS = 5;

/**
 * 페이지 네비게이션 컴포넌트
 */
const Paging = ({ currentPage, totalPages, onPageChange }: PagingProps) => {
  const startPage =
    Math.floor((currentPage - 1) / MAX_PAGE_BUTTONS) * MAX_PAGE_BUTTONS + 1;
  const endPage = Math.min(startPage + MAX_PAGE_BUTTONS - 1, totalPages);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <Container>
      <NavButton onClick={() => goToPage(1)} disabled={currentPage === 1}>
        <ChevronsLeftIcon width={14} height={14} />
      </NavButton>
      <NavButton
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon width={14} height={14} />
      </NavButton>

      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((page) => (
        <PageButton
          key={page}
          selected={page === currentPage}
          onClick={() => goToPage(page)}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </PageButton>
      ))}

      <NavButton
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon width={14} height={14} />
      </NavButton>
      <NavButton
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        <ChevronsRightIcon width={14} height={14} />
      </NavButton>
    </Container>
  );
};

export default React.memo(Paging);
