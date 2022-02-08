import React from "react";
import axios from "axios";

const StockInfo = (props) => {
	return (
		<div>
			<h1>{props.symbol}</h1>
			<h2>{props.description}</h2>
			<h3>{props.fiftyTwoWeekHigh}</h3>
			<h3>{props.fiftyTwoWeekLow}</h3>
			<h3>{props.openPrice}</h3>
			<h3>{props.closePrice}</h3>
			<h3>{props.netChange}</h3>
		</div>
	);
};

export default StockInfo;
