const ccxt = require('ccxt');
const express = require('express')

var kraken = new ccxt.kraken({id: "kraken"});
var coinbase  = new ccxt.coinbase({id: "coinbase" });
var exchanges = [kraken, coinbase];

const markets = ["BTC/USD", "ETH/USD"];








//ccxt setup
(async function() {
    console.log("Loading exchanges' markets")
    await loadExchangeMarkets()
    console.log("Loaded exchanges' markets\n")
})()


//loads the markets into the phemex and bybit objects
async function loadExchangeMarkets()
{
    for (var exchange of exchanges){
        try {
            await exchange.loadMarkets()
        } catch (err) {
            console.error(err)
            console.log("Error in loadExchangeMarkets")
            console.log(`Error loading ${exchange.id} markets`)
            terminateProgram()
        }
    }
}
//informs the user the program will be terminated then ends the program
function terminateProgram(){
    console.log("\n\nProgram terminated\n\n")
    process.exit()
}

