import React from 'react';

const StockInfo = (props) => {
    console.log(props)
    return <div><h1>{props.stock.companyName}</h1></div>
}

export default StockInfo;