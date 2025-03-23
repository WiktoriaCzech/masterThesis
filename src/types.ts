import { SVGProps } from "react";

export interface IconSVGProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}


export interface ICardProps {
  content: {
    letter: string;
    name: string;
    description: string;
    issuedDate?: string;
    completedDate?: string;
  };
  details: {
    serviceTime?: string;
    comingServiceDate?: string;
    category?: string;
    maintainerNote: string;
    maintainer?: string;
    priority?: number;
  };
  type: "danger" | "latest" | "commingSoon";
}

export type IExampleData = Omit<ICardProps, 'type'>