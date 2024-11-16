import { useState, useEffect, useReducer } from "react";

const initialState = {
  price: null,
  loading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, price: action.payload, error: null };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let ignore = false;

    dispatch({ type: "FETCH_INIT" });

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: json.bitcoin[currency.toLowerCase()],
          });
        }
      })
      .catch((error) => {
        if (!ignore) {
          dispatch({ type: "FETCH_FAILURE", payload: error.message });
        }
      });

    return () => {
      ignore = true;
    };
  }, [currency]);

  return state;
}

export default useBitcoinPrice;
