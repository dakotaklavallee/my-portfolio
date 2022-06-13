import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import "./HomePage.css";

export default function HomePage({ dakotaHandler }) {
  return (
    <div
      className="row align-items-center d-flex justify-content-between"
      style={{ height: "80vh" }}
    >
      <div className="col ml-2 animate__animated animate__fadeInLeft intro-capture">
        <h2>Hi.</h2>
        <h2 onClick={dakotaHandler} className="link-text">
          I'm Dakota.
        </h2>
        <h4>I'm a Software Engineer.</h4>
      </div>
      <div className="col d-flex flex-column justify-content-end mr-3 button-show nav-btn animate__animated animate__fadeInRight">
        <Link
          to="/projects"
          style={{ backgroundColor: "rgba(255,79,0, 0.2)" }}
          className="btn btn-danger"
        >
          View Projects
        </Link>
        <a
          href="https://docs.google.com/document/d/1NbRaiMbX6pozNBjygUnjaUYFeZ9pJYwbbZdqVNw1lYI/edit"
          rel="noreferrer"
          target="_blank"
          style={{ backgroundColor: "rgba(33,66,60, 0.2)"}}
          className="btn btn-secondary mt-3"
        >
          View Resume
        </a>
        <button
          type="button"
          className="btn b-about mt-3"
          onClick={dakotaHandler}
          style={{ color: "#fff", borderColor: "#fff" }}
        >
          About Me
        </button>
      </div>
    </div>
  );
}
