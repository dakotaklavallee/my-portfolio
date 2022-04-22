import React from "react";
import { Link } from "react-router-dom";
import 'animate.css';
import './HomePage.css';

export default function HomePage({dakotaHandler}) {

  return (
    <div
      className="row align-items-center d-flex justify-content-between"
      style={{ height: "80vh" }}
    >
      <div className="col ml-2 animate__animated animate__fadeInLeft intro-capture">
        <h2>Hi.</h2>
        <h2 onClick={dakotaHandler} className="link-text">I'm Dakota.</h2>
        <h4>I'm a Software Engineer.</h4>
      </div>
      <div className="col d-flex flex-column justify-content-end mr-3 button-show animate__animated animate__fadeInRight">
        <Link to="/projects" className="btn btn-danger">
          View Projects
        </Link>
        <a
          href="https://docs.google.com/document/d/10FB-zrsNmmu8_GKPG8C__hJm_BFB_nZkmAla0GxJdCw/edit?usp=sharing"
          rel="noreferrer"
          target="_blank"
          className="btn btn-secondary mt-3"
        >
          View Resume
        </a>
      </div>
    </div>
  );
}
