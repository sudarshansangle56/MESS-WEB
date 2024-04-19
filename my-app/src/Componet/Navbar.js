import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar1">
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ fontSize: "2.5vh", backgroundColor: " #f0f0f0" }}
        >
          <img
            src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/orange-and-white-circle-tiffin-logo-design-template-0o80qz9b525fbe.webp"
            alt="MESS"
            style={{ height: "68px" }}
          />
          <h2>MESS</h2>
          <div className="navbtn">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav active">
              <li className="nav-item active">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link active" to="/Menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Register">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Attendence">
                  Attendence
                </Link>
              </li>
              <div className="login12">
              <li className="nav-item">
                <Link className="nav-link active" to="/Login">
                  Login
                </Link>
              </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;