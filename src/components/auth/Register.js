import React, { Fragment } from "react";

const Register = () => (
  <Fragment>
    <h1 className="large text-primary">Sign Up</h1>
    <p className="lead">
      <i className="fas fa-user"></i> Create Your Account
    </p>
    <form className="form" action="create-profile.html">
      <div className="form-group">
        <input type="text" name="name" required />
        <label>Name</label>
      </div>
      <div className="form-group">
        <input type="email" name="email" />
        <label>Email</label>
        <small className="form-text">
          This site uses Gravatar so if you want a profile image, use a Gravatar
          email
        </small>
      </div>
      <div className="form-group">
        <input type="password" name="password" minLength="6" />
        <label>Password</label>
      </div>
      <div className="form-group">
        <input type="password" name="password2" minLength="6" />
        <label>Confirm password</label>
      </div>
      <input type="submit" className="btn btn-primary" value="Register" />
    </form>
    <p className="my-1">
      Already have an account? <a href="login.html">Sign In</a>
    </p>
  </Fragment>
);

export default Register;
