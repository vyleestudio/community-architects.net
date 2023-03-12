import config from '../config.json';
import { PrimaryButton } from "./Elements";

function Header(props) {
  return (
    <div className='header-wrapper'>
      <header>
        {props.children}
        <div className='header-actions'>
          <PrimaryButton destination={config.discordInviteURL} ext={true} className='blurple' text="Join the Community" arrow /> 
          {props.hideLabel ? '' : <span role='button' onClick={scrollToAnchor} className='action-secondary'>Learn more</span>}
          <div id="scroll-anchor" style={{ height: 0 }}></div>
        </div>
      </header>
    </div>
  );
};

function scrollToAnchor() {
  const element = document.getElementById('scroll-anchor');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default Header;