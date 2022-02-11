import React from "react";
import { Card } from "reactstrap";
import "./MarketSummary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";

const MarketSummary = (props) => {
	console.log(props);

	const markets = props.marketSummary.map((market) => {
		if (market.regularMarketChange.raw < 0) {
			return (
				<div className="col-2">
					<Card className="market-card" style={{ background: "#d21404" }}>
						<div className="row">
							<div className="market-name">{market.shortName}</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="market-change">
									{market.regularMarketChange.fmt}
								</div>
								<div className="market-change">
									{market.regularMarketChangePercent.fmt}
								</div>
							</div>
							<div className="col">
								<FontAwesomeIcon
									icon={faCircleDown}
									size="xl"
									className="arrow"
								/>
							</div>
						</div>
					</Card>
				</div>
			);
		}

		return (
			<div className="col-2">
				<Card className="market-card" style={{ background: "#466d1d" }}>
					<div className="row">
						<div className="market-name">{market.shortName}</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="market-change">
								{market.regularMarketChange.fmt}
							</div>
							<div className="market-change">
								{market.regularMarketChangePercent.fmt}
							</div>
						</div>
						<div className="col">
							<FontAwesomeIcon
								icon={faCircleUp}
								size="xl"
								className="arrow"
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
