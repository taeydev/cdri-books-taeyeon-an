import { PageTitle, Section, SubElementWrapper } from './PageSection.styles';

interface PageSectionProps {
  title: string;
  subElement?: React.ReactNode;
  children: React.ReactNode;
}

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
