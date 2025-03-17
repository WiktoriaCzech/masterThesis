import { SVGProps } from "react";

export interface IconSVGProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}
