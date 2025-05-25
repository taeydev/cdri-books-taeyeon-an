import styled from '@emotion/styled';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
}

const StyledImg = styled.img<{
  width?: number;
  height?: number;
}>`
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  display: block;
`;

/**
 * 공통 이미지 컴포넌트
 */
const Image = ({ src, alt, width, height, ...props }: ImageProps) => {
  return (
    <StyledImg src={src} alt={alt} width={width} height={height} {...props} />
  );
};

export default Image;
