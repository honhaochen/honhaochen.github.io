import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Logo from "../components/common/Logo";
import Socials from "../components/about/Social";

import PROFILE_INFO from "../data/Profile";
import METADATA from "../data/Metadata";

import "./styles/about.css";

const About = () => {

	const metadata = METADATA.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${PROFILE_INFO.main.title}`}</title>
				<meta name="description" content={metadata?.description} />
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={60} link={undefined} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{PROFILE_INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{PROFILE_INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
