import navItems from "@/data/mock-navigation";
import { Link } from "react-scroll";

const DesktopNavigation = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="cursor-pointer relative px-3 py-2 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:text-primary hover:bg-card"
              activeClass="bg-primary  text-white font-bold rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>{" "}
    </>
  );
};

export default DesktopNavigation;
