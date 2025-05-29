import styled from '@emotion/styled';
import Text from '@components/common/Text';
import PageSection from '@layouts/PageSection';
import { useWishlistStore } from '@store/useWishlistStore';
import BookAccordionList from '@components/book/BookAccordionList';
import { colors } from '@styles/designSystem';
import NoResult from '@components/common/NoResult';
import Paging from '@components/common/Paging';
import { useState } from 'react';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
`;

const ContentWrapper = styled.div`
  width: 960px;
`;

const InfoWrapper = styled.div`
  display: flex;
`;

const StyledText = styled(Text)`
  margin-right: 16px;
`;

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
