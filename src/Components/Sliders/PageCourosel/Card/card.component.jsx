import { Component } from 'react';
import './card.styles.css';
import Skeleton from '../../../Skeleton/skeleton.component';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    const { title, price, id, image } = this.props.products;
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
        <img
          alt={title}
          src={image}
          className={`card__img ${this.state.loaded ? 'card__img--loaded' : ''}`}
          onLoad={() => this.setState({ loaded: true })}
        />
        <div className='card__body'>
          <h3 className='card__title'>{title}</h3>
          <p className='card__price'>KSh {kshPrice}</p>
        </div>
      </div>
    );
  }
}

export default Card;
