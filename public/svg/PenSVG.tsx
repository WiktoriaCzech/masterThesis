import * as React from "react";
import { IconSVGProps } from "@/types";

const PenSVG = ({
  width = 42,
  height = 42,
  color = "#134B73",
  ...props
}: IconSVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 42 42"
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillOpacity={0.9}
      d="M35.595 12.85c-.584.584-1.151 1.152-1.168 1.719-.052.55.532 1.117 1.082 1.65.825.859 1.633 1.633 1.599 2.475-.035.842-.911 1.718-1.788 2.578l-7.098 7.115-2.44-2.44 7.304-7.288-1.65-1.65-2.44 2.424-6.446-6.446 6.6-6.582c.67-.67 1.788-.67 2.423 0l4.022 4.022c.67.635.67 1.753 0 2.423ZM5.156 30.398 21.587 13.95l6.446 6.445-16.431 16.449H5.156v-6.446Z"
    />
  </svg>
);
export default PenSVG;
