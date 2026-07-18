import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);
  const [user, setUser] = useState({
    name: 'Guest User',
    email: 'guest@craftedsol.com',
    avatar: null,
    joined: '2026',
  });

  const addToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(i => i.id !== productId));
  };

  const updateQuantity = (productId, qty) => {
    if (qty < 1) return removeFromCart(productId);
    setCartItems(prev => prev.map(i => i.id === productId ? { ...i, quantity: qty } : i));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cartItems.reduce((sum, i) => sum + Math.round(i.price * 130) * i.quantity, 0);

  const isInWishlist = useCallback((id) => wishlistIds.includes(id), [wishlistIds]);

  const toggleWishlist = (product) => {
    setWishlistIds(prev => {
      if (prev.includes(product.id)) {
        return prev.filter(id => id !== product.id);
      }
      return [...prev, product.id];
    });
  };

  const wishlistCount = wishlistIds.length;

  return (
    <AppContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal,
      wishlistIds, isInWishlist, toggleWishlist, wishlistCount,
      user, setUser,
    }}>
      {children}
    </AppContext.Provider>
  );
};
