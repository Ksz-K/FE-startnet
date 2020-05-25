import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("Success");
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <label style={email ? { display: "none" } : {}}>Email</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <label style={password ? { display: "none" } : {}}>Password</label>
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Do not have an account? <Link to="/register">Register</Link>
      </p>
    </Fragment>
  );
};

export default Login;
