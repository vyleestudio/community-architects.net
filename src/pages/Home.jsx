import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';
import { PrimaryButton, ContentBlock } from '../components/Elements';
import Header from '../components/Header';

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
          <h2>We are committed to bringing together community leaders, moderators, designers, and developers to share our biggest passion: Building communities on Discord.</h2>
        </div>
      </Header>
      <main>

        <ContentBlock animate>
          <div className='contentblock-text'>
            <h2>Stage Podcast Events</h2>
            <p>
              Our staff team at Community Architects regularly hosts interactive events,
              featuring special speakers, discussing various aspects of community management.
              These events provide a public forum for you to learn and ask questions about
              the technicalities of community management.
            </p>
            <div className='contentblock-actions'>
              <PrimaryButton text="Visit Content" destination="content" arrow />
            </div>
          </div>
          <div className='contentblock-image'>
            <img alt='' src={theme === 'dark' ?
              require('../assets/illustrations/podium-dark.svg').default
              :
              require('../assets/illustrations/podium-light.svg').default}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate r>
          <div className='contentblock-text'>
            <h2>Top Tier Advice Panels</h2>
            <p>
              Our Helpdesk category connects you with experienced community leaders, designers, developers,
              and managers to get tailored advice and answers to your specific inquiries.
              Improve your community with helpful conversations and guidance from experts in their respective fields.
            </p>
          </div>
          <div className='contentblock-image'>
            <img alt='' src={theme === 'dark' ?
              require('../assets/illustrations/helpdesk-dark.svg').default
              :
              require('../assets/illustrations/helpdesk-light.svg').default}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate>
          <div className='contentblock-text'>
            <h2>Monthly Campfire Chats</h2>
            <p>
              We love learning more about everything happening within your communities.
              Whether that's an event concept you're trying out, a category you introduced,
              or even how people use the new emojis you worked on for so long. Give yourself
              a few minutes to self-reflect on your community and share some of those super awesome highlights with us!
            </p>
          </div>
          <div className='contentblock-image'>
            <img alt='' src={theme === 'dark' ?
              require('../assets/illustrations/campfirechats-dark.svg').default
              :
              require('../assets/illustrations/campfirechats-light.svg').default}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate r>
          <div className='contentblock-text'>
            <h2>Community Showcase</h2>
            <p>
              Looking for a platform to showcase your community creations and events? Our showcase channel
              provides a space for community managers to share their latest developments, from new bot features
              to upcoming events. Share your latest projects, get feedback from other community managers,
              and find inspiration from the work of others.
            </p>
          </div>
          <div className='contentblock-image'>
            <img alt='' src={theme === 'dark' ?
              require('../assets/illustrations/showcase-dark.svg').default
              :
              require('../assets/illustrations/showcase-light.svg').default}
            />
          </div>
        </ContentBlock>

      </main>
    </>
  );
}

export default Home;