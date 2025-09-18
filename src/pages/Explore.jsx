import React from "react";

function Explore() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Explore Our Collections</h1>
      <p className="text-center mb-5">
        Discover our curated makeup collections and find your next favorite.
      </p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Essentials" />
            <div className="card-body">
              <h5 className="card-title">Essentials</h5>
              <p className="card-text">Everyday must-haves that go with every look.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Best Sellers" />
            <div className="card-body">
              <h5 className="card-title">Best Sellers</h5>
              <p className="card-text">Our most-loved products by the FAE community.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="New Launches" />
            <div className="card-body">
              <h5 className="card-title">New Launches</h5>
              <p className="card-text">Be the first to try our newest makeup arrivals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;

