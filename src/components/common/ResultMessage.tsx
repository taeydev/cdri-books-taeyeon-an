import styled from '@emotion/styled';
import Text from '@components/common/Text';
import { colors } from '@styles/designSystem';

const CommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 117px;
`;

const Message = styled(Text)`
  margin-top: 24px;
`;

/**
 * 결과 메세지 컴포넌트
 */
const ResultMessage = ({
  icon,
  message,
}: {
  icon: React.ReactNode;
  message: string;
}) => {
  return (
    <CommonContainer>
      {icon}
      <Message variant="caption" color={colors.text.secondary}>
        {message}
      </Message>
    </CommonContainer>
  );
};

export default ResultMessage;
