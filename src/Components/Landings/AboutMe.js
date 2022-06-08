import React from "react";
import "animate.css";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <>
      <div className="row ml-3 mt-4">
        <div className="animate__animated animate__fadeInLeft">
          <h2>About Me</h2>
        </div>
        <div className="about-text animate__animated animate__fadeInRight">
          <p className="pr-3 mr-2">
            I'm a full-stack engineer with a passion for the consumer. I believe
            in developing <span style={{ color: "red" }}>USER-FIRST</span>{" "}
            applications that are tested and built for the user experience.
            Coming from years of experience in the recording and marketing
            industry, I understand the power of media for clients, and I extend
            my previous creativity to my current code. I want to join a great
            team and help you build your favorite ideas.
          </p>
        </div>
      </div>
      <div className="ml-3">
        <div className="animate__animated animate__fadeInLeft">
          <h2>I Am Proficient In</h2>
        </div>
        <div className="animate__animated animate__fadeInRight">
          <ul>
            <li>React.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>Node.js</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Mocha and Chai.js</li>
            <li>Jest</li>
            <li>Git + Version Control</li>
            <li>Heroku + Vercel</li>
          </ul>
        </div>
      </div>
      <div className="ml-3">
        <div className="animate__animated animate__fadeInLeft">
          <h2>Contact Me</h2>
        </div>
        <div className="row d-flex align-items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope-fill ml-3"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          <h6 className="ml-3 my-0">dakota.k.lavallee@gmail.com</h6>
        </div>
        <div className="row d-flex align-items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-phone-fill ml-3"
            viewBox="0 0 16 16"
          >
            <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
          </svg>
          <h6 className="ml-3 my-0">(770) 548-4856</h6>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <Link to="/" className="btn btn-secondary px-3 mb-3 mr-3">Go Home</Link>
        <Link to="/projects" className="btn btn-danger px-3 mb-3">View Projects</Link>
      </div>
    </>
  );
}
