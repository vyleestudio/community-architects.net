import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import { ScrollRestoration } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";

// CSS
import './styles/menu.css';
import './styles/header.css';
import './styles/footer.css';

// Loading
import Loading from './components/loading';

function App(props) {
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
        <div className="outlet" id="skip">
          <Suspense fallback={<Loading />}>
            <Outlet context={[theme, toggleTheme]} />
            {/* Footer */}
            {props.children}
          </Suspense>
        </div>
      <ScrollRestoration />
    </>
  );
}

export default App;