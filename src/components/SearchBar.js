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
			<div className="container" style={{ "alignContent": "center"}}>
				<div className="row">
				<div className="col"><h1 className="title">Enter Stock Ticker</h1></div>
					<form onSubmit={this.onFormSubmit}>
						<div style={{ "textAlign": "center"}}>
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
