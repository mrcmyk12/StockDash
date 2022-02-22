import React from "react";
import { Card } from "reactstrap";

const Search = (props) => {
	if (props.searchResults.length === 0) {
		return <div></div>;
	}

	if (props.searchResults.length !== 0) {
		for (let i = 0; i < props.searchResults.length; i++) {
			return (
				<div>
					{props.searchResults[i]["symbol"]}
					{props.searchResults[i]["name"]}
				</div>
			);
		}
	}
};

export default Search;
