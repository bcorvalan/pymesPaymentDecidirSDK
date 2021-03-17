import React from "react";

export default function CartOverview() {
  return (
    <div>
      <span className= "product__image-container">
        <img className="product__image" src="" alt="" />
      </span>
      <h3 className="product__title">usabox.com.ar</h3>
      <div className="product__price-container">
        <span className="price-tag">
          <meta itemProp="price" content="1.98500" />
          <span
            className="price-tag-symbol"
            itemProp ="priceCurrency"
            aria-hidden="true"
          >
            $
          </span>
          <span className="price-tag-fraction">1.985</span>
        </span>
      </div>
      
    </div>
  );
}
