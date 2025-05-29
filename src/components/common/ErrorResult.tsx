import ErrorIcon from '@components/icon/ErrorIcon';
import ResultMessage from '@components/common/ResultMessage';
import { colors } from '@styles/designSystem';

interface ErrorResultProps {
  message: string;
}

/**
 * 에러 컴포넌트
 */
const ErrorResult = ({ message }: ErrorResultProps) => {
  return (
    <ResultMessage
      icon={<ErrorIcon width={40} height={40} color={colors.text.tertiary} />}
      message={message}
    />
  );
};

export default ErrorResult;
