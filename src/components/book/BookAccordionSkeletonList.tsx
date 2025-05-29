import {
  ButtonArea,
  PriceArea,
  SkeletonBlock,
  SkeletonWrapper,
} from './BookAccordionSkeletonList.styles';

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
