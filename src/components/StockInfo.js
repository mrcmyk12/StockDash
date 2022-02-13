import React from "react";
import "./StockInfo.css";
import { Card } from "reactstrap";
import axios from "axios";
//"#d21404"
const StockInfo = (props) => {
	if (props.openPrice === 0) {
		return <div></div>;
	}

	if (props.netChange < 0) {
		return (
			<Card className="stockinfo-card">
			<div className="row">
				<div className="col-3">
					<div className="row">
						<div className="stock-symbol">{props.symbol}</div>
					</div>
					<div className="row">
						<div className="stock-description">{props.description}</div>
					</div>
					<div className="row" style={{ marginTop: "20px" }}>
						<div className="weekhigh-heading">52 Week High:</div>
						<div className="weekhigh">{props.fiftyTwoWeekHigh}</div>
					</div>
					<div className="row">
						<div className="weekhigh-heading">52 Week Low:</div>
						<div className="weekhigh">{props.fiftyTwoWeekLow}</div>
					</div>
				</div>
				<div className="col">
					<div className="row">
						<div className="col">
							<img
								className="news-image"
								src={props.selectedStockNews[0]["image"]}
							/>
						</div>
						<div className="col">
							<div className="news-headline">
								{props.selectedStockNews[0]["headline"]}
							</div>
							<div className="news-summary">
								{props.selectedStockNews[0]["summary"]}
							</div>
							<div style={{ marginTop: "5px"}}>
							<div className="other-headline">
								{props.selectedStockNews[1]['headline']}
							</div>
							<div className="other-headline">
								{props.selectedStockNews[2]['headline']}
							</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-2">
					{" "}
					<div className="stock-fundamentals" style={{ color: "#d21404" }}>
						{props.netChange}
					</div>
					<div className="price-heading">Opening Price</div>
					<div className="stock-fundamentals-price">{props.openPrice}</div>
					<div className="price-heading">Closing Price</div>
					<div className="stock-fundamentals-price">
						{props.closePrice}
					</div>
				</div>
			</div>
		</Card>
		);
	}

	return (
		<Card className="stockinfo-card">
			<div className="row">
				<div className="col-3">
					<div className="row">
						<div className="stock-symbol">{props.symbol}</div>
					</div>
					<div className="row">
						<div className="stock-description">{props.description}</div>
					</div>
					<div className="row" style={{ marginTop: "20px" }}>
						<div className="weekhigh-heading">52 Week High:</div>
						<div className="weekhigh">{props.fiftyTwoWeekHigh}</div>
					</div>
					<div className="row">
						<div className="weekhigh-heading">52 Week Low:</div>
						<div className="weekhigh">{props.fiftyTwoWeekLow}</div>
					</div>
				</div>
				<div className="col">
					<div className="row">
						<div className="col">
							<img
								className="news-image"
								src={props.selectedStockNews[0]["image"]}
							/>
						</div>
						<div className="col">
							<div className="news-headline">
								{props.selectedStockNews[0]["headline"]}
							</div>
							<div className="news-summary">
								{props.selectedStockNews[0]["summary"]}
							</div>
						</div>
					</div>
				</div>
				<div className="col-2">
					{" "}
					<div className="stock-fundamentals" style={{ color: "#466d1d" }}>
						{props.netChange}
					</div>
					<div className="price-heading">Opening Price</div>
					<div className="stock-fundamentals-price">{props.openPrice}</div>
					<div className="price-heading">Closing Price</div>
					<div className="stock-fundamentals-price">
						{props.closePrice}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default StockInfo;
