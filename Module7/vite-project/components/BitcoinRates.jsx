import { useState } from "react";
import { useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    console.log("running effect");
    let ignore = false;

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) setPrice(json.bitcoin[currency.toLowerCase()]);
      });

    return () => {
      ignore = true;
      console.log("Cleanup effect");
    };
  }, [currency]);

  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
  const options = currencies.map((currency) => (
    <option value={currency} key={currency}>
      {currency}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        {price !== null ? (
          <p>
            {" "}
            Current price in {currency}: {price}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
