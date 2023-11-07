import { ThemeProvider } from "./components/Theme";
import { useTheme } from "./components/Theme";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  // const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
