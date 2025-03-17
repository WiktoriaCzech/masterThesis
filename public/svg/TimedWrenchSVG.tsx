import * as React from "react";
import { IconSVGProps } from "@/types";

const TimedWrenchSVG = ({
  width = 63,
  height = 42,
  color = "#134B73",
  ...props
}: IconSVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 63 42"
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M35.347 4.002a9.966 9.966 0 0 1 4.964.366 10.382 10.382 0 0 1 4.241 2.736 11.112 11.112 0 0 1 2.557 4.488 11.53 11.53 0 0 1 .294 5.223c-.203 1.165.013 2.187.583 2.785l9.045 9.51a4.85 4.85 0 0 1 1.235 3.308 4.837 4.837 0 0 1-1.314 3.275 4.38 4.38 0 0 1-3.115 1.38c-1.17.016-2.3-.45-3.147-1.297l-9.045-9.509c-.568-.598-1.542-.827-2.648-.615a9.967 9.967 0 0 1-4.967-.309 10.37 10.37 0 0 1-4.269-2.688 11.1 11.1 0 0 1-2.603-4.457 11.532 11.532 0 0 1-.349-5.218c.076-.507.296-.978.63-1.351a2.403 2.403 0 0 1 1.245-.744c.878-.21 1.841.069 2.535.798l4.136 4.346c.06.06.139.093.221.093a.312.312 0 0 0 .221-.093l2.45-2.576a.346.346 0 0 0 0-.465l-4.132-4.347a2.92 2.92 0 0 1-.705-1.23 3.031 3.031 0 0 1-.054-1.435c.207-.957.912-1.777 1.99-1.974Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.25 13a9.75 9.75 0 1 0 19.501 0A9.75 9.75 0 0 0 3.25 13Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7.583V13l3.25 3.25"
    />
  </svg>
);
export default TimedWrenchSVG;
