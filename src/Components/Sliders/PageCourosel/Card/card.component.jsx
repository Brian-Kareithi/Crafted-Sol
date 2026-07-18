import { Component } from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';
import Skeleton from '../../../Skeleton/skeleton.component';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    const { title, price, id, image } = this.props.products;
    const { isLiked, onToggleLike, product } = this.props;
    const kshPrice = Math.round(price * 130).toLocaleString();

    return (
      <div className='card' key={id}>
        {!this.state.loaded && (
          <div className='card__skeleton'>
            <Skeleton type="image" height="200px" />
            <Skeleton type="title" />
            <Skeleton type="text" width="40%" />
          </div>
        )}
        <button
          className={`card__like ${isLiked ? 'card__like--active' : ''}`}
          onClick={(e) => { e.preventDefault(); onToggleLike(product); }}
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isLiked ? '#e74c3c' : 'none'} stroke={isLiked ? '#e74c3c' : '#999'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <Link to={`/product/${id}`}>
          <img
            alt={title}
            src={image}
            loading="lazy"
            className={`card__img ${this.state.loaded ? 'card__img--loaded' : ''}`}
            onLoad={() => this.setState({ loaded: true })}
          />
          <div className='card__body'>
            <h3 className='card__title'>{title}</h3>
            <p className='card__price'>KSh {kshPrice}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
