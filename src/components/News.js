import React from "react";
import "./News.css";

const News = (props) => {
	console.log(props);
	const newsie = props.news.map((newy) => {
		return (
			<div>
				<div>
					<ul className="substory-unordered-list">
						<li className="substory-list">
							<a
								className="a-tag-substory"
								target="_blank"
								href={newy.url}>
								{newy.headline}
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	});

	let getStatus = () => {
		if(props.openingNetChange < 0) {
			return (
				<div className="stock-net-change" style={{ color: "red"}}>
					{props.openingNetChange}
				</div>
			)
		} else {
			return(
				<div className="stock-new-change">
					{props.openingNetChange}
				</div>
			)
		}
	}
	return (
		<div>
			<div className="news-box">
				<div className="news-headline-image">
					<img src={props.leadStory.image} className="lead-story-image" />
				</div>
				<div className="news-headline-headline">
					<h2>{props.leadStory.headline}</h2>
				</div>
				{/* <div className="lead-story-summary">
					{props.leadStory.summary}
				</div> */}
				<div className="news-other-stories">{newsie}</div>
			</div>
			<div className="crypto-box">
				<div className="stock-ticker-box">
					<div className="stock-ticker-symbol">{props.openingSymbol}</div>
					<div className="stock-description">
						{props.openingDescription}
					</div>
					<div className="stock-subheading">
						<p>52 Week High:</p>
					</div>
					<div className="stock-info-subheading">
						{props.openingFiftyTwoWeekHigh}
					</div>
					<div className="stock-subheading">
						<p>52 Week Low:</p>
					</div>
					<div className="stock-info-subheading">
						{props.openingFiftyTwoWeekLow}
					</div>
				</div>
				<div className="stock-ticker-today-box">
				<div className="stock-subheading"><p>Net Change:</p></div>
					<div className="stock-net-change">{props.openingNetChange}</div>
					<div className="stock-subheading"><p>Opening Price:</p></div>
					<div className="stock-open-price">{props.openingOpenPrice}</div>
					<div className="stock-subheading"><p>Closing Price:</p></div>
					<div className="stock-close-price">
						{props.openingClosePrice}
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
