import React, { useEffect, useState } from "react";
import CardList from "./card-list.component";
import { useApp } from "../../../Context/AppContext";

const Fetcher = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isInWishlist, toggleWishlist } = useApp();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="products-section">
      <div className="section-header">
        <h2>Featured Products</h2>
        <p>Handpicked just for you</p>
      </div>
      <CardList
        products={products}
        loading={loading}
        isInWishlist={isInWishlist}
        onToggleLike={toggleWishlist}
      />
    </section>
  );
};

export default Fetcher;
