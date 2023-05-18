import { Helmet } from 'react-helmet';
import { useLocation, useOutletContext } from 'react-router-dom';
import { PrimaryButton, ContentBlock, Tag } from '../components/Elements';
import Header from '../components/Header';
import LazyImage from "../components/LazyImage";

function Content() {
  const [theme] = useOutletContext(),
    loc = useLocation();
  return (
		<>
			<Helmet>
				<title>Content | Community Architects</title>
				<link
					rel="canonical"
					href={`https://community-architects.net${loc.pathname}`}
				/>
			</Helmet>
			<Header>
				<div>
					<h1>Content & Resources</h1>
					<p>
						Our staff team at Community Architects regularly hosts
						interactive events, featuring special speakers,
						discussing various aspects of community management.
					</p>
				</div>
			</Header>
			<main>
				<ContentBlock animate>
					<div className="contentblock-text">
						<div className="contentblock-tagrow">
							<h2>Flokie Interview</h2>
							<Tag color="red">Creators on Discord</Tag>
						</div>
						<p>
							We'll be joined by Flokie to learn more about what
							challenges arise when running one of the biggest
							communities on the platform.
						</p>
						<div className="contentblock-actions">
							<PrimaryButton
								disabled
								text="Watch Video"
								ext
								destination="https://youtube.com"
								arrow
							/>
						</div>
					</div>
					<div className="contentblock-image">
						<LazyImage
							className="no-touch"
							draggable={false}
							alt={`Illustration of community event "Flokie interview" where Flokie will join us to talk about the challenges of running one of the biggest communities on Discord.`}
							src={
								theme === "dark"
									? require("../assets/content/valorant-dark.png")
									: require("../assets/content/valorant-light.png")
							}
						/>
					</div>
				</ContentBlock>

				<ContentBlock animate>
					<div className="contentblock-text">
						<div className="contentblock-tagrow">
							<h2>Disability Pride</h2>
							<Tag color="green">Communities on Discord</Tag>
						</div>
						<p>
							We will be discussing the language of disability as
							well as bringing awareness with your community
							interactions.
						</p>
						<div className="contentblock-actions">
							<PrimaryButton
								text="Watch Video"
								ext
								destination="https://www.youtube.com/watch?v=nefJID_9Jug"
								arrow
							/>
						</div>
					</div>
					<div className="contentblock-image">
						<LazyImage
							className="no-touch"
							draggable={false}
							alt="Illustration of a diverse group of users in the Community Architects Discord server, represented by a rainbow with alternative colors symbolizing disability accessibility and inclusion"
							src={
								theme === "dark"
									? require("../assets/content/disabilitypride-dark.png")
									: require("../assets/content/disabilitypride-light.png")
							}
						/>
					</div>
				</ContentBlock>

				<ContentBlock animate>
					<div className="contentblock-text">
						<div className="contentblock-tagrow">
							<h2>Pride</h2>
							<Tag color="green">Communities on Discord</Tag>
						</div>
						<p>
							We're celebrating spaces that champion the LGBTQ+
							community, for showing support to their community
							members.
						</p>
						<div className="contentblock-actions">
							<PrimaryButton
								text="Watch Video"
								ext
								destination="https://www.youtube.com/watch?v=o812oD39eC8"
								arrow
							/>
						</div>
					</div>
					<div className="contentblock-image">
						<LazyImage
							className="no-touch"
							draggable={false}
							alt="Illustration showing a community of users in the Community Architects Discord server, represented by a rainbow with alternative colors symbolizing LGBTQ+ pride and inclusion."
							src={
								theme === "dark"
									? require("../assets/content/pride-dark.png")
									: require("../assets/content/pride-light.png")
							}
						/>
					</div>
				</ContentBlock>

				<div className="supportblock">
					<h2>Are you interested in supporting our editors?</h2>
					<p>
						Check out our Ko-Fi page! You can directly help us with
						financially compensating our content editors for their
						hard work. Thanks!
					</p>
					<div className="supportblock-actions">
						<PrimaryButton
							text="Donate"
							border
							ext
							destination="https://ko-fi.com/communityarchitects"
							arrow
						/>
					</div>
				</div>
			</main>
		</>
  );
}

export default Content;