import React from "react";

function AboutMe() {
  return (
    <section id="aboutMe">
      <h2>About Me</h2>
      <h3>Profile Photo</h3>
      <img src="/developer.jpeg" alt="myPhoto" />
      <p>
        <strong>Name: </strong> Mahadev Erande
      </p>
      <p>
        <strong>Mobile No:</strong> 9657 8077 54
      </p>
      <p>
        <strong>Email: </strong>
        <span id="emailId">mahadeverande123@gmail.com</span>
      </p>
      <p>
        <strong>Date of Birth: </strong> 02 March 2002
      </p>
      <p>
        <strong>Address: </strong> Karwenagar, Pune
      </p>
      <details>
        <summary>
          <strong>Family Details</strong>
        </summary>
        <ul>
          <li>
            <strong>Father Name: </strong>Malhari Erande
          </li>
          <li>
            <strong>Mother Name: </strong>Sulabai Erande
          </li>
        </ul>
      </details>
    </section>
  );
}

export default AboutMe;
