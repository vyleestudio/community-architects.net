import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from './components/Footer';
import { ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
// CSS
import './styles/menu.css';
import './styles/header.css';
import './styles/footer.css';

function App() {
  /* System Theme (disabled) */
  /* const systemTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'; */

  /* Get theme */
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') /* || systemTheme */ || 'dark'
  );
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    const themes = ['dark', 'light'];
    localStorage.setItem('theme', theme);
    document.body.className = themes.includes(theme) ? theme : 'dark';
  }, [theme]);
  return (
    <>
      <Menu theme={theme} toggleTheme={toggleTheme} />
      <div className="outlet">
        <Outlet context={[theme, toggleTheme]} />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;