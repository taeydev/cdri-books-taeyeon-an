interface IconProps {
  width: number;
  height: number;
}

const ChevronLeftIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      viewBox="0 0 512 512"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="150.46 478 129.86 456.5 339.11 256 129.86 55.49 150.46 34 382.14 256 150.46 478"
        transform="scale(-1, 1) translate(-512, 0)"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
