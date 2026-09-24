import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SunDim, Moon } from "lucide-react";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav>

      {/* Website name */}
      <h2>PORTFOLIO</h2>

      {/* Navigation links */}
      <div className="nav-links">

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/skills">
          Skills
        </NavLink>

        <NavLink to="/projects">
          Projects
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        {/* iPhone-style theme slider */}
        <div className="theme-slider">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-toggle-knob">
              {isDark ? (
                <Moon size={15} strokeWidth={2.5} />
              ) : (
                <SunDim size={15} strokeWidth={2.5} />
              )}
            </span>
          </button>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;