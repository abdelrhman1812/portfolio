"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ColorChanger from "../components/ColorChanger";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ColorChanger />
      <ToastContainer />
      {children}
    </ThemeProvider>
  );
};
export default Providers;
