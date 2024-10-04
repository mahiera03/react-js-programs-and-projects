import React from "react";

function TechStack() {
  return (
    <section id="techStack">
      <h2 style={{ color: "teal", textDecoration: "underline" }}>Tech Stack</h2>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Technology</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>HTML</td>
            <td>5</td>
          </tr>
          <tr>
            <td>2</td>
            <td>CSS</td>
            <td>5</td>
          </tr>
          <tr>
            <td>3</td>
            <td>JavaScript</td>
            <td>4</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Bootstrap</td>
            <td>5</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Angular</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>React</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default TechStack;
