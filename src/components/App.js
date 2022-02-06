import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import StockInfo from "./StockInfo";
import News from "./News";

class App extends React.Component {
	state = {
		stock: [],
		news: []
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
		let result = day.toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
            formatMatcher: "basic"
		});

		console.log(result, result.replace(/\//gi, "-"));

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

		axios.get("https://stock-shark.com/api/v1/getHistoricalPrice", {
			params: {
				ticker: "TSLA",
				token: "hqhgglrpsjs",
				// startDate: result.replace(/\//gi, "-").toString(),
				// endDate: result.replace(/\//gi, "-").toString(),
                startDate: "02-04-2022",
                endDate: "02-04-2022",
				periodType: "daily"
			}
		}).then((response) => {
            console.log(response);
        })


        axios.get('https://stock-shark.com/api/v1/getLiveQuote', {
            params: {
                ticker: 'TSLA',
                token: "hqhgglrpsjs"
            }
        }).then((response) => {
            console.log(response)
        })
	}

	render() {
		return (
			<div>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<StockInfo stock={this.state.stock} />
				<News news={this.state.news} />
			</div>
		);
	}
}

export default App;

//https://stock-shark.com/api/v1/getHistoricalPrice?ticker=DOW&token=hqhgglrpsjs&startDate=06%2F02%2F2022&endDate=06%2F02%2F2022&periodType=daily