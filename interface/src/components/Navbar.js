import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      {/* <h2>hello bang</h2> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <Link className="navbar-brand" to="/">
          Navbar
        </Link> */}
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Features
            </a>
            <a class="nav-item nav-link" href="#">
              Pricing
            </a>
            <a class="nav-item nav-link disabled" href="#">
              Disabled
            </a>
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
