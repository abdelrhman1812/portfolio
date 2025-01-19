"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { Link } from "react-scroll";
import DesktopNavigation from "./DesktopNavigation";
import Menu from "./Menu";
import NavMobile from "./NavMobile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 py-3 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-muted">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="text-xl font-bold text-primary cursor-pointer"
            >
              Portfolio
            </Link>
          </div>

          <DesktopNavigation />

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center">
            <ThemeToggle setTheme={setTheme} theme={theme} />
            <Menu setToggle={setToggle} toggle={toggle} />
          </div>
        </div>
      </div>

      <NavMobile toggle={toggle} />
    </nav>
  );
}
