"use client";

import colors from "@/data/mock-colors";
import { Color, Theme, ThemeContextType } from "@/types/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [color, setColor] = useState<Color>("indigo");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty("--primary", colors[color].primary);
    root.style.setProperty("--primary-light", colors[color].light);
    root.style.setProperty("--primary-dark", colors[color].dark);
  }, [color]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeProvider;
