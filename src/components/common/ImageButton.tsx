import styled from '@emotion/styled';
import Image from '@components/common/Image';

const StyledImageButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ImageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  imgSrc: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
}

/**
 * 공통 이미지버튼 컴포넌트
 */
const ImageButton = ({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  ...buttonProps
}: ImageButtonProps) => {
  return (
    <StyledImageButton {...buttonProps}>
      <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
    </StyledImageButton>
  );
};

export default ImageButton;
