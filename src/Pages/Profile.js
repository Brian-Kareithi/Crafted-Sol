import { useApp } from "../Context/AppContext";
import "./Pages.css";

const Profile = () => {
  const { user, cartCount, wishlistCount } = useApp();

  return (
    <div className="page">
      <div className="profile">
        <div className="profile__avatar">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          )}
        </div>
        <h2>{user.name}</h2>
        <p className="profile__email">{user.email}</p>
        <p className="profile__joined">Member since {user.joined}</p>

        <div className="profile__stats">
          <div className="profile__stat">
            <span className="profile__stat-num">{wishlistCount}</span>
            <span>Wishlist</span>
          </div>
          <div className="profile__stat">
            <span className="profile__stat-num">{cartCount}</span>
            <span>Cart Items</span>
          </div>
          <div className="profile__stat">
            <span className="profile__stat-num">0</span>
            <span>Orders</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
