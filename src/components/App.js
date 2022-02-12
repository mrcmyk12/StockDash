import React from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./SearchBar";
import StockInfo from "./StockInfo";
import News from "./News";
import StockPrices from "./StockPrices";
import MarketSummary from "./MarketSummary";

class App extends React.Component {
	state = {
		stockName: "",
		symbol: "",
		fiftyTwoWeekHigh: 0,
		fiftyTwoWeekLow: 0,
		description: "",
		openPrice: 0,
		closePrice: 0,
		netChange: 0,
		theStocks: [
			"AAPL",
			"MSFT",
			"GOOG",
			"AMZN",
			"TSLA",
			"BRK.A",
			"TSM",
			"FB",
			"NVDA",
			"TCEHY",
			"V",
			"UNH",
			"JPM",
			"LVMUY",
			"BAC",
			"PG",
			"WMT",
			"HD",
			"DIS",
			"ADBE",
			"NKE",
			"NFLX"
		],
		stock: [],
		marketSummary: [],
		news: [],
		stockPrice: [],
		leadStory: [],
		openingStock: [],
		openingStockName: "",
		openingSymbol: "",
		openingFiftyTwoWeekHigh: 0,
		openingFiftyTwoWeekLow: 0,
		openingDescription: "",
		openingOpenPrice: 0,
		openingClosePrice: 0,
		openingNetChange: 0,
		selectedStockNews: []
	};

	onSearchSubmit = (term) => {
		let day = new Date();
		let stringDay = day.toString();

		// console.log(day);

		// if (stringDay.includes("Sat")) {
		// 	day.setDate(day.getDate() - 1);
		// 	console.log(day);
		// }

		// if (stringDay.includes("Sun")) {
		// 	day.setDate(day.getDate() - 2);
		// 	console.log(day);
		// }

		let result = day.toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			formatMatcher: "basic"
		});

		// let year = day.getFullYear();
		// let month = (day.getMonth() + 1);
		// let today = day.getDate().toLocaleDateString({
		//     day:"2-digit"
		// });

		console.log(day.getDate());

		let today = "";
		let month = "";
		let year = day.getFullYear();

		if (day.getDate() < 10) {
			today = `0${day.getDate().toString()}`;
		}

		if (day.getDate() > 10) {
			today = day.getDate().toString();
		}

		if (day.getMonth() < 9) {
			month = `0${(day.getMonth() + 1).toString()}`;
		}

		if (day.getMonth() === 9) {
			month = "10";
		}

		if (day.getMonth() > 10) {
			month = day.getMonth().toString();
		}

		// weekResult.setDate(week.getDate() - 7);
		// console.log(weekResult, weekResult.replace(/\//gi, "-"));
		//console.log(result, result.replace(/\//gi, "-").toString());

		// axios
		// 	.get("https://stock-shark.com/api/v1/getStockTickers", {
		// 		params: { ticker: term, token: "hqhgglrpsjs" }
		// 	})
		// 	.then((response) => {
		// 		this.setState({ stock: response.data.data[0] });
		// 		console.log(this.state.stock.symbol);
		// 	});

		this.setState({ stockName: term });

		axios
			.get("https://stock-shark.com/api/v1/getLiveQuote", {
				params: {
					ticker: term,
					token: "hqhgglrpsjs"
				}
			})
			.then((response) => {
				//adding the response json to an object that can then be used to setState
				//probably can be refactored because there is an easier way to do this
				this.setState({ stock: response.data.data });
				//individually setting the state of the search stock...can be refactored
				this.setState({
					symbol: this.state.stock[`${this.state.stockName}`].symbol
				});
				this.setState({
					fiftyTwoWeekHigh:
						this.state.stock[`${this.state.stockName}`]["52WkHigh"]
				});
				this.setState({
					fiftyTwoWeekLow:
						this.state.stock[`${this.state.stockName}`]["52WkLow"]
				});
				this.setState({
					description:
						this.state.stock[`${this.state.stockName}`]["description"]
				});
				this.setState({
					openPrice:
						this.state.stock[`${this.state.stockName}`]["openPrice"]
				});
				this.setState({
					closePrice:
						this.state.stock[`${this.state.stockName}`]["closePrice"]
				});
				this.setState({
					netChange:
						this.state.stock[`${this.state.stockName}`]["netChange"]
				});
				console.log(response.data.data);
				console.log(this.state.stock[`${this.state.stockName}`].symbol);
				console.log(this.state.fiftyTwoWeekHigh);
			});

		console.log(`${year}-${month}-${today}`);

		//getting company news from the finnhub api based on whatever is searched for
		axios
			.get("https://finnhub.io/api/v1/company-news", {
				params: {
					symbol: term,
					token: "c7vtq6qad3i8n3bh6ph0",
					from: "2022-01-01",
					to: `${year}-${month}-${today}`
				}
			})
			.then((response) => {
				this.setState({ selectedStockNews: response});
				console.log(this.state.selectedStockNews)
			});
		// axios
		// 	//.get("https://stock-shark.com/api/v1/getHistoricalPrice", {
		// 		params: {
		// 			ticker: this.state.stock,
		// 			token: "hqhgglrpsjs",
		// 			startDate: result.replace(/\//gi, "-"),
		// 			endDate: result.replace(/\//gi, "-"),
		// 			periodType: "daily"
		// 		}
		// 	})
		// 	.then((response) => {
		// 		console.log(response.data.data.candles[0]);
		// 		this.setState({ stockPrice: response.data.data.candles[0] });
		// 	});
	};

	componentDidMount() {
		//get stock news from finnhub API
		axios
			.get("https://finnhub.io/api/v1/news?category=general", {
				params: {
					token: "c7vtq6qad3i8n3bh6ph0"
				}
			})
			.then((response) => {
				let array = [];

				this.setState({ leadStory: response.data[0] });

				for (let i = 1; i < 13; i++) {
					array.push(response.data[i]);
				}
				this.setState({ news: array });
			});

		//get random stock quote from stock-shark

		//creating a random number to index through this.state.theStocks
		let randomNum = Math.floor(
			Math.random() * (this.state.theStocks.length - 0) + 0
		);
		let randomStock = this.state.theStocks[randomNum];

		//creating an object to put the response.data.data object json in...can be refactored
		this.setState({ openingStockName: randomStock });
		axios
			.get("https://stock-shark.com/api/v1/getLiveQuote", {
				params: {
					ticker: randomStock,
					token: "hqhgglrpsjs"
				}
			})
			.then((response) => {
				//individually setting the state for all of the opening stock properties..can be refactored
				this.setState({ openingStock: response.data.data });
				this.setState({
					openingSymbol:
						this.state.openingStock[`${this.state.openingStockName}`]
							.symbol
				});
				this.setState({
					openingClosePrice:
						this.state.openingStock[`${this.state.openingStockName}`]
							.closePrice
				});
				this.setState({
					openingDescription:
						this.state.openingStock[`${this.state.openingStockName}`]
							.description
				});
				this.setState({
					openingFiftyTwoWeekHigh:
						this.state.openingStock[`${this.state.openingStockName}`][
							"52WkHigh"
						]
				});
				this.setState({
					openingFiftyTwoWeekLow:
						this.state.openingStock[`${this.state.openingStockName}`][
							"52WkLow"
						]
				});
				this.setState({
					openingNetChange:
						this.state.openingStock[`${this.state.openingStockName}`]
							.netChange
				});
				this.setState({
					openingOpenPrice:
						this.state.openingStock[`${this.state.openingStockName}`]
							.openPrice
				});
			});

		const options = {
			method: "GET",
			url: "https://yfapi.net/v6/finance/quote/marketSummary",
			params: { lang: "en" },
			headers: {
				"x-api-key": "xFvUb3O6gw9FRf87r2Z8F2ZM896vWKie6Qkrrr7Y"
			}
		};

		axios
			.request(options)
			.then((response) => {
				this.setState({
					marketSummary: response.data.marketSummaryResponse.result
				});
				console.log(this.state.marketSummary);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row" style={{ marginTop: "15px"}}>
					<MarketSummary marketSummary={this.state.marketSummary} />
				</div>
				<div className="row" style={{ marginTop: "10px" }}>
					<SearchBar onSubmit={this.onSearchSubmit} />
				</div>
				<div className="row" style={{ marginTop: "15px"}}>
					<StockInfo
						symbol={this.state.symbol}
						fiftyTwoWeekHigh={this.state.fiftyTwoWeekHigh}
						fiftyTwoWeekLow={this.state.fiftyTwoWeekLow}
						description={this.state.description}
						openPrice={this.state.openPrice}
						closePrice={this.state.closePrice}
						netChange={this.state.netChange}
					/>
				</div>
				<div className="row">
					<News
						news={this.state.news}
						leadStory={this.state.leadStory}
						loadStock={this.state.loadStock}
						openingSymbol={this.state.openingSymbol}
						openingFiftyTwoWeekHigh={this.state.openingFiftyTwoWeekHigh}
						openingFiftyTwoWeekLow={this.state.openingFiftyTwoWeekLow}
						openingDescription={this.state.openingDescription}
						openingOpenPrice={this.state.openingOpenPrice}
						openingClosePrice={this.state.openingClosePrice}
						openingNetChange={this.state.openingNetChange}
					/>
				</div>
				{/* <StockPrices
					names={this.state.userStocks}
					prices={this.state.userStocks.map((stock) => {
						return this.state.stockPrice[`${stock}`];
					})}
				/> */}
			</div>
		);
	}
}

export default App;

//https://stock-shark.com/api/v1/getHistoricalPrice?ticker=DOW&token=hqhgglrpsjs&startDate=06%2F02%2F2022&endDate=06%2F02%2F2022&periodType=daily
