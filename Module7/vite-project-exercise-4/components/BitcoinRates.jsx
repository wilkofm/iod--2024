import { useContext, useState } from "react";
import useBitcoinPrice from "../hooks/UseBitcoinPrice";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { Form } from "react-router-dom";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = useBitcoinPrice(currency);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        margin: "auto",
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ color: "black" }}>
        Bitcoin Exchange Rate
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="currency-select">Choose Currency</InputLabel>
        <Select
          value={currency}
          onChange={handleCurrencyChange}
          label="Choose Currency"
        >
          {currencies.map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ textAlign: "center" }}>
        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}
        {price !== null && !loading && (
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Current price in {currency}: {price}
          </Typography>
        )}
      </Box>
    </Box>
    // <div className="BitcoinRates componentBox">
    //   <h3>Bitcoin Exchange Rate</h3>
    //   <label>
    //     Choose currency:
    //     <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
    //       {options}
    //     </select>
    //   </label>
    //   <div>
    // {loading && <p>Loading...</p>}
    // {error && <p>{error}</p>}
    // {price !== null && !loading && (
    //   <p>
    //     {" "}
    //     Current price in {currency}: {price}
    //   </p>
    //     )}
    //   </div>
    // </div>
  );
}
