import { MenuType } from "@/types/types";
import { MenuIcon } from "lucide-react";

const Menu = ({ setToggle, toggle }: MenuType) => {
  return (
    <div className="lg:hidden ml-4">
      <button
        onClick={() => setToggle(!toggle)}
        className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-card"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Menu;
