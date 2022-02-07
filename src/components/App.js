import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import StockInfo from "./StockInfo";
import News from "./News";
import StockPrices from "./StockPrices";

class App extends React.Component {
	state = {
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
		const response = await axios.get(
			"https://stock-shark.com/api/v1/getStockTickers",
			{
				params: { ticker: term, token: "hqhgglrpsjs" }
			}
		);

		this.setState({ stock: response.data.data[0] });
	};

	componentDidMount() {
		let day = new Date();
		let stringDay = day.toString();

		console.log(day);

		if (stringDay.includes("Sat")) {
			day.setDate(day.getDate() - 1);
			console.log(day);
		}

		if (stringDay.includes("Sun")) {
			day.setDate(day.getDate() - 2);
			console.log(day);
		}

		let result = day.toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			formatMatcher: "basic"
		});

		console.log(result, result.replace(/\//gi, "-").toString());

		// axios
		// 	.get("https://finnhub.io/api/v1/news?category=general", {
		// 		params: {
		// 			token: "c7vtq6qad3i8n3bh6ph0",
		// 			minId: 10
		// 		}
		// 	})
		// 	.then((response) => {
		// 		let array = [];

		// 		for (let i = 0; i < 10; i++) {
		// 			array.push(response.data[i]);
		// 		}
		// 		this.setState({ news: array });
		// 	});

		// axios.get("https://stock-shark.com/api/v1/getHistoricalPrice", {
		// 	params: {
		// 		ticker: this.state.userStocks,
		// 		token: "hqhgglrpsjs",
		// 		startDate: result.replace(/\//gi, "-"),
		// 		endDate: result.replace(/\//gi, "-"),
		// 		periodType: "daily"
		// 	}
		// }).then((response) => {
		//     console.log(response.data.data.candles[0]);
		//     this.setState({ stockPrice: response.data.data.candles[0]})
		// })

		const stocks = this.state.userStocks.map((stock) => {
			return stock;
		});

		console.log(stocks);

		axios
			.get("https://stock-shark.com/api/v1/getLiveQuote", {
				params: {
					ticker: stocks.toLocaleString(),
					token: "hqhgglrpsjs"
				}
			})
			.then((response) => {
				this.setState({ stockPrice: response.data.data });
				console.log(this.state.stockPrice);
			});
	}

	render() {

		return (
			<div>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<StockInfo stock={this.state.stock} />
				<News news={this.state.news} />
				<StockPrices
					names={this.state.userStocks}
					prices={this.state.userStocks.map((stock) => {
						return this.state.stockPrice[`${stock}`];
					})}
				/>
			</div>
		);
	}
}

export default App;

//https://stock-shark.com/api/v1/getHistoricalPrice?ticker=DOW&token=hqhgglrpsjs&startDate=06%2F02%2F2022&endDate=06%2F02%2F2022&periodType=daily
