import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';
import { PrimaryButton, ContentBlock } from '../components/Elements';
import Header from '../components/Header';

import OpportunitiesDark from '../assets/illustrations/opportunities-dark.svg';
import OpportunitiesLight from '../assets/illustrations/opportunities-light.svg';
import HelpdeskDark from '../assets/illustrations/helpdesk-dark.svg';
import HelpdeskLight from '../assets/illustrations/helpdesk-light.svg';
import CampDark from '../assets/illustrations/camp-dark.svg';
import CampLight from '../assets/illustrations/camp-light.svg';
import ShowcaseDark from '../assets/illustrations/showcase-dark.svg';
import ShowcaseLight from '../assets/illustrations/showcase-light.svg';
import PodiumDark from '../assets/illustrations/podium-dark.svg';
import PodiumLight from '../assets/illustrations/podium-light.svg';

function Home() {
  const [theme] = useOutletContext();
  return (
    <>
      <Helmet>
        <title>Community Architects</title>
        <link rel="canonical" href="https://community-architects.net" />
      </Helmet>
      <Header>
        <div>
          <h1>Community Architects</h1>
          <p>Unite with fellow community leaders to share our biggest passion: Building communities on Discord. We offer several great opportunities for Discord users, both experienced and new, to share ideas, exchange advice, receive feedback, collaborate, and create impactful communities.</p>
        </div>
      </Header>
      <main>

        <ContentBlock animate>
          <div className='contentblock-text'>
            <h2>Offer or receive services</h2>
            <p>
              Share your latest projects, get feedback from other community managers,
              and find inspiration from the work of others!
            </p>
            {/* 
            <div className='contentblock-actions'>
              <PrimaryButton text="Visit Content" destination="content" arrow />
            </div>
             */}
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              OpportunitiesDark : OpportunitiesLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate r>
          <div className='contentblock-text'>
            <h2>Collaborate with leaders</h2>
            <p>
              If you need specific feedback or advice on anything community related,
              check out the Helpdesk Forums!
            </p>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              HelpdeskDark : HelpdeskLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate>
          <div className='contentblock-text'>
            <h2>Share your highlights</h2>
            <p>
              Join our Campfire Chat and allow yourself to reflect on your own community.
              Learn from other community leaders' experiences!
            </p>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              CampDark : CampLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate r>
          <div className='contentblock-text'>
            <h2>Showcase your work</h2>
            <p>
              Share your latest projects, get feedback from other community managers,
              and find inspiration from the work of others!
            </p>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              ShowcaseDark : ShowcaseLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate l>
          <div className='contentblock-text'>
            <h2>Learn from pros</h2>
            <p>
              Our team regularly hosts events, featuring special speakers,
              discussing various aspects of community management!
            </p>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              PodiumDark : PodiumLight}
            />
          </div>
        </ContentBlock>

        <div className='supportblock'>
          <h2>Are you interested in supporting our work?</h2>
          <p>
            Check out our Ko-Fi page! You can directly help us with financially
            compensating our developers, content editors, and managers for their hard work. Thanks!
          </p>
          <div className='supportblock-actions'>
            <PrimaryButton text="Donate" border ext destination="https://ko-fi.com/communityarchitects" arrow />
          </div>
        </div>

      </main>
    </>
  );
}

export default Home;