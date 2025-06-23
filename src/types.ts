import { SVGProps } from "react";

export interface IconSVGProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export interface PageProps {
  params: { slug: string; lang?: "en" | "pl" };
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

export type SurveyTranslation = {
  thankYouMessage: string;
  timeEstimate: string;
  studyPurpose: string;
  questions: {
    ageCategory: string;
    ageOptions: {
      "18-30": string;
      "30-40": string;
      "40-50": string;
      "50+": string;
    };
    gender: string;
    genderOptions: {
      female: string;
      male: string;
    };
    handedness: string;
    handednessOptions: {
      right: string;
      left: string;
    };
    nameOptional: string;
  };
  privacyTitle: string;
  privacyText: string;
  nextButton: string;
  locales: {
    en: string;
    pl: string;
  };
};

export type OperatorPanelTranslation = {
  questions: {
    [key in PanelTypes]: string;
  };
  popupMessage: string;
  sourceText: string;
  sourceLink: string;
};

export type CarSelectorTranslation = {
  questions: {
    [key in Slug]: string;
  };
  popupMessage: string;
};

export type EnergyTranslation = {
  question: string;
  popupMessage: string;
};

export type RankElements = {
    settings: string;
    music: string;
    battery: string;
    navigation: string;
    phone: string;
    ac: string;
  };

export type QuestionareTranslation = {
  heading: string;
  questions: {
    rankElements: string;
    elements: RankElements;
    layoutPrefer: string;
    layoutOptions: {
      horizontal: string;
      vertical: string;
      grid: string;
    };
    scrollable: string;
    scrollableOptions: {
      yes: string;
      no: string;
    };
    scrollDirection: string;
    scrollDirectionOptions: {
      vertical: string;
      horizontal: string;
    };
  };
};

export type ThankYouTranslation = {
  title: string;
  texts: string[];
};

export type InteractiveTilesTranslation = {
  questionPrefix: string;
  doneMessage: string;
  clearButton: string;
  labels: { [key in keyof Ranks]: string };
};