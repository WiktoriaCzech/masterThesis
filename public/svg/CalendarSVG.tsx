import * as React from "react";
import { IconSVGProps } from "@/types";

const CalendarSVG = ({
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
      d="M36.83 13.996v18.046a4.788 4.788 0 0 1-4.788 4.788H9.207a4.788 4.788 0 0 1-4.788-4.788V13.996H36.83ZM12.877 25.783a1.842 1.842 0 1 0 0 3.684 1.842 1.842 0 0 0 0-3.684Zm7.742 0a1.842 1.842 0 1 0 0 3.684 1.842 1.842 0 0 0 0-3.684Zm-7.742-7.366a1.842 1.842 0 1 0 0 3.683 1.842 1.842 0 0 0 0-3.683Zm7.742 0a1.842 1.842 0 1 0 0 3.683 1.842 1.842 0 0 0 0-3.683Zm7.74 0a1.842 1.842 0 1 0 0 3.683 1.842 1.842 0 0 0 0-3.683ZM32.042 4.42a4.788 4.788 0 0 1 4.788 4.788v2.578H4.42V9.208A4.788 4.788 0 0 1 9.206 4.42h22.835Z"
    />
  </svg>
);
export default CalendarSVG;
