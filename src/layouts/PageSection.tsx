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
  margin-bottom: 36px;
`;

const PageTitle = styled(Text)`
  margin: 0;
  margin-bottom: 25px;
`;

const SubElementWrapper = styled.div`
  margin-bottom: 25px;
`;

/**
 * 공통 페이지 Section 컴포넌트
 */
const PageSection = ({ title, subElement, children }: PageSectionProps) => {
  return (
    <Section>
      <PageTitle as="h2" variant="title2">
        {title}
      </PageTitle>
      {subElement && <SubElementWrapper>{subElement}</SubElementWrapper>}
      <div>{children}</div>
    </Section>
  );
};

export default PageSection;
