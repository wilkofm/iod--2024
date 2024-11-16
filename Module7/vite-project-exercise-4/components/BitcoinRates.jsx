import { useContext, useState } from "react";
import useBitcoinPrice from "../hooks/UseBitcoinPrice";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = useBitcoinPrice(currency);

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
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {price !== null && !loading && (
          <p>
            {" "}
            Current price in {currency}: {price}
          </p>
        )}
      </div>
    </div>
  );
}
