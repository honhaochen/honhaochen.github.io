import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Logo from "../components/common/Logo";

import PROFILE_INFO from "../data/Profile";
import myPapers from "../data/Paper";

import "./styles/paperShowcase.css";

let PaperStyle = styled.div``;

const PaperShowcase = () => {
	const navigate = useNavigate();
	let { paperIndex } = useParams();

	const paper = myPapers[Number(paperIndex) - 1];

	PaperStyle = styled.div`
		${paper().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${paper().title} | ${PROFILE_INFO.main.title}`}</title>
				<meta name="description" content={paper().description} />
			</Helmet>

			<div className="page-content">
				<NavBar active={undefined} />

				<div className="content-wrapper">
					<div className="read-paper-logo-container">
						<div className="read-paper-logo">
							<Logo width={60} link={undefined} />
						</div>
					</div>

					<div className="read-paper-container">
						<div className="read-paper-back">
							<img
								src="/back-button.png"
								alt="back"
								className="read-paper-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-paper-wrapper">
							<div className="read-paper-date-container">
								<div className="read-paper-date">
									{paper().date}
								</div>
							</div>

							<div className="title read-paper-title">
								{paper().title}
							</div>

							<div className="read-paper-body">
								<PaperStyle>{paper().body}</PaperStyle>
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

export default PaperShowcase;
