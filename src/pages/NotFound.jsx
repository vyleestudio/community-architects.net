import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ContentBlock, PrimaryButton } from '../components/Elements';
import Menu from '../components/Menu';

function NotFound() {
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
      <Helmet>
        <title>404 | Community Architects</title>
        {/* Disable indexing */}
        <meta name="robots" content="noindex" />
      </Helmet>
      <Menu theme={theme} toggleTheme={toggleTheme} />
      <main>
        <div className='error-page'>
          <ContentBlock>
            <div className='contentblock-text'>
              <h2>Not Found</h2>
              <p>
                The requested page was not found.
              </p>
              <div className='contentblock-actions'>
                <PrimaryButton text="Home" destination="/" arrow />
              </div>
            </div>
            <div className='contentblock-image'>
              <img alt='' height="200px" src={require('../assets/illustrations/flower.svg').default} />
            </div>
          </ContentBlock>
        </div>
      </main>
    </>
  );
}

export default NotFound;