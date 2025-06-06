import { colors } from '@styles/designSystem';

interface ImageIconProps {
  width: string;
  height: string;
}

/**
 * fallback image에 쓰이는 이미지 아이콘
 */
const ImageIcon = ({ width, height }: ImageIconProps) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <g id="info" />
      <g id="icons">
        <path
          d="M24,6c0-2.2-1.8-4-4-4H4C1.8,2,0,3.8,0,6v12c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V6z M6,6c1.1,0,2,0.9,2,2   c0,1.1-0.9,2-2,2S4,9.1,4,8C4,6.9,4.9,6,6,6z M22,18c0,1.1-0.9,2-2,2H4.4c-0.9,0-1.3-1.1-0.7-1.7l3.6-3.6c0.4-0.4,1-0.4,1.4,0   l0.6,0.6c0.4,0.4,1,0.4,1.4,0l6.6-6.6c0.4-0.4,1-0.4,1.4,0l3,3c0.2,0.2,0.3,0.4,0.3,0.7V18z"
          id="pic"
          fill={colors.ui.border}
        />
      </g>
    </svg>
  );
};

export default ImageIcon;
