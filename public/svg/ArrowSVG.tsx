import * as React from "react"
import { IconSVGProps } from "@/types";

const ArrowSVG = ({
  width = 32,
  height = 25,
  color = "#fff",
  transform = "rotate(0, 16, 12.5)",
  ...props
}: IconSVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 25"
    fill="none"
    {...props}
  >
    <g transform={transform}>
      <path
        d="M30.392 14.31a2.562 2.562 0 0 0 0-3.62l-9.663-9.668a2.563 2.563 0 1 0-3.625 3.625l5.29 5.29H2.687a2.562 2.562 0 1 0 0 5.126h19.705l-5.289 5.289a2.563 2.563 0 1 0 3.625 3.625l9.663-9.666Z"
        fill={color}
      />
    </g>
  </svg>
)
export default ArrowSVG
