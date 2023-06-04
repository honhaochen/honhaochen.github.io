import React from "react";

function paper_1() {
	return {
		date: "April 2022",
		title: "Information Extraction in Scholary Articles",
		description: `
				Natural Language Processing (NLP) has been increasingly gaining attention to model how human handles language data. 
				Among many of the NLP applications, Scientific Document Processing (SDP) focuses on processing language information within scholarly documents. 
				SDP tasks include content summarization, logical structure recovery, information extraction and etc. 
				In particular, the process of Information Extraction (IE) helps to extract key meta-data information from a scholarly document. 
				This process helps researchers to generate insights from a scholarly document without having to go through each of the document manually.
			`,
		style: `
				.paper-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
			`,
		body: (
			<React.Fragment>
				<div className="paper-content">
					<div className="paragraph">Research Paper</div>
					<img
						style={{ border: "1px solid black" }}
						src="/Information_Extraction_in_Scholary_Articles_Front_Page.png"
					/>
					<a href="/Information_Extraction_in_Scholary_Articles.pdf" rel="noopener noreferrer">
						Download
					</a>
				</div>
			</React.Fragment>
		),
	};
}

const myPapers = [paper_1];

export default myPapers;