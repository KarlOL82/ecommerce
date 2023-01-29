import React from "react";

import { Product, FooterBanner, Herobanner } from "@/components";

const Home = () => (
  <div>
    <Herobanner />

    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Many varieties of Speakers</p>
    </div>

    <div className="products-container">
      {["Product 1", "Product 2"].map((product) => product)}
    </div>

    <FooterBanner />
  </div>
);

export default Home;
