import { Component } from 'react';
import Card from "./Card/card.component";
import './card-list.style.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Skeleton from '../../Skeleton/skeleton.component';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1200, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 480 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

class CardList extends Component {
  render() {
    const { products, loading } = this.props;

    if (loading) {
      return (
        <div className="card-list__skeleton">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="card-list__skeleton-item">
              <Skeleton type="card" />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className='card-list'>
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={4000} keyBoardControl>
          {products.map((product) => (
            <Card key={product.id} products={product} />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default CardList;
