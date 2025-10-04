import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import ProductDetails from "../components/ProductDetails";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />]
        <Route path="/products/details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
