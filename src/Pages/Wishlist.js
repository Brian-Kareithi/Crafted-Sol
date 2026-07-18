import { Link } from "react-router-dom";
import { useApp } from "../Context/AppContext";
import { useState, useEffect } from "react";
import "./Pages.css";

const Wishlist = () => {
  const { wishlistIds, toggleWishlist, addToCart } = useApp();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (wishlistIds.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }
    fetch("https://fakestoreapi.com/products")
      .then(r => r.json())
      .then(all => {
        setProducts(all.filter(p => wishlistIds.includes(p.id)));
        setLoading(false);
      });
  }, [wishlistIds]);

  if (!loading && products.length === 0) {
    return (
      <div className="page page--empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <h2>Your wishlist is empty</h2>
        <p>Save items you love by tapping the heart icon.</p>
        <Link to="/" className="page__btn">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page__header">
        <h2>My Wishlist ({wishlistIds.length})</h2>
      </div>
      <div className="wishlist__grid">
        {loading ? (
          [1,2,3,4].map(n => <div key={n} className="wishlist__skeleton" />)
        ) : (
          products.map(p => (
            <div className="wishlist__card" key={p.id}>
              <button className="wishlist__heart" onClick={() => toggleWishlist(p)} aria-label="Remove from wishlist">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#e74c3c" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="wishlist__card-body">
                <h4>{p.title}</h4>
                <p className="wishlist__price">KSh {Math.round(p.price * 130).toLocaleString()}</p>
                <button className="wishlist__add" onClick={() => addToCart(p)}>Add to Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
