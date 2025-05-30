interface IconProps {
  width: number;
  height: number;
  color?: string;
}

/**
 * 에러 표시 아이콘
 */
const ErrorIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default ErrorIcon;
