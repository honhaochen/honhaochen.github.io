import React from "react";
import { Link } from "react-router-dom";

import PROFILE_INFO from "../../data/Profile";

import "./styles/logo.css";

const Logo = (props: { width: number; link: boolean | undefined; }) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const image = (
		<img src={PROFILE_INFO.main.logo} alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{image}</Link> : image}
		</React.Fragment>
	);
};

export default Logo;
