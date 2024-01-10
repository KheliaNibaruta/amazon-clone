import React from 'react';
import './Product.css'

function Product({ id, title, image, price, rating}) {
  return (
    <div className='product'>
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

        <button>Add to cart</button>
    </div>
  );
}

export default Product;