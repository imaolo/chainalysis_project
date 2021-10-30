import "./Table.css";
import CurrencyRow from "./CurrencyRow";
import { useState, useEffect } from "react";
var count = 0;

function Table() {
  const [tickers, updateTickers] = useState({});
  const [isDataReceived, updateDataReceived] = useState(false);

  useEffect(() => {
    setInterval(() => {
      updateTickersHandler()
    }, 2500);
  }, []);


  function updateTickersHandler() {
    fetch("http://localhost:3001/tickers")
      .then((res) => res.json())
      .then((data) => {
        console.log(count++)
        updateDataReceived(true);
        updateTickers(data);
      });
  }

  //condntional rendering - could use a spinner in the else statement
  if (isDataReceived) {
    //columnTitles holds the columns of the first row of the outer table, They are the column titles
    //columns in first row is empty
    //markets is an array that holds each currency we are tracking
    var currencies = []
    var titleRowCols = [];
    titleRowCols.push(<td id="empty"></td>);
    for (let [exchange, data] of Object.entries(tickers)) {
      currencies = Object.keys(data)
      titleRowCols.push(<td className="col-title">{exchange}</td>);
    }

    //currencyRows is an array with a row for each currency we are monitoring
    //each currency row must know which currency they are correspond to and the tickers data as props.data
    var currencyRows = [];
    currencies.forEach((market) => {
      currencyRows.push(
        <CurrencyRow currency={market} data={tickers} />
      );
    });

    return (
      <table className="outer-table">
        <tbody>
          <tr className="outer-table-titles-row">{titleRowCols}</tr>
          {currencyRows}
        </tbody>
      </table>
    );
  } else {
    // do not renter table
    return <div className="noData">Retrieving Data...</div>;
  }
}

export default Table;
