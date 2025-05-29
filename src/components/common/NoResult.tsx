import styled from '@emotion/styled';
import Text from '@components/common/Text';
import Image from '@components/common/Image';
import bookIcon from '@/assets/icons/ic_book.svg';
import { colors } from '@styles/designSystem';

const NoWishedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 117px;
`;

const Message = styled(Text)`
  margin-top: 24px;
`;

interface NoResultProps {
  message: string;
}

/**
 * 결과 없음 컴포넌트
 */
const NoResult = ({ message }: NoResultProps) => {
  return (
    <NoWishedContainer>
      <Image src={bookIcon} alt={'book icon'} width={80} height={80} />
      <Message variant={'caption'} color={colors.text.secondary}>
        {message}
      </Message>
    </NoWishedContainer>
  );
};

export default NoResult;
