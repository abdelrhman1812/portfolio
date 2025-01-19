import { Moon, Sun } from "lucide-react";
import { Dispatch } from "react";

interface UseThemeProps {
  theme?: string | undefined;
  setTheme: Dispatch<React.SetStateAction<string>>;
}

const ThemeToggle = ({ theme, setTheme }: UseThemeProps) => {
  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-md text-muted-foreground hover:text-primary"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
