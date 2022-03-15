import React from "react";
import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h3>Home Page</h3>
        </Link>
        <ul>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/student">
            <li>Student list</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;