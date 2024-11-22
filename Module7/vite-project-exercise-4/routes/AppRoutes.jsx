import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import BitcoinRatesPage from "../pages/BitcoinRatesPage";
import LoginPage from "../pages/LoginPage";

// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Homepage {...props} />} />

      <Route path="bitcoin-rates" element={<BitcoinRatesPage {...props} />} />

      <Route path="login" element={<LoginPage {...props} />} />
    </Routes>
  );
}

export default AppRoutes;
// Name this file AppRoutes.jsx and store in new folder 'routes'
