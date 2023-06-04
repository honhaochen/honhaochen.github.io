import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/Card";

import "./styles/work.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="/garena.png"
								alt="garena"
								className="work-image"
							/>
							<div className="work-title">Garena</div>
							<div className="work-subtitle">
								Fullstack Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
						<div className="work">
							<img
								src="/nus.png"
								alt="NUS IT"
								className="work-image"
							/>
							<div className="work-title">NUS IT</div>
							<div className="work-subtitle">
								Internship
								<br/>
								Frontend Developer
							</div>
							<div className="work-duration">Dec 2021 - Jan 2022</div>
						</div>
						<div className="work">
							<img
								src="/nus.png"
								alt="NUS IT"
								className="work-image"
							/>
							<div className="work-title">NUS IT</div>
							<div className="work-subtitle">
								Internship
								<br/>
								Fullstack Web Developer
							</div>
							<div className="work-duration">May 2021 - July 2021</div>
						</div>
						<div className="work">
							<img
								src="/nus.png"
								alt="NUS Course"
								className="work-image"
							/>
							<div className="work-title">NUS TIC2003</div>
							<div className="work-subtitle">
								Teaching Assistant
							</div>
							<div className="work-duration">Jan 2021 - May 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
