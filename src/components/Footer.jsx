import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container-fluid my-5">
        <footer
          className="text-center text-lg-start text-black"
          style={{ backgroundColor: "#f9fafc62" }}
        >
          <div className="container p-5 pb-0">
            <section>
              <div className="row text-start gy-4">
                {/* About Section */}
                <div className="col-lg-4 col-md-6 border-end pe-4">
                  <h5 className="text-uppercase fw-bold mb-4">About FAE Beauty</h5>
                  <p className="small lh-lg">
                    At FAE Beauty, we believe in beauty without rules. Our vegan,
                    cruelty-free makeup products are designed to suit every skin
                    tone and style — because beauty is for everyone.
                  </p>
                </div>

                {/* Shop */}
                <div className="col-lg-2 col-md-6 border-end ps-4">
                  <h6 className="text-uppercase fw-semibold mb-4">Shop</h6>
                  <ul className="list-unstyled d-grid gap-2 small">
                    <li><a href="#!" className="text-black text-decoration-none">All Products</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Lipsticks</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Blush</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Highlighters</a></li>
                  </ul>
                </div>

                {/* Customer Care */}
                <div className="col-lg-2 col-md-6 border-end ps-4">
                  <h6 className="text-uppercase fw-semibold mb-4">Customer Care</h6>
                  <ul className="list-unstyled d-grid gap-2 small">
                    <li><a href="#!" className="text-black text-decoration-none">Contact Us</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">FAQs</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Shipping Info</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Returns</a></li>
                  </ul>
                </div>

                {/* Company */}
                <div className="col-lg-2 col-md-6 border-end ps-4">
                  <h6 className="text-uppercase fw-semibold mb-4">Company</h6>
                  <ul className="list-unstyled d-grid gap-2 small">
                    <li><a href="#!" className="text-black text-decoration-none">About Us</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Our Values</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Sustainability</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Careers</a></li>
                  </ul>
                </div>

                {/* Policies */}
                <div className="col-lg-2 col-md-6 ps-4">
                  <h6 className="text-uppercase fw-semibold mb-4">Policies</h6>
                  <ul className="list-unstyled d-grid gap-2 small">
                    <li><a href="#!" className="text-black text-decoration-none">Privacy Policy</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Terms of Use</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Refund Policy</a></li>
                    <li><a href="#!" className="text-black text-decoration-none">Accessibility</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="my-5" />

            {/* Sign up section */}
            <section className="pb-4">
              <p className="d-flex justify-content-center align-items-center mb-0">
                <span className="me-3 fs-6">Join the FAE community!</span>
                 <Link 
                to="/signup" 
                className="btn btn-outline-dark btn-rounded"
                style={{ borderRadius: "20px" }}>
                  Sign Up</Link>
              </p>
            </section>

            <hr className="my-5" />

            {/* Social icons */}
            <section className="mb-4 text-center">
              {["facebook-f","twitter","google","instagram","linkedin-in","github"].map(icon => (
                <a key={icon} className="btn btn-outline-dark btn-floating m-1 rounded-circle" href="#!" role="button">
                  <i className={`fab fa-${icon}`} />
                </a>
              ))}
            </section>
          </div>

          {/* Bottom bar */}
          <div
            className="text-center p-3 small"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © {new Date().getFullYear()} FAE Beauty — All Rights Reserved
          </div>
        </footer>
      </div>

      {/* Hover underline effect */}
      <style>{`
        a.text-decoration-none:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Footer;
