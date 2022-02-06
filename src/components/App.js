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
		axios
			.get("https://finnhub.io/api/v1/news?category=general", {
				params: {
					token: "c7vtq6qad3i8n3bh6ph0",
                    minId: 10
				}
			})
			.then((response) => {
                let array = [];

                for(let i = 0; i < 10; i++){
                    array.push(response.data[i])
                }
                this.setState({ news: array})
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
