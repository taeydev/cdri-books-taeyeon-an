import styled from '@emotion/styled';
import Text from '@components/common/Text';
import PageSection from '@layouts/PageSection';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
`;

const ContentWrapper = styled.div`
  width: 960px;
`;

/**
 * 내가 찜한 책 페이지
 */
const WishListPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <PageSection title="내가 찜한 책">
          <Text variant="caption">찜한 책</Text>
        </PageSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default WishListPage;
