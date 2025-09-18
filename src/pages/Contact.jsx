import React from "react";

function Contact() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Contact Us</h1>
      <p className="text-center mb-5">
        Have questions or feedback? We'd love to hear from you!
      </p>

      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src="/imgs/imgs17.png" 
            alt="Contact" 
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Your name" 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea 
                className="form-control" 
                rows="4" 
                placeholder="Your message">
              </textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
