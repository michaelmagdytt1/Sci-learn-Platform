import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('appTheme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;
    // بنمسح الكلاسين الأول وبعدين نضيف الكلاس الصح عشان ميعلقش أبداً
    root.classList.remove('dark', 'theme-light');
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.add('theme-light');
    }
    localStorage.setItem('appTheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);