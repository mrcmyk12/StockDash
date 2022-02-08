import React from "react";

const News = (props) => {

	const newsie = props.news.map((newy) => {
		return (
			<div>
                <a href={newy.url}>{newy.headline}</a>
			</div>
		);
	});
	return <div>{newsie}</div>
};

export default News;
