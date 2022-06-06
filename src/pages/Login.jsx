import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/");
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <br/>
        <input
          data-cy="login-password"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <br/>
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
