import React from "react";
import { Card } from "reactstrap";
import "./MarketSummary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";

const MarketSummary = (props) => {
	console.log(props);

	const markets = props.marketSummary.map((market) => {
		if (market.regularMarketChange.raw < 0) {
			if (market.symbol === "BTC-USD") {
				return (
					<div className="col-sm-4 col-md-2">
						<Card className="market-card" style={{ borderColor: "#d21404"}}>
							<div className="row">
								<div
									className="market-name"
									style={{ color: "#d21404" }}>
									{market.symbol}
								</div>
							</div>
							<div className="row">
								<div className="col" style={{ marginLeft: "5px" }}>
									<div
										className="market-change"
										style={{ color: "#d21404" }}>
										{market.regularMarketChange.fmt}
									</div>
									<div
										className="market-change"
										style={{ color: "#d21404" }}>
										{market.regularMarketChangePercent.fmt}
									</div>
									<div
										className="market-price"
										style={{ color: "#d21404" }}>
										{market.regularMarketPrice.fmt}
									</div>
								</div>

								<div className="col">
									<FontAwesomeIcon
										icon={faCircleDown}
										size="xl"
										style={{ color: "#d21404" }}
									/>
								</div>
							</div>
						</Card>
					</div>
				);
			}
			return (
				<div className="col-sm-4 col-md-2">
					<Card className="market-card" style={{ borderColor: "#d21404"}}>
						<div className="row">
							<div className="market-name" style={{ color: "#d21404" }}>
								{market.shortName}
							</div>
						</div>
						<div className="row">
							<div className="col" style={{ marginLeft: "5px" }}>
								<div
									className="market-change"
									style={{ color: "#d21404" }}>
									{market.regularMarketChange.fmt}
								</div>
								<div
									className="market-change"
									style={{ color: "#d21404" }}>
									{market.regularMarketChangePercent.fmt}
								</div>
								<div
									className="market-price"
									style={{ color: "#d21404" }}>
									{market.regularMarketPrice.fmt}
								</div>
							</div>

							<div className="col">
								<FontAwesomeIcon
									icon={faCircleDown}
									size="xl"
									style={{ color: "#d21404" }}
								/>
							</div>
						</div>
					</Card>
				</div>
			);
		}

		if (market.symbol === "BTC-USD" && market.regularMarketChange.raw > 0) {
			return (
				<div className="col-md-2 col-sm-4">
					<Card className="market-card" style={{ borderColor: "#466d1d"}}>
						<div className="row">
							<div className="market-name" style={{ color: "#466d1d" }}>
								{market.symbol}
							</div>
						</div>
						<div className="row">
							<div className="col" style={{ marginLeft: "5px" }}>
								<div
									className="market-change"
									style={{ color: "#466d1d" }}>
									{market.regularMarketChange.fmt}
								</div>
								<div
									className="market-change"
									style={{ color: "#466d1d" }}>
									{market.regularMarketChangePercent.fmt}
								</div>
								<div
									className="market-price"
									style={{ color: "#466d1d" }}>
									{market.regularMarketPrice.fmt}
								</div>
							</div>

							<div className="col">
								<FontAwesomeIcon
									icon={faCircleUp}
									size="xl"
									style={{ color: "#466d1d" }}
								/>
							</div>
						</div>
					</Card>
				</div>
			);
		}

		return (
			<div className="col-md-2 col-sm-4">
				<Card className="market-card" style={{ borderColor: "#466d1d"}}>
					<div className="row">
						<div className="market-name" style={{ color: "#466d1d" }}>
							{market.shortName}
						</div>
					</div>
					<div className="row">
						<div className="col" style={{ marginLeft: "5px" }}>
							<div
								className="market-change"
								style={{ color: "#466d1d" }}>
								{market.regularMarketChange.fmt}
							</div>
							<div
								className="market-change"
								style={{ color: "#466d1d" }}>
								{market.regularMarketChangePercent.fmt}
							</div>
							<div className="market-price" style={{ color: "#466d1d" }}>
								{market.regularMarketPrice.fmt}
							</div>
						</div>

						<div className="col">
							<FontAwesomeIcon
								icon={faCircleUp}
								size="xl"
								style={{ color: "#466d1d" }}
							/>
						</div>
					</div>
				</Card>
			</div>
		);
	});

	return <div className="row">{markets}</div>;
};

export default MarketSummary;
