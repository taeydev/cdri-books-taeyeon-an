import styled from '@emotion/styled';
import Text from '@components/common/Text/Text';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
`;

export const ContentWrapper = styled.div`
  width: 960px;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AdvancedContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const InfoWrapper = styled.div`
  display: flex;
`;

export const StyledText = styled(Text)`
  margin-right: 16px;
`;
