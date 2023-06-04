import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Logo from "../components/common/Logo";
import AllProjects from "../components/projects/AllProjects";

import PROFILE_INFO from "../data/Profile";
import METADATA from "../data/Metadata";

import "./styles/projects.css";

const Projects = () => {
	
	const metadata = METADATA.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${PROFILE_INFO.main.title}`}</title>
				<meta name="description" content={metadata?.description} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={60} link={undefined} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							{PROFILE_INFO.projects.title}
						</div>

						<div className="subtitle projects-subtitle">
							{PROFILE_INFO.projects.description}
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
