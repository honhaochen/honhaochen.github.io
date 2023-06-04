import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/paper.css";

interface PaperProps { title: any; description: any; date: any; link: any; }

const Paper: React.FC<PaperProps> = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="home-paper">
				<div className="home-paper-content">
					<div className="home-paper-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="home-paper-title">{title}</div>
					<div className="home-paper-description">
						{description}
					</div>
					<div className="home-paper-link">
						<Link to={link}>
							Read paper{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Paper;
