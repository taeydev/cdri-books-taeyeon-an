import React, { useState } from 'react';
import Button from '@components/common/Button/Button';
import Text from '@components/common/Text/Text';
import { colors } from '@styles/designSystem';
import { useWishlistStore } from '@store/useWishlistStore';
import type { Book } from 'models/Book';
import arrowUpIcon from '@assets/icons/ic_arrow_up.svg';
import arrowDownIcon from '@assets/icons/ic_arrow_down.svg';
import likeIcon from '@assets/icons/ic_like.svg';
import likeFilledIcon from '@assets/icons/ic_like_fill.svg';
import {
  AccordionContentWrapper,
  AccordionWrapper,
  ArrowImage,
  Author,
  BigFallback,
  BigThumbnail,
  ButtonArea,
  ButtonWithArrow,
  Content,
  ContentButtonArea,
  ContentTitle,
  ContentTitleArea,
  DetailArea,
  DetailBox,
  DisplayPrice,
  LikeIcon,
  MiniFallback,
  MiniThumbnail,
  Poster,
  Price,
  PurchaseArea,
  PurchaseButton,
  StyledOriginPrice,
  Title,
  TitleArea,
} from './BookAccordionItem.styles';

interface BookAccordionItemProps {
  book: Book;
  onClickWish: (item: Book) => void;
}

interface AccordionViewProps extends BookAccordionItemProps {
  isWished: boolean;
  onToggle: () => void;
}

/**
 * 접힌 상태 UI
 */
const CollapsedView = ({
  book,
  isWished,
  onClickWish,
  onToggle,
}: AccordionViewProps) => {
  return (
    <AccordionWrapper>
      <Poster>
        {book.thumbnail ? (
          <MiniThumbnail
            src={book.thumbnail}
            alt={'thumbnail'}
            width={48}
            height={68}
          />
        ) : (
          <MiniFallback width={48} height={68} />
        )}
        <LikeIcon
          imgSrc={isWished ? likeFilledIcon : likeIcon}
          imgAlt={'like icon'}
          imgWidth={16}
          imgHeight={16}
          onClick={() => onClickWish(book)}
        />
      </Poster>
      <TitleArea>
        <Title variant={'title3'}>{book.title}</Title>
        <Author variant={'body2'} color={colors.text.secondary}>
          {book.authors.join(', ')}
        </Author>
      </TitleArea>
      <Price variant={'title3'}>
        {book.salePrice !== -1 ? book.salePrice : book.price}원
      </Price>
      <ButtonArea>
        <Button
          variant={'primary'}
          onClick={() => {
            window.open(book.url, '_blank', 'noopener,noreferrer');
          }}
        >
          구매하기
        </Button>
        <ButtonWithArrow variant={'secondary'} onClick={onToggle}>
          상세보기
          <ArrowImage src={arrowDownIcon} alt="arrow" width={14} height={8} />
        </ButtonWithArrow>
      </ButtonArea>
    </AccordionWrapper>
  );
};

/**
 * 펼쳐진 상태 UI
 */
const ExpandedView = ({
  book,
  isWished,
  onClickWish,
  onToggle,
}: AccordionViewProps) => {
  return (
    <AccordionContentWrapper>
      <Poster>
        {book.thumbnail ? (
          <BigThumbnail
            src={book.thumbnail}
            alt={'thumbnail'}
            width={210}
            height={280}
          />
        ) : (
          <BigFallback width={210} height={280} />
        )}
        <LikeIcon
          isBigThumbnail
          imgSrc={isWished ? likeFilledIcon : likeIcon}
          imgAlt={'like icon'}
          imgWidth={24}
          imgHeight={24}
          onClick={() => onClickWish(book)}
        />
      </Poster>
      <DetailArea>
        <DetailBox>
          <ContentTitleArea>
            <Title variant={'title3'}>{book.title}</Title>
            <Author variant={'body2'} color={colors.text.secondary}>
              {book.authors.join(', ')}
            </Author>
          </ContentTitleArea>
          <ContentButtonArea>
            <ButtonWithArrow variant={'secondary'} onClick={onToggle}>
              상세보기
              <ArrowImage src={arrowUpIcon} alt="arrow" width={14} height={8} />
            </ButtonWithArrow>
          </ContentButtonArea>
        </DetailBox>
        <ContentTitle variant={'body2Bold'}>책 소개</ContentTitle>
        <DetailBox>
          <Content>{book.contents}</Content>
          <PurchaseArea>
            <DisplayPrice>
              <Text variant={'small'} color={colors.text.tertiary}>
                원가
              </Text>
              <StyledOriginPrice
                isDiscounted={book.salePrice !== -1}
                variant={'title3'}
              >
                {book.price}원
              </StyledOriginPrice>
            </DisplayPrice>
            {book.salePrice !== -1 && (
              <DisplayPrice>
                <Text variant={'small'} color={colors.text.tertiary}>
                  할인가
                </Text>
                <Title variant={'title3'}>{book.salePrice}원</Title>
              </DisplayPrice>
            )}
            <PurchaseButton
              variant={'primary'}
              size={'large'}
              onClick={() => {
                window.open(book.url, '_blank', 'noopener,noreferrer');
              }}
            >
              구매하기
            </PurchaseButton>
          </PurchaseArea>
        </DetailBox>
      </DetailArea>
    </AccordionContentWrapper>
  );
};

/**
 * 도서목록 아코디언 아이템 컴포넌트
 */
const BookAccordionItem = ({ book, onClickWish }: BookAccordionItemProps) => {
  const isWished = useWishlistStore((state) => state.isWished(book.isbn));

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      {!isOpen ? (
        <CollapsedView
          book={book}
          isWished={isWished}
          onClickWish={onClickWish}
          onToggle={toggleOpen}
        />
      ) : (
        <ExpandedView
          book={book}
          isWished={isWished}
          onClickWish={onClickWish}
          onToggle={toggleOpen}
        />
      )}
    </>
  );
};

export default React.memo(BookAccordionItem);
