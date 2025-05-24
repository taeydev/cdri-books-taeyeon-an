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
 * 도서 검색 페이지
 */
const SearchPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <PageSection title="도서 검색">
          <Text variant="caption">도서 검색 결과</Text>
        </PageSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default SearchPage;
