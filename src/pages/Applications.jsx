import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { ContentFullsizeBlock, PrimaryButton } from '../components/Elements';
import Header from '../components/Header';
import { IconModerator, IconProfessional } from '../components/Symbols';

function Applications() {
  const loc = useLocation();
  return (
    <>
      <Helmet>
        <title>Applications | Community Architects</title>
        <link rel="canonical" href={`https://community-architects.net${loc.pathname}`} />
      </Helmet>
      <Header>
        <div>
          <h1>Mod & Professional Role Applications</h1>
          <h2>Join our community team! Apply for Moderator or Professional Role positions and take an active role in shaping and managing our community.</h2>
        </div>
      </Header>
      <main>

        <ContentFullsizeBlock animate>
          <IconModerator className="application-icon mod" />
          <h2 style={{ color: "var(--color-text-application-mod)" }}>Moderation Team</h2>
          <p>
            Our community moderators help ensure that the community remains a
            safe and friendly space for all members. They monitor the community
            for rule violations, respond to member questions and concerns, and
            help facilitate positive interactions between members.
          </p>
          <h3>Requirements</h3>
          <ul>
            <li>You must be at least 16 years old in order to apply for this moderator position.</li>
            <li>Prior experience in community moderation is not a necessity.</li>
            <li>Prior message activity within the community.</li>
            <li>General familiarity with how the server works and is built up.</li>
          </ul>
          <PrimaryButton fullsize text="Apply Now" arrow disabled />
        </ContentFullsizeBlock>

        <ContentFullsizeBlock animate>
          <IconProfessional className="application-icon professional" />
          <h2 style={{ color: "var(--color-text-application-professional)" }}>Professional Role</h2>
          <p>
            Our Industry Community Professionals are experts in particular areas
            related to community management. They use their skills and knowledge
            to help shape huge exemplary communities together with well
            established projects, companies and brands.
          </p>
          <h3>Requirements</h3>
          <ul>
            <li>You must be at least 18 years old in order to apply for this community role.</li>
            <li>Currently officially working in professional community management.</li>
            <li>You must have been actively working in professional community management for at minimum of 2 years.</li>
          </ul>
          <PrimaryButton fullsize text="Apply Now" arrow disabled />
        </ContentFullsizeBlock>

      </main>
    </>
  );
}

export default Applications;