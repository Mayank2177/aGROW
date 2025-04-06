// src/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import Product from "./Pages/Product.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
