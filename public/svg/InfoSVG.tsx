import * as React from "react"
import { IconSVGProps } from "@/types";

const InfoSVG = ({
  width = 37,
  height = 37,
  color = "#000000",
  ...props
}: IconSVGProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 37 37"
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M18.5 0C8.283 0 0 8.283 0 18.5S8.283 37 18.5 37 37 28.717 37 18.5 28.717 0 18.5 0Zm-.84 8.41a1.682 1.682 0 1 0 0 3.363h.84a1.682 1.682 0 0 0 0-3.364h-.84Zm-2.524 6.726a1.682 1.682 0 1 0 0 3.364h1.682v5.046h-1.682a1.682 1.682 0 1 0 0 3.363h6.728a1.682 1.682 0 1 0 0-3.363h-1.682v-6.728a1.682 1.682 0 0 0-1.682-1.682h-3.364Z"
      clipRule="evenodd"
    />
  </svg>
)
export default InfoSVG
