import React from "react";
import productsData from "./ProductsData";

function Explore() {
  const essentials = productsData.filter((p) => p.categories.includes("Essentials"));
  const bestSellers = productsData.filter((p) => p.categories.includes("Best Sellers"));
  const newLaunches = productsData.filter((p) => p.categories.includes("New Launches"));

  const renderSection = (title, products) => (
    <div className="mb-5">
      <h2 className="mb-4">{title}</h2>
      <div className="row g-4">
        {products.map((product) => (
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

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Explore Our Collections</h1>
      {renderSection("Essentials", essentials)}
      {renderSection("Best Sellers", bestSellers)}
      {renderSection("New Launches", newLaunches)}
    </div>
  );
}

export default Explore;
