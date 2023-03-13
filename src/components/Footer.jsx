import config from '../config.json';
import { Logo } from './Symbols';
import { Link } from 'react-router-dom';

function Footer() {
  const DiscordIcon = require('../assets/social-icons/discord.svg').ReactComponent,
    TwitterIcon = require('../assets/social-icons/twitter.svg').ReactComponent,
    GitHubIcon = require('../assets/social-icons/github.svg').ReactComponent,
    YouTubeIcon = require('../assets/social-icons/youtube.svg').ReactComponent,
    LinkedInIcon = require('../assets/social-icons/linkedin.svg').ReactComponent;
  return (
    <div className="footer-wrapper">
      <footer>
        <div className='footer-branding'>
          <Link aria-label='Home' to='/'>
            <Logo />
          </Link>
          <div>
            <span><b>Community Architects</b></span>
            <br />
            <span className='copyright'>© 2020 - {new Date().getFullYear()} All rights reserved</span>
          </div>
        </div>
        <div className='footer-socials'>
          <a title='Discord' href={config.discordInviteURL} target="_blank" rel='noreferrer'>
            <DiscordIcon className='social-icon' />
          </a>
          <a title='Twitter' href="https://twitter.com/cmty_architects" target="_blank" rel='noreferrer'>
            <TwitterIcon className='social-icon' />
          </a>
          <a title='GitHub' href="https://github.com/communityarchitects" target="_blank" rel='noreferrer'>
            <GitHubIcon className='social-icon' />
          </a>
          <a title='YouTube' href="https://www.youtube.com/@cmty_architects" target="_blank" rel='noreferrer'>
            <YouTubeIcon className='social-icon' />
          </a>
          <a title='LinkedIn' href="https://www.linkedin.com/company/communityarchitects/" target="_blank" rel='noreferrer'>
            <LinkedInIcon className='social-icon' />
          </a>
        </div>
      </footer >
    </div >
  );
}

export default Footer;