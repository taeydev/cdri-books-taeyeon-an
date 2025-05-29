import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/designSystem';

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 16px 16px 16px 48px;
  border-bottom: 1px solid ${colors.ui.borderStrong};
`;

const SkeletonBlock = styled.div<{
  width: string;
  height: string;
  marginRight?: string;
}>`
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : '')};
  animation: ${shimmer} 1.2s infinite linear;
  background-image: linear-gradient(
    to right,
    #e0e0e0 0%,
    #f0f0f0 20%,
    #e0e0e0 40%,
    #e0e0e0 100%
  );
  background-size: 800px 100%;
`;

const PriceArea = styled.div`
  display: flex;
  width: 20%;
  justify-content: flex-end;
`;

const ButtonArea = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
  justify-content: flex-end;
`;

const SkeletonItem = () => {
  return (
    <SkeletonWrapper>
      <SkeletonBlock width="48px" height="68px" marginRight="48px" />{' '}
      {/* 썸네일 */}
      <SkeletonBlock width="40%" height="22px" /> {/* 제목 */}
      <PriceArea>
        <SkeletonBlock width="100px" height="22px" /> {/* 저자 */}
      </PriceArea>
      <ButtonArea>
        <SkeletonBlock width="115px" height="48px" /> {/* 버튼 영역 */}
        <SkeletonBlock width="115px" height="48px" /> {/* 버튼 영역 */}
      </ButtonArea>
    </SkeletonWrapper>
  );
};

/**
 * 도서 목록 스켈레톤 UI
 */
const BookAccordionSkeletonList = ({ count = 10 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <SkeletonItem key={idx} />
      ))}
    </>
  );
};

export default BookAccordionSkeletonList;
