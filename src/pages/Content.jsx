import { Helmet } from 'react-helmet';
import { useLocation, useOutletContext } from 'react-router-dom';
import { PrimaryButton, ContentBlock, Tag } from '../components/Elements';
import Header from '../components/Header';

function Content() {
  const [theme] = useOutletContext(),
    loc = useLocation();
  return (
    <>
      <Helmet>
        <title>Content | Community Architects</title>
        <link rel="canonical" href={`https://community-architects.net${loc.pathname}`} />
      </Helmet>
      <Header>
        <div>
          <h1>Content & Resources</h1>
          <h2>Our staff team at Community Architects regularly hosts interactive events, featuring special speakers, discussing various aspects of community management.</h2>
        </div>
      </Header>
      <main>

        {/* <ContentBlock animate>
          <div className='contentblock-text'>
            <h2>Flokie Interview</h2>
            <p>
              To kick off our new series of creator AMA's, we'll be
              joined by Flokie to learn more about what challenges arise
              when running one of the biggest communities on the platform.
            </p>
            <div className='contentblock-actions'>
              <PrimaryButton text="Watch" ext destination="https://youtube.com" arrow />
            </div>
          </div>
          <div className='contentblock-image'>
            ...
          </div>
        </ContentBlock> */}

        <ContentBlock animate>
          <div className='contentblock-text'>
            <div className='contentblock-tagrow'>
              <h2>Disability Pride</h2>
              <Tag color="green">Communities on Discord</Tag>
            </div>
            <p>
              Join us on stage for a new campfire topic talk. We will be discussing the
              language of disability as well as bringing awareness with your community interactions.
              Let's get the discussion going to educate each other with positive choices we can make.
            </p>
            <div className='contentblock-actions'>
              <PrimaryButton text="Watch" ext destination="https://www.youtube.com/watch?v=nefJID_9Jug" arrow />
            </div>
          </div>
          <div className='contentblock-image'>
            <img alt='' src={theme === 'dark' ?
              require('../assets/content/disabilitypride-dark.png')
              :
              require('../assets/content/disabilitypride-light.png')}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate>
          <div className='contentblock-text'>
            <div className='contentblock-tagrow'>
              <h2>Pride</h2>
              <Tag color="green">Communities on Discord</Tag>
            </div>
            <p>
              We're celebrating spaces that champion the LGBTQ+ community,
              for showing support to their community members. Come join and listen into
              our discussion on a celebration that will be informative, personal,
              and another great memory for your community!
            </p>
            <div className='contentblock-actions'>
              <PrimaryButton text="Watch" ext destination="https://www.youtube.com/watch?v=o812oD39eC8" arrow />
            </div>
          </div>
          <div className='contentblock-image'>
            <img alt='' src={theme === 'dark' ?
              require('../assets/content/pride-dark.png')
              :
              require('../assets/content/pride-light.png')}
            />
          </div>
        </ContentBlock>

      </main>
    </>
  );
}

export default Content;