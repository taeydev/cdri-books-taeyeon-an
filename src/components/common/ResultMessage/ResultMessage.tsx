import { colors } from '@styles/designSystem';
import { CommonContainer, Message } from './ResultMessage.styles';

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
