interface IconProps {
  width: number;
  height: number;
}

const ChevronsLeftIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M297.2,478l20.7-21.6L108.7,256L317.9,55.6L297.2,34L65.5,256L297.2,478z M194.1,256L425.8,34l20.7,21.6L237.3,256  l209.2,200.4L425.8,478L194.1,256z" />
    </svg>
  );
};

export default ChevronsLeftIcon;
