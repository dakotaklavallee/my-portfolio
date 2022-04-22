import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="row ml-3 mt-3">
      <Link
        to="/"
        className="mr-2 animate__animated animate__fadeInDown"
      >
        <img src="https://i.imgur.com/3glbZKP.png" alt="Home" width="50px" className="hover-me" />
      </Link>
      <a
        href="https://github.com/dakotaklavallee"
        target="_blank"
        rel="noreferrer"
        className="mr-2 animate__animated animate__fadeInDown hover-me"
      >
        <img src="https://i.imgur.com/NEv6VSC.png" alt="GitHub" width="50px" className="hover-me" />
      </a>
      <a
        href="https://www.linkedin.com/in/dakotalavallee/"
        target="_blank"
        rel="noreferrer"
        className="mr-2 animate__animated animate__fadeInDown hover-me"
      >
        <img
          src="https://i.imgur.com/RxdDudx.png"
          alt="LinkedIn"
          width="50px"
          className="hover-me"
        />
      </a>
    </div>
  );
}
