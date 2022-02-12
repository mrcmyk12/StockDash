import React from "react";
import "./StockInfo.css";
import { Card } from "reactstrap";
import axios from "axios";

const StockInfo = (props) => {
	if(props.openPrice === 0){
		return(
			<div></div>
		)
	}
	return (
		<Card className="stockinfo-card">
			<div>
				<h1>{props.symbol}</h1>
				<h2>{props.description}</h2>
				<h3>{props.fiftyTwoWeekHigh}</h3>
				<h3>{props.fiftyTwoWeekLow}</h3>
				<h3>{props.openPrice}</h3>
				<h3>{props.closePrice}</h3>
				<h3>{props.netChange}</h3>
			</div>
		</Card>
	);
};

export default StockInfo;
