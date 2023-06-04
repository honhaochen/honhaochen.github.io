import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/Logo";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import Paper from "../components/home/Paper";
import Works from "../components/home/Work";
import AllProjects from "../components/projects/AllProjects";

import PROFILE_INFO from "../data/Profile";
import METADATA from "../data/Metadata";
import myPapers from "../data/Paper";

import "./styles/home.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(60);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.scrollY);

			let newLogoSize = 130 - (scroll * 8) / 10;

			if (newLogoSize < 60) {
				setStayLogo(true);
				return
			}

			if (newLogoSize < logoSize) {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize]);

	const metadata = METADATA.find((item) => item.page === "home");

	const logoStyle: Object = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{PROFILE_INFO.main.title}</title>
				<meta name="description" content={metadata?.description} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="home-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="home-container">
						<div className="home-first-area">
							<div className="home-first-area-left-side">
								<div className="title home-title">
									{PROFILE_INFO.home.title}
								</div>

								<div className="subtitle home-subtitle">
									{PROFILE_INFO.home.description}
								</div>
							</div>

							<div className="home-first-area-right-side">
								<div className="home-image-container">
									<div className="home-image-wrapper">
										<img
											src="my_photo.jpg"
											alt="about"
											className="home-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="home-socials">
							<a
								href={PROFILE_INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="home-social-icon"
								/>
							</a>
							<a
								href={PROFILE_INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="home-social-icon"
								/>
							</a>
							<a
								href={PROFILE_INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="home-social-icon"
								/>
							</a>
							<a
								href={`mailto:${PROFILE_INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="home-social-icon"
								/>
							</a>
						</div>

						<div className="home-projects">
							<AllProjects />
						</div>

						<div className="home-after-title">
							<div className="home-papers">
								{myPapers.map((paper, index) => (
									<div
										className="home-paper"
										key={(index + 1).toString()}
									>
										<Paper
											key={(index + 1).toString()}
											date={paper().date}
											title={paper().title}
											description={paper().description}
											link={"/paper/" + (index + 1)}
										/>
									</div>
								))}
							</div>

							<div className="home-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
