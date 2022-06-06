import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const navigate = useNavigate();

  const { logout, isAuth } = useContext(AuthContext);

  const handleClick = () => {
    if (isAuth) {
      logout();
    } else {
      navigate("login");
    }
  };

  return (
    <div data-cy="navbar">
      {isAuth && <Link to="/" data-cy="navbar-home-link">
        Home
      </Link>}
      <span data-cy="navbar-cart-items-count">Cart:{/* count here */}</span>
      <button onClick={handleClick} data-cy="navbar-login-logout-button">
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
