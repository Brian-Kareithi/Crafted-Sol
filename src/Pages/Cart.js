import { useApp } from "../Context/AppContext";
import "./Pages.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useApp();

  if (cartItems.length === 0) {
    return (
      <div className="page page--empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page__header">
        <h2>Shopping Cart ({cartItems.length})</h2>
        <button className="page__clear" onClick={clearCart}>Clear All</button>
      </div>
      <div className="cart__list">
        {cartItems.map(item => (
          <div className="cart__item" key={item.id}>
            <img className="cart__item-img" src={item.image} alt={item.title} loading="lazy" />
            <div className="cart__item-info">
              <h4>{item.title}</h4>
              <p className="cart__item-price">KSh {Math.round(item.price * 130).toLocaleString()}</p>
            </div>
            <div className="cart__item-qty">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <p className="cart__item-total">KSh {(Math.round(item.price * 130) * item.quantity).toLocaleString()}</p>
            <button className="cart__item-remove" onClick={() => removeFromCart(item.id)} aria-label="Remove">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="cart__summary">
        <div className="cart__summary-row">
          <span>Subtotal</span>
          <span>KSh {cartTotal.toLocaleString()}</span>
        </div>
        <div className="cart__summary-row">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </div>
        <div className="cart__summary-row cart__summary-row--total">
          <span>Total</span>
          <span>KSh {cartTotal.toLocaleString()}</span>
        </div>
        <button className="cart__checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
