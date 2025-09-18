import React from "react";

const products = [
  {
    id: 1,
    name: "Fae Gloss",
    description: "For the luscious pout.",
    image: "/imgs/imgs1.png"
  },
  {
    id: 2,
    name: "Fae Blush",
    description: "For rosy cheeks.",
    image: "/imgs/imgs2.png"
  },
  {
    id: 3,
    name: "Fae Toner",
    description: "For smooth and glowing skin.",
    image: "/imgs/imgs3.png"
  },
  {
    id: 4,
    name: "Fae Mascara",
    description: "For long lashes that speak.",
    image: "/imgs/imgs4.png"
  }
];

function Products() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">All Products</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

