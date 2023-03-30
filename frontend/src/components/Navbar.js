import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='bg-slate-900 text-slate-50 w-full h-12 p-10 h-6'>
      <div className = "">
            <li className="inline-block absolute right-7 top-7 h-16 w-16">
              <NavLink
                exact
                to="/logout"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Logout
              </NavLink>
            </li>
            <li className="inline-block absolute left-7 top-7 h-16 w-16">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
        </div>
        <div className="flex justify-center">
            <li className="inline-block p-2">
              <NavLink
                exact
                to="/update"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Update
              </NavLink>
            </li>
            <li className="inline-block p-2">
              <NavLink
                exact
                to="/city"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                City
              </NavLink>
            </li>
            <li className="inline-block p-2">
              <NavLink
                exact
                to="/lifestyle"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Lifestyle
              </NavLink>
            </li>
            <li className="inline-block p-2">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About us
              </NavLink>
            </li>
            <li className="inline-block p-2">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact us
              </NavLink>
            </li>
        </div>
        
        
      </nav>
    </>
  );
}

export default NavBar;