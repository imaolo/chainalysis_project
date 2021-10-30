const path = require("path");
const ccxt = require("ccxt");
const express = require("express");

//create each exchange object and add it to the exchanges array
var kraken = new ccxt.kraken({ id: "kraken" });
var bybit = new ccxt.bybit({ id: "bybit" });
var exchanges = [kraken, bybit];
//specify which markets we are monitoring
const markets = ["BTC/USD", "ETH/USD"];
//tickers object to hold the data. Populate it with the required key value pairs
var tickers = {};
exchanges.forEach((exchange) => {
  tickers[exchange.id] = {};
  markets.forEach((market) => {
    tickers[exchange.id][market] = {};
  });
});

//main
(async function () {
  await loadExchangeMarkets();

  //preliminarly load the data into the ticker object
  await retrieveTickers();

  //every interval milliseconds, fetch the tickers
  var interval = 5000;
  setInterval(retrieveTickers, interval);

  //web server setup (AKA the listener)
  const app = express();
  const port = 3001;
  // Have Node serve the files for our built React app
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("/tickers", (req, res) => {
    res.json(tickers);
  });
  // All other GET requests not handled before will return our React app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
  app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
  });
})();

//loads loads the exchange objects with the markets that they support
async function loadExchangeMarkets() {
  for (var exchange of exchanges) {
    try {
      await exchange.loadMarkets();
    } catch (err) {
      console.error(err);
      console.log("Error in loadExchangeMarkets");
      console.log(`Error loading ${exchange.id} markets`);
      terminateProgram();
    }
  }
}
//write the market data to the tickers object
async function retrieveTickers() {
  //make our request asynchronoulsy
  var promises = {};
  for (var exchange of exchanges) {
    try {
      promises[exchange.id] = exchange.fetchTickers(markets);
    } catch (err) {
      console.error(err);
      console.log(`Error retrieving ${exchange} tickers`);
    }
  }
  //the promises object holds the promises of each exchange. i.e. promise = {kraken: promise, bybit: promise}
  //we can now listen for the requests to be fullfilled
  for (let [exchange, promise] of Object.entries(promises)) {
    let data = await promise;
    for (let [market, ticker] of Object.entries(data)) {
      tickers[exchange][market] = {
        bid: `${ticker.bid}`,
        ask: `${ticker.ask}`,
      };
    }
  }
}
//informs the user the program will be terminated and then ends the program
function terminateProgram() {
  console.log("\n\nProgram terminated\n\n");
  process.exit();
}
