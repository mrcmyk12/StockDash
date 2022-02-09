import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		//prevents the form from attempting to submit automatically when pressing enter
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div>
				<div className="search-bar-box">
				<div><h1 className="title">Enter Stock Ticker</h1></div>
					<form onSubmit={this.onFormSubmit}>
						<div>
							<input
								className="searchbar"
								type="text"
								value={this.state.term}
								onChange={(e) =>
									this.setState({ term: e.target.value.toUpperCase() })
								}
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchBar;
