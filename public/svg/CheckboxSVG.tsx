import * as React from "react";
import { IconSVGProps } from "@/types";

const CheckboxSVG = ({
  width = 41,
  height = 43,
  color = "#134B73",
  ...props
}: IconSVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 41 43"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.438}
      d="m15.375 19.74 5.125 5.156 13.667-13.75"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.438}
      d="M34.167 21.458v10.313c0 .912-.36 1.786-1 2.43a3.406 3.406 0 0 1-2.417 1.007h-20.5a3.406 3.406 0 0 1-2.416-1.006c-.64-.645-1-1.52-1-2.431V11.146c0-.912.36-1.786 1-2.43a3.406 3.406 0 0 1 2.416-1.008h15.375"
    />
  </svg>
);
export default CheckboxSVG;
