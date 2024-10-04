import React from "react";

function ProfessionalSummary() {
  return (
    <section id="home">
      <h2
        id="Professional"
        style={{ color: "teal", textDecoration: "underline" }}
      >
        Professional Summary
      </h2>
      <ol>
        <li id="experience">
          Having 1 year of experience in developing single-page web applications
          using
          <span id="techSkill">
            {" "}
            Angular 8, React, HTML5, CSS3, Bootstrap5, JavaScript, TypeScript
          </span>
        </li>
        <li>
          Experience working with version control systems - GIT and GitHub
        </li>
        <li>Experience using JIRA for user stories and bug tracking</li>
        <li>
          Strong debugging & troubleshooting experience using Chrome Developer
          Tools
        </li>
        <li>Working exposure with IDEs like VS Code and Notepad++</li>
        <li>Good working experience in an Agile methodologies environment</li>
        <li>
          Experience in using Chrome Developer Tools for debugging and
          troubleshooting code
        </li>
        <li>Knowledge of Node.js</li>
        <li>Ability to work with people at all levels in the program</li>
      </ol>
    </section>
  );
}

export default ProfessionalSummary;
