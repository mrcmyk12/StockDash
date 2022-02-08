import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import StockInfo from "./StockInfo";
import News from "./News";
import StockPrices from "./StockPrices";

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
		theStocks: [],
		stock: [],
		news: [],
		stockPrice: [],
		userStocks: [
			"AAPL",
			"MSFT",
			"AMZN",
			"FB",
			"GOOGL",
			"TSLA",
			"NVDA",
			"BRK.B",
			"JPM",
			"V"
		]
	};

	onSearchSubmit = async (term) => {
		// let day = new Date();
		// let stringDay = day.toString();

		// console.log(day);

		// if (stringDay.includes("Sat")) {
		// 	day.setDate(day.getDate() - 1);
		// 	console.log(day);
		// }

		// if (stringDay.includes("Sun")) {
		// 	day.setDate(day.getDate() - 2);
		// 	console.log(day);
		// }

		// let result = day.toLocaleDateString("en-US", {
		// 	year: "numeric",
		// 	month: "2-digit",
		// 	day: "2-digit",
		// 	formatMatcher: "basic"
		// });

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
				this.setState({ stock: response.data.data });
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
					token: "c7vtq6qad3i8n3bh6ph0",
					minId: 10
				}
			})
			.then((response) => {
				let array = [];

				for (let i = 0; i < 10; i++) {
					array.push(response.data[i]);
				}
				this.setState({ news: array });
			});
	}

	render() {
		return (
			<div>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<StockInfo
					symbol={this.state.symbol}
					fiftyTwoWeekHigh={this.state.fiftyTwoWeekHigh}
					fiftyTwoWeekLow={this.state.fiftyTwoWeekLow}
					description={this.state.description}
					openPrice={this.state.openPrice}
					closePrice={this.state.closePrice}
					netChange={this.state.netChange}
				/>
				<News news={this.state.news} />
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
