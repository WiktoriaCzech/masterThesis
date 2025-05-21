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

export type ViewKey = "current" | "latest" | "maintain";

export interface BuildDataProps {
  issuedDTS: string[];
}

export interface BuildCurrentDataProps extends BuildDataProps {
  timeDifferences: string[];
}
export interface BuildLatestDataProps extends BuildDataProps {
  completedDTS: string[];
  completedTimeDifferences: string[];
}

export type Slug = "step1" | "step2" | "step3" | "step4";
export type PanelTypes = "water-tank" | "house" | "pump";
export type Ranks = Record<
  "settings" | "music" | "battery" | "navigation" | "phone" | "ac",
  string
>;