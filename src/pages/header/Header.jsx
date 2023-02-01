import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div class="header">
      <h3>
        Shahnaj<samp>Parven</samp>
      </h3>

      <ul>
        <li class="nav-item active pl-0">
          <a class="nav-link p-0 is-active" href="index.html">
            Home<span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-0" href="#service-con">
            Services
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-0" href="#about-con">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-0" href="#Portfolio">
            Portfolio
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-0" href="#testimonials">
            Testimonials
          </a>
        </li>
      </ul>
      <div class="d-inline-block contact">
        <a href="#Contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
