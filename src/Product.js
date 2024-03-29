import React from 'react';
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };
  return ( 
      <a className='product'>
          <div className="product__info">
              <p>{title}</p>
              <p className='product__price'>
                  <small>€</small>
                  <strong>{price}</strong>
              </p>

              <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_,i) => (
                  <p>
                    <span role='img' aria-label=''>🌟</span>
                  </p>
                ))}
              </div>
          </div>

          <img src={image} alt=''>

          </img>

          <button onClick={addToBasket}>Add to cart</button>
      </a>
  );
}

export default Product;