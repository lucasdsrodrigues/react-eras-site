import React, { useEffect, useState } from "react";
import "./darkmodetoggle.css";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="dark-mode-container">
      <button 
        className={`theme-swift-toggle ${isDark ? "active" : ""}`} 
        onClick={() => setIsDark(!isDark)}
        aria-label="Mudar Era"
      >
        <div className="toggle-track">
          <div className="toggle-moon-sun">
            <div className="crater"></div>
          </div>
          <div className="star star-1"></div>
          <div className="star star-2"></div>
        </div>
      </button>
    </div>
  );
};

export default DarkModeToggle;