import React from "react";
import { Link } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Men from "./components/Men";
// import Women from "./components/Women";
export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "#8000ff",
        padding: 20,
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}

      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
        Products
      </Link>
      <Link
        to="/products/men"
        style={{ color: "white", textDecoration: "none" }}
      >
        Men
      </Link>
      <Link
        to="/products/women"
        style={{ color: "white", textDecoration: "none" }}
      >
        Women
      </Link>
      <Link
        to="/products/kids"
        style={{ color: "white", textDecoration: "none" }}
      >
        Kids
      </Link>
      <Link
        to="/products/homedecor"
        style={{ color: "white", textDecoration: "none" }}
      >
        Home decor
      </Link>
    </nav>
  );
};
