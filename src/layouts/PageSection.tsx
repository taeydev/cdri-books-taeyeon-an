import styled from '@emotion/styled';
import Text from '@components/common/Text';

interface PageSectionProps {
  title: string;
  subElement?: React.ReactNode;
  children: React.ReactNode;
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const SubElementWrapper = styled.div`
  margin-top: 25px;
`;

const ContentWrapper = styled.div`
  margin-top: 25px;
`;

/**
 * 공통 페이지 Section 컴포넌트
 */
const PageSection = ({ title, subElement, children }: PageSectionProps) => {
  return (
    <Section>
      <Text as="h2" variant="title2">
        {title}
      </Text>
      {subElement && <SubElementWrapper>{subElement}</SubElementWrapper>}
      <ContentWrapper>{children}</ContentWrapper>
    </Section>
  );
};

export default PageSection;
