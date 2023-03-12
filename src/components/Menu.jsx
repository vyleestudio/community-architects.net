import { Link, NavLink } from 'react-router-dom';
import { Expand, Logo, ToggleDark, ToggleLight } from './Symbols';
import config from '../config.json';

// Symbols
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

const links = [
  {
    name: "Content",
    destination: "content",
  },
  {
    name: "Applications",
    destination: "applications"
  },
  {
    name: "Appeals",
    destination: config.appealsInviteURL,
    ext: true
  }
];

const activeClassName = 'active';
const MenuItems = ({ fn }) => {
  const mappedLinks = links.map(i => (
    i.ext ?
      <li role='none' key={i.name}>
        <a href={i.destination} rel="noreferrer" target="_blank" role='menuitem'>
          {i.name}
        </a>
      </li>
      :
      <li role='none' key={i.name}>
        <NavLink onClick={fn} to={i.destination} role='menuitem' className={({ isActive }) => isActive ? activeClassName : undefined}>
          {i.name}
        </NavLink>
      </li>
  ));
  return (<>{mappedLinks}</>);
}

const MenuNav = ({ fn }) => {
  return (
    <nav id='nav-desktop' role='navigation' aria-label="Main">
      <ul role='menubar' aria-label="Main">
        <li role='none'>
          <NavLink onClick={fn} to="/" end role='menuitem' className={({ isActive }) => isActive ? activeClassName : undefined}>
            Home
          </NavLink>
        </li>
        <MenuItems fn={fn} />
      </ul>
    </nav>
  )
}

function Menu({ theme, toggleTheme }) {
  const [menuVisible, setMenu] = useState(false),
    menuBar = useRef(),
    menuToggle = useRef(),
    openClassName = "open",
    closedClassName = "closed",
    hideMenu = () => {
      if (getComputedStyle(menuToggle.current).display === "none") return;
      /* Return on desktop */

      setMenu(false)
      menuBar.current.style.display = "none";
      menuToggle.current.classList.remove(openClassName);
      menuToggle.current.classList.add(closedClassName);
    },
    showMenu = () => {
      if (getComputedStyle(menuToggle.current).display === "none") return;
      /* Return on desktop */

      setMenu(true)
      menuToggle.current.classList.remove(closedClassName);
      menuToggle.current.classList.add(openClassName);
      menuBar.current.style.display = "flex";
    },
    toggleMenu = () => {
      menuVisible ? hideMenu() : showMenu();
    };

  return (
    <>
      <Helmet>
        {/* Adjust theme color to theme */}
        {theme === 'dark' ?
          <meta name="theme-color" content="#242538" />
          :
          <meta name="theme-color" content="#8CE1BD" />
        }
      </Helmet>
      <div className='menu-wrapper'>
        <div className='menu' >
          {/* Mobile Menu Toggle */}
          <div ref={menuToggle} className='togglemenu'>
            <Expand onClick={toggleMenu} />
          </div>
          {/* Logo */}
          <div className='menu-branding'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          {/* Menu */}
          <div ref={menuBar} className='menubar-desktop'>
            <MenuNav fn={hideMenu} />
            <div onClick={toggleTheme} title="Toggle Theme" role='button' className='toggletheme'>
              {theme === 'dark' ? <ToggleLight /> : <ToggleDark />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;