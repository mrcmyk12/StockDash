import React from "react";

const StockPrices = (props) => {
    console.log(props.prices[1].symbol)


    return(
        <div>
            {props.prices[1].symbol}<br/>
            {props.prices[1].openPrice}<br/>
            {props.prices[1].closePrice}<br/>git 
            {props.prices[1].markChangeInDouble}
        </div>
    );
}

export default StockPrices;
