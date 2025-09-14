import React, { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");
  const root = document.querySelector("html").classList;
  useEffect(() => {
    if (theme === "dark") {
      root.remove("light");
      root.add("dark");
    } else {
      root.remove("dark");
      root.add("light");
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return { theme, setTheme };
}

export default useTheme;
