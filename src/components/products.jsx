import React from "react";
import productsData from "./ProductsData"; 

function Product() {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {productsData.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
