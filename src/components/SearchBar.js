import React from "react";
import "./SearchBar.css";
import {Input} from 'reactstrap'

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		//prevents the form from attempting to submit automatically when pressing enter
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="container" style={{ alignContent: "center", marginTop:"25px"}}>
				<div className="row">
				{/* <div className="col"><h1 className="title">Enter Stock Ticker</h1></div> */}
					<form onSubmit={this.onFormSubmit}>
						<div style={{ "textAlign": "center"}}>
							<Input
								className="searchbar"
								type="text"
								placeholder="Search for Stock Here"
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
