import React from 'react'
import Product from "./Product"
import Cart from "./Cart";
import products from "../products.json";
const Home = () => {
  return (
    <div>
       <Cart />
      <div className="products">
        {products.map((product) => (
            <div className="subproduct">
          <Product  {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
