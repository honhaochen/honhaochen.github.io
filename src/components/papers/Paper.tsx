import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/paper.css";

const Paper = (props: { date: any; title: any; description: any; link: any; }) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="paper">
				<div className="paper-left-side">
					<div className="paper-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="paper-right-side">
						<div className="paper-title">{title}</div>
						<div className="paper-description">{description}</div>
						<div className="paper-link">
							Read Paper{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Paper;
