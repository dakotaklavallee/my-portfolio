import React from "react";
import Project from "./Project";

export default function ProjectList() {
  return (
    <div className="col">
      <div className="row d-flex justify-content-center">
        <Project
          imgSrc={"https://i.imgur.com/EPfPvhK.png"}
          projectName={"Bon Voyage"}
          projectDesc={
            "Geocaching your local city. Built with React, Express, Node, Bootstrap, HTML5, and CSS3"
          }
          gitHub={"https://github.com/dakotaklavallee/Bon-Voyage"}
          tryIt={"https://www.bonvoyageapp.com/"}
        />
        <Project
          imgSrc={"https://i.imgur.com/KsVrNRi.png"}
          projectName={"Flashcard-O-Matic"}
          projectDesc={
            "CRUD Flashcard Study Application. Built with React, Javascript, Bootstrap, HTML5, and CSS3"
          }
          gitHub={"https://github.com/dakotaklavallee/flashcard-v2"}
          tryIt={"https://flashcard-o-matic-jet.vercel.app/"}
        />
      </div>
      <div className="row d-flex justify-content-center">
        <Project
          imgSrc={"https://i.imgur.com/idqrHDq.png"}
          projectName={"Cryptography Project"}
          projectDesc={
            "Encode and decode with different maps and methods. Built with Javascript, HTML5, and CSS3."
          }
          gitHub={"https://github.com/dakotaklavallee/decoder-ring"}
          tryIt={"https://decoder-ring-rho.vercel.app/"}
        />
        <Project
          imgSrc={"https://i.imgur.com/HeKCv5G.png"}
          projectName={"Recipe Tracker"}
          projectDesc={
            "CRUD Recipe Tracking Application. Built with React, Javascript, Bootstrap, HTML5, and CSS3"
          }
          gitHub={"https://github.com/dakotaklavallee/Recipe-Tracker"}
          tryIt={"https://recipe-tracker.vercel.app/"}
        />
      </div>
    </div>
  );
}
