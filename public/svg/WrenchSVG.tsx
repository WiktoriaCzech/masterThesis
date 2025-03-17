import * as React from "react";
import { IconSVGProps } from "@/types";

const WrenchSVG = ({
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
      d="M13.06 4.027a11.057 11.057 0 0 1 12.75 12.89c-.214 1.173.014 2.2.617 2.802l9.567 9.568a4.744 4.744 0 0 1-6.706 6.707l-9.567-9.567c-.602-.601-1.631-.831-2.802-.618a11.057 11.057 0 0 1-12.89-12.75 2.57 2.57 0 0 1 1.983-2.107c.928-.212 1.948.069 2.681.802l4.375 4.373a.338.338 0 0 0 .467 0l2.592-2.592a.339.339 0 0 0 0-.467l-4.37-4.375a2.904 2.904 0 0 1-.803-2.68 2.567 2.567 0 0 1 2.105-1.986Z"
    />
  </svg>
);
export default WrenchSVG;
