import React from "react";

function Navigation() {
  return (
    <nav>
      <ul
        style={{ listStyle: "none", padding: 0, display: "flex", gap: "15px" }}
      >
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#techStack">TECH STACK</a>
        </li>
        <li>
          <a href="#project">PROJECT</a>
        </li>
        <li>
          <a href="#educationDetails">EDUCATION</a>
        </li>
        <li>
          <a href="#aboutMe">ABOUT ME</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
