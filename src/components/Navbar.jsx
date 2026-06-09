import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = ["home", "about", "skills", "projects", "contact"];

  const handleNavClick = (item) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: item } });
    } else {
      const el = document.getElementById(item);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full 
    bg-white/70 dark:bg-black/60 
    backdrop-blur-lg z-50 p-4 
    flex justify-center gap-8 
    border-b border-gray-300 dark:border-white/10 shadow-lg">

      {/* 🔹 Dynamic Nav */}
      {navItems.map((item) =>
        location.pathname === "/" ? (
          <ScrollLink
            key={item}
            to={item}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-blue-500 dark:text-blue-400"
            className="cursor-pointer text-gray-700 dark:text-gray-300 
            hover:text-blue-500 dark:hover:text-blue-400 
            transition font-medium relative group"
          >
            <span>{item.toUpperCase()}</span>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
            bg-blue-500 dark:bg-blue-400 
            transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
        ) : (
          <span
            key={item}
            onClick={() => handleNavClick(item)}
            className="cursor-pointer text-gray-700 dark:text-gray-300 
            hover:text-blue-500 dark:hover:text-blue-400 
            transition font-medium"
          >
            {item.toUpperCase()}
          </span>
        )
      )}

      {/* 🔹 Projects Page */}
      <RouterLink
        to="/projects"
        className="cursor-pointer text-gray-700 dark:text-gray-300 
        hover:text-blue-500 dark:hover:text-blue-400 font-medium"
      >
        ALL PROJECTS
      </RouterLink>

      {/* 🌙 Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="ml-6 px-3 py-1 rounded 
        border border-gray-400 dark:border-white/20 
        bg-gray-100 dark:bg-white/10 
        text-black dark:text-white 
        hover:bg-gray-200 dark:hover:bg-white/20 transition"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}