import React from "react";

export default function Product(props) {
  const { product } = props;
  return (
    <div class="card">
      <a href="product.html">
        <img class="medium" src={product.image} alt={product.name} />
      </a>
      <div class="card-body">
        <a href="product.html">
          <h2>{product.name}</h2>
        </a>
        <div class="rating">
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
        </div>
        <div class="price">${product.price}</div>
      </div>
    </div>
  );
}
