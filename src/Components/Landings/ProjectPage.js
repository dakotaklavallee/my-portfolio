import React from "react";
import ProjectList from "../Projects/ProjectList";
import { Link } from "react-router-dom";
import './ProjectPage.css';
import 'animate.css';

export default function ProjectPage() {
  return (
    <div className="col project-binder">
      <div className="row d-flex justify-content-center mt-4 animate__animated animate__fadeInUp">
        <h1>Current Projects</h1>
      </div>
      <div className="row animate__animated animate__fadeInUp">
        <ProjectList />
      </div>
      <div className="row d-flex justify-content-center mt-2">
        <Link to="/" className="btn btn-secondary px-5 mb-3">Go Back</Link>
      </div>
    </div>
  );
}
