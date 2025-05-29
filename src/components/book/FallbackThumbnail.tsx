import ImageIcon from '@components/icon/ImageIcon';
import styled from '@emotion/styled';
import { colors } from '@styles/designSystem';

const ImageWrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.ui.surface};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

interface FallbackThumbnailProps {
  width: number;
  height: number;
  className?: string;
}

/**
 * 도서 fallback thumbnail 이미지
 */
const FallbackThumbnail = ({
  width,
  height,
  className,
}: FallbackThumbnailProps) => {
  return (
    <ImageWrapper width={width} height={height} className={className}>
      <ImageIcon width={'40%'} height={'30%'} />
    </ImageWrapper>
  );
};

export default FallbackThumbnail;
