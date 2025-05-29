import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@components/common/Button/Button';
import Text from '@components/common/Text/Text';
import Image from '@components/common/Image/Image';
import ImageButton from '@components/common/Button/ImageButton';
import { colors, typographyStyle } from '@styles/designSystem';
import FallbackThumbnail from './FallbackThumbnail';

export const AccordionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 16px;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.ui.borderStrong};
  background-color: ${colors.white};
`;

export const Poster = styled.div`
  position: relative;
`;

export const MiniThumbnail = styled(Image)`
  margin-left: 32px;
  margin-right: 48px;
`;

export const MiniFallback = styled(FallbackThumbnail)`
  margin-left: 32px;
  margin-right: 48px;
`;

export const LikeIcon = styled(ImageButton)<{ isBigThumbnail?: boolean }>`
  position: absolute;
  top: ${({ isBigThumbnail = false }) => (isBigThumbnail ? '8px' : 0)};
  right: ${({ isBigThumbnail = false }) => (isBigThumbnail ? '8px' : '48px')};
`;

export const TitleArea = styled.div`
  display: flex;
  width: 408px;
  align-items: center;
  gap: 16px;
`;

export const Title = styled(Text)`
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Author = styled(Text)`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Price = styled(Text)`
  display: flex;
  margin-left: auto;
  margin-right: 56px;
`;

export const ButtonArea = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 8px;
`;

export const ButtonWithArrow = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowImage = styled(Image)`
  margin-left: 5px;
`;

export const AccordionContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 344px;
  padding: 24px 16px 40px;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.ui.borderStrong};
  background-color: ${colors.white};
`;

export const BigThumbnail = styled(Image)`
  margin-left: 34px;
`;

export const BigFallback = styled(FallbackThumbnail)`
  margin-left: 34px;
`;

export const DetailArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 280px;
  flex: 1;
  margin-left: 32px;
  box-sizing: border-box;
`;

export const ContentTitleArea = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  height: 26px;
  align-items: center;
  gap: 16px;
`;

export const ContentTitle = styled(Text)`
  height: 26px;
  margin-top: 16px;
  margin-bottom: 12px;
`;

export const ContentButtonArea = styled.div`
  margin-left: auto;
  margin-top: 2px;
`;

export const DetailBox = styled.div`
  display: flex;
`;

export const Content = styled.p`
  width: 360px;
  height: 180px;
  overflow: hidden;
  margin: 0 48px 0 0;
  padding: 0;
  ${typographyStyle('small')};
  line-height: 16px;
  white-space: pre-line;
`;

export const PurchaseArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: auto;
`;

export const DisplayPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 121px;
  height: 26px;
  margin-top: 8px;
  gap: 8px;
`;

export const StyledOriginPrice = styled(Text)<{ isDiscounted: boolean }>`
  ${({ isDiscounted }) =>
    isDiscounted
      ? css`
          font-size: 18px;
          font-weight: 300;
          text-decoration: line-through;
        `
      : typographyStyle('title3')};
`;

export const PurchaseButton = styled(Button)`
  margin-top: 28px;
`;
