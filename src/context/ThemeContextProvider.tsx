import { ReactNode, createContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (data: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState((initialTheme: string) => {
    const storadStateAsJSON = localStorage.getItem(
      "@landing-page-vitor:theme-state-1.0.0"
    );

    if (storadStateAsJSON) {
      return JSON.parse(storadStateAsJSON);
    }
    return "dark";
  });

  useEffect(() => {
    const themeJSON = JSON.stringify(theme);

    localStorage.getItem("");
    localStorage.setItem("@landing-page-vitor:theme-state-1.0.0", themeJSON);

    document.documentElement.classList.add(theme);
  }, [theme]);

  function onSetTheme(newTheme: string) {
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);

    document.documentElement.classList.add(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: onSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
