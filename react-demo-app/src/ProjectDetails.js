import React from "react";
function ProjectDetails() {
  return (
    <section id="project">
      <h2>Project Details</h2>
      <p>Name: Training and Placement Management System</p>
      <p>
        <span className="projectHeadings">Environment:</span> React, Java,
        Javascript, HTML, CSS, Bootstrap, GitHub, Agile, and JIRA
      </p>
      <p>
        <span className="projectHeadings" id="projectHeadingsLine2">
          Team Size:
        </span>
        <span id="projectHeadingsLine222">06</span>
        <span className="projectHeadings" id="projectHeadingsLine22">
          Duration:
        </span>
        2021-1<sup>st</sup> -{" "}
        <i>
          {" "}
          July till <u>present</u>
        </i>
      </p>
      <p>
        <span className="projectHeadings">Project Description:</span> The
        Training and Placement Management System is a comprehensive web-based
        application developed to <br /> streamline and automate the process of
        managing training programs and placement activities within an
        educational institution or organization. <br /> The main aim of the
        project is to reduce the paperwork and facilitate seamless co-ordination
        between students, recruiters, and training providers.
      </p>
      <hr />
      <h2>
        <strong>Roles and Responsibilities</strong>
      </h2>
      <ul>
        <li>
          Designed and implemented the user interface using HTML5 and CSS3
        </li>
        <li className="rolesResp">
          Worked closely with backend developers for code integration
        </li>
        <li className="rolesResp">
          Identified and troubleshot issues in front-end codebase
        </li>
        <li>Worked with GIT as a version control system</li>
        <li>Used JIRA for bug tracking</li>
      </ul>
    </section>
  );
}
export default ProjectDetails;
