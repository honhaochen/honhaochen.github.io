import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

interface ProjectProps { logo: string; title: string; description: string; linkText: string | undefined; link: string | undefined; }

const Project: React.FC<ProjectProps> = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link || ""}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						{ linkText &&
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">{linkText}</div>
							</div>
						}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
