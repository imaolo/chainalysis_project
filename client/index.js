let myHeading = document.querySelector("h1").innerText; 
console.log(myHeading);

fetchTickers()
setInterval(fetchTickers,4000)

async function fetchTickers(){
    const response = await fetch("http://localhost:3000/tickers")
    const data =  await response.json()
    console.log(data.kraken)
    updateDocument(data)
}

function updateDocument(data){
    var btcCBask = document.getElementById("BTC:CB:ask")
    var btcCBbid = document.getElementById("BTC:CB:bid")
    var btcCBbs = document.getElementById("BTC:CB:bs")
    btcCBask.innerText = `Ask: $${data.bybit["BTC/USD"].ask}`
    btcCBbid.innerText = `Bid: $${data.bybit["BTC/USD"].bid}`


    var btcKask = document.getElementById("BTC:K:ask")
    var btcKbid = document.getElementById("BTC:K:bid")
    var btcKbs = document.getElementById("BTC:K:bs")
    btcKask.innerText = `Ask: $${data.kraken["BTC/USD"].ask}`
    btcKbid.innerText = `Bid: $${data.kraken["BTC/USD"].bid}`



    var ethCBask = document.getElementById("ETH:CB:ask")
    var ethCBbid = document.getElementById("ETH:CB:bid")
    var ethCBbs = document.getElementById("ETH:CB:bs")
    ethCBask.innerText = `Ask: $${data.bybit["ETH/USD"].ask}`
    ethCBbid.innerText = `Bid: $${data.bybit["ETH/USD"].bid}`
    
    var ethKask = document.getElementById("ETH:K:ask")
    var ethKbid = document.getElementById("ETH:K:bid")
    var ethKbs = document.getElementById("ETH:K:bs")  
    ethKask.innerText = `Ask: $${data.kraken["ETH/USD"].ask}`
    ethKbid.innerText = `Bid: $${data.kraken["ETH/USD"].bid}`
}

