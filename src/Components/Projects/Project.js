import React from "react";

export default function Project({
  imgSrc,
  projectName,
  projectDesc,
  gitHub,
  tryIt,
}) {
  return (
    <div className="card my-2 mx-2" style={{width: "20rem"}}>
      <img src={imgSrc} className="card-img-top" alt="Project Card" />
      <div className="card-body">
        <h5 className="card-title">{projectName}</h5>
        <p className="card-text">{projectDesc}</p>
        <div>
          <a
            href={tryIt}
            className="btn btn-danger"
            target="_blank"
            rel="noreferrer"
          >
            Try It Out
          </a>
          <a
            href={gitHub}
            className="btn btn-light ml-2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Page
          </a>
        </div>
      </div>
    </div>
  );
}
