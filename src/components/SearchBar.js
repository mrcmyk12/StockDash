import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		//prevents the form from attempting to submit automatically when pressing enter
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<label>Enter Stock Ticker to Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
