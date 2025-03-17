import * as React from "react";
import { IconSVGProps } from "@/types";

const DangerSVG = ({
  width = 41,
  height = 38,
  color = "#134B73",
  ...props
}: IconSVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 41 38"
    {...props}
  >
    <path
      fill={color}
      d="m26.217 3.918 13.681 22.787c1.966 3.273 1 7.579-2.158 9.616a6.533 6.533 0 0 1-3.559 1.054H6.817c-3.718 0-6.734-3.124-6.734-6.98 0-1.305.354-2.581 1.017-3.69L14.784 3.918C16.747.645 20.9-.357 24.059 1.68a6.855 6.855 0 0 1 2.158 2.238ZM20.5 29.208a2.042 2.042 0 1 0 0-4.084 2.042 2.042 0 0 0 0 4.084Zm0-18.375a2.042 2.042 0 0 0-2.041 2.042v8.166a2.042 2.042 0 1 0 4.083 0v-8.166a2.042 2.042 0 0 0-2.042-2.042Z"
    />
  </svg>
);
export default DangerSVG;
