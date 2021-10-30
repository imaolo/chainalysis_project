import "./DataBox.css";

function DataBox(props) {
  var color;
  var buyorSell
  if (props.thisExchange === props.buy){
    color= "green"
    buyorSell = "Buy at $" + props.tickers[props.thisExchange][props.currency].bid;
  }
  else{
    color="red"
    buyorSell = "Sell at $" + props.tickers[props.thisExchange][props.currency].bid;
  }
  return (
    <table className="data-box">
      <tbody>
        <tr className="inner-table-row">
            <td className="bidask">
              Bid: ${props.tickers[props.thisExchange][props.currency].bid}
            </td>
            <td className="bidask">
              Ask: ${props.tickers[props.thisExchange][props.currency].ask}
            </td>
        </tr>
        <tr>
          <td colSpan="2" className="buysell" id="color">{buyorSell}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DataBox;
