import "./App.css";
import "./components/Header";
import { useState, useEffect } from "react";

function App() {
  // const [tickers, updateTickers] = useState({ default: 1 });
  // function updateTickersHandler() {
  //   fetch("http://localhost:3001/tickers")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.default = 0;
  //       updateTickers(data);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // setInterval(updateTickersHandler, 10000);
  let tickers = {default = 0}
  if (tickers.default === 0) {
    return (
      <div>
        <Header />
        <div>{tickers.kraken.ask}</div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div>no data received yet</div>
      </div>
    );
  }
}

export default App;
