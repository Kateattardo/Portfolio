import { useTheme } from "./ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggleButton;
