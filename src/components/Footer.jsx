import config from '../config.json';
import { Logo } from './Symbols';
import { Link } from 'react-router-dom';

import DiscordIcon from '../assets/social-icons/discord.svg';
import TwitterIcon from '../assets/social-icons/twitter.svg';
import GitHubIcon from '../assets/social-icons/github.svg';
import YouTubeIcon from '../assets/social-icons/youtube.svg';
import LinkedInIcon from '../assets/social-icons/linkedin.svg';

function Footer() {
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
            <img alt='Discord' src={DiscordIcon} className='social-icon' />
          </a>
          <a title='Twitter' href="https://twitter.com/cmty_architects" target="_blank" rel='noreferrer'>
            <img alt='Twitter' src={TwitterIcon} className='social-icon' />
          </a>
          <a title='GitHub' href="https://github.com/communityarchitects" target="_blank" rel='noreferrer'>
            <img alt='GitHub' src={GitHubIcon} className='social-icon' />
          </a>
          <a title='YouTube' href="https://www.youtube.com/@cmty_architects" target="_blank" rel='noreferrer'>
            <img alt='YouTube' src={YouTubeIcon} className='social-icon' />
          </a>
          <a title='LinkedIn' href="https://www.linkedin.com/company/communityarchitects/" target="_blank" rel='noreferrer'>
            <img alt='LinkedIn' src={LinkedInIcon} className='social-icon' />
          </a>
        </div>
      </footer >
    </div >
  );
}

export default Footer;