import React from "react";

function Signup() {
  return (
    <div className="container my-5" style={{ maxWidth: "500px" }}>
      <h1 className="mb-4 text-center">Create an Account</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Your full name" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Your email address" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Choose a password" 
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
