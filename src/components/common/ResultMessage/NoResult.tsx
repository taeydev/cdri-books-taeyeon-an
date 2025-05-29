import Image from '@components/common/Image/Image';
import bookIcon from '@assets/icons/ic_book.svg';
import ResultMessage from './ResultMessage';

interface NoResultProps {
  message: string;
}

/**
 * 결과 없음 컴포넌트
 */
const NoResult = ({ message }: NoResultProps) => {
  return (
    <ResultMessage
      icon={<Image src={bookIcon} alt="book icon" width={80} height={80} />}
      message={message}
    />
  );
};

export default NoResult;
