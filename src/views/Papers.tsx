import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Logo from "../components/common/Logo";
import Paper from "../components/papers/Paper";

import PROFILE_INFO from "../data/Profile";
import METADATA from "../data/Metadata";
import myPapers from "../data/Paper";

import "./styles/papers.css";

const Papers = () => {
	const metadata = METADATA.find((item) => item.page === "papers");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Papers | ${PROFILE_INFO.main.title}`}</title>
				<meta name="description" content={metadata?.description} />
			</Helmet>

			<div className="page-content">
				<NavBar active="papers" />
				<div className="content-wrapper">
					<div className="papers-logo-container">
						<div className="papers-logo">
							<Logo width={60} link={undefined} />
						</div>
					</div>

					<div className="papers-main-container">
						<div className="title papers-title">
							{PROFILE_INFO.papers.title}
						</div>

						<div className="subtitle papers-subtitle">
							{PROFILE_INFO.papers.description}
						</div>

						<div className="papers-container">
							<div className="papers-wrapper">
								{myPapers.map((paper, index) => (
									<div
										className="papers-paper"
										key={index + 1}
									>
										<Paper
											key={index + 1}
											date={paper().date}
											title={paper().title}
											description={paper().description}
											link={"/paper/" + (index + 1)}
										/>
									</div>
								))}
							</div>
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

export default Papers;
