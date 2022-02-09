import React from "react";
import "./News.css";

const News = (props) => {
	console.log(props);
	const newsie = props.news.map((newy) => {
		return (
			<div>
				<div>
					<a href={newy.url}>{newy.headline}</a>
				</div>
			</div>
		);
	});
	return (
		<div>
			<div className="news-box">
				<div className="news-headline-image">
					<img src={props.leadStory.image} className="lead-story-image" />
				</div>
				<div className="news-headline-headline">
					<h2>{props.leadStory.headline}</h2>
				</div>
				<div className="lead-story-summary">
					{props.leadStory.summary}
				</div>
				<div className="news-other-stories">{newsie}</div>
			</div>
			<div className="crypto-box">
				<div>

				</div>
				<div>

				</div>
				<div>{newsie}</div>
			</div>
			
			
		</div>
	);
};

export default News;
