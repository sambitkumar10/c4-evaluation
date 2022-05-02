import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../components/Products";
import Men from "../components/Men";
import Home from "../components/Home";
import About from "../components/About";

const MainRoutes = () => {
  return (
    <>
      {/* Navbar and all the routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="" element={<Men />} />
        </Route> */}
        <Route path="/products/men" element={<Men />} />
        <Route path="/products/women" element={<Men />} />
        <Route path="/products/kids" element={<Men />} />
        <Route path="/products/homedecor" element={<Men />} />
      </Routes>
    </>
  );
};
export { MainRoutes };
