import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/NavBar";
import Logo from "../components/common/Logo";

import PROFILE_INFO from "../data/Profile";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${PROFILE_INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar active={undefined} />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="projects-logo">
							<Logo width={60} link={undefined} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								Oops! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
								The page you're looking for does not exist.
							</div>
							<a href="/" className="not-found-link">
								Back to the Home
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
