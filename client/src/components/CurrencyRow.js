import "./CurrencyRow.css";
import DataBox from "./DataBox";

function CurrencyRow(props) {
  var exchanges = Object.keys(props.data)
  var buy;
  if (props.data[exchanges[0]][props.currency].bid > props.data[exchanges[1]][props.currency].bid){
    buy = exchanges[1]
  }else{
    buy = exchanges[0]
  }
  var rowCols = []
  rowCols.push(<td className="currency-title">{props.currency}</td>);
  for (let [exchange, data] of Object.entries(props.data)) {
    rowCols.push(
      <td className="data-box-container">
        <DataBox buy={buy} currency={props.currency} thisExchange={exchange} tickers={props.data}/>
      </td>
    );
  }

  return <tr className="currency-row">{rowCols}</tr>;
}

export default CurrencyRow;
