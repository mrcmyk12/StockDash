import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import StockInfo from './StockInfo';

class App extends React.Component {
    state = {
        stock: []
    }

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://stock-shark.com/api/v1/getStockTickers', {
            params: {ticker: term, token: 'hqhgglrpsjs'}
        })

        this.setState({ stock: response.data.data[0]})
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <StockInfo stock={this.state.stock} />
            </div>
        )
    }
}

export default App;