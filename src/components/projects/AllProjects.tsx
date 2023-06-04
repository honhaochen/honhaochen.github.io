import Project from "./Project";

import PROFILE_INFO from "../../data/Profile";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{PROFILE_INFO.projects.items.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
