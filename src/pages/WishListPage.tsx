import { useState } from 'react';
import { colors } from '@styles/designSystem';
import PageSection from '@layouts/PageSection';
import Text from '@components/common/Text/Text';
import BookAccordionList from '@components/book/BookAccordionList';
import NoResult from '@components/common/ResultMessage/NoResult';
import Paging from '@components/common/Paging/Paging';
import { useWishlistStore } from '@store/useWishlistStore';
import {
  ContentWrapper,
  InfoWrapper,
  PageContainer,
  StyledText,
} from './Page.styles';

/**
 * 내가 찜한 책 페이지
 */
const WishListPage = () => {
  const { wishlist } = useWishlistStore();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage = 10;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <PageSection title="내가 찜한 책">
          <InfoWrapper>
            <StyledText variant="caption">찜한 책</StyledText>
            <Text variant="caption">총&nbsp;</Text>
            <Text variant="caption" color={colors.primary}>
              {wishlist.length}
            </Text>
            <Text variant="caption">건</Text>
          </InfoWrapper>
        </PageSection>
        {wishlist.length === 0 ? (
          <NoResult message={'찜한 책이 없습니다.'} />
        ) : (
          <>
            <BookAccordionList
              books={wishlist.slice(
                (currentPage - 1) * booksPerPage,
                currentPage * booksPerPage
              )}
            />
            <Paging
              currentPage={currentPage}
              totalPages={Math.ceil(wishlist.length / 10)}
              onPageChange={handleChangePage}
            />
          </>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default WishListPage;
