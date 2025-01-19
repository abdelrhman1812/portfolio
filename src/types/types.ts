import { StaticImageData } from "next/image";

/* Type for navigation */
export interface NavigationType {
  name: string;
  href: string;
}

export interface DisplayNav {
  name: string;
  href: string;
}

/* Theme Context Type */

export type Theme = "dark" | "light " | "undefined";
export type Color = "indigo" | "blue" | "green" | "purple" | "pink";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  color: Color;
  setColor: (color: Color) => void;
}

/* Menu Type */

export interface MenuType {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
}

/* Colors Type */

export interface ColorsType {
  [key: string]: {
    primary: string;
    light: string;
    dark: string;
  };
}

/* Info Data Type */

export interface InfoDataType {
  icon: React.ReactElement;
  title: string;
  detail: string;
}

/* Timeline Type */

export interface TimelineType {
  id: number;
  title: string;
  institution: string;
  date: string;
  description: string;
}

/* Skills Type */

export interface SkillsType {
  id: number;
  name: string;
  icon: string;
}

/* Services Type */

export interface ServicesType {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

/* Projects Type */

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  type: string[];
  isLatest?: boolean;
}

/* Form Type */

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export type SendEmailParams = {
  formRef: React.RefObject<HTMLFormElement>;
  formik: {
    resetForm: () => void;
  };
  setIsLoading: (isLoading: boolean) => void;
};
